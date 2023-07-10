import React, { useEffect } from 'react';

// Utils
import { getAccessToken } from './src/utils';

// Screens
import LoginScreen from './src/screens/LoginScreen';
import NewsScreen from './src/screens/NewsScreen';
import NewsDetailsScreen from './src/screens/NewsDetailsScreen';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { login } from './src/redux/authSlice';

// Miscellaneous
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Types
type RootStackParamList = {
  Login: { action: string, handleAction: () => void };
  News: { action: string, handleAction: () => void };
  NewsDetails: { id: number };
};

const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const {isAuthenticated} = useSelector((state : any) => state.auth)  
  const dispatch = useDispatch()

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessToken();
      if (token) {
        dispatch(login())
      }
    };
    getToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
        <>
          <Stack.Screen
            name="News"
            options={{ title: 'NewsFeed' }}
            component={NewsScreen}
          />
          <Stack.Screen
            name="NewsDetails"
            options={{ title: 'NewsDetails' }}
            component={NewsDetailsScreen}
          />
        </>
        ) : (
          <Stack.Screen
            name="Login"
            options={{ title: 'Login' }}
            component={LoginScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;