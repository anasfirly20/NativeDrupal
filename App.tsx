import React, { useEffect, useState } from 'react';

// Utils
import { getAccessToken, removeAccessToken } from './src/utils';

// Screens
import LoginScreen from './src/screens/LoginScreen';
import NewsScreen from './src/screens/NewsScreen';
import NewsDetailsScreen from './src/screens/NewsDetailsScreen';

// Miscellaneous
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

// Types
type RootStackParamList = {
  Login: { action: string, handleAction: () => void };
  News: { action: string, handleAction: () => void };
  NewsDetails: { id: number };
};

const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const [user, setUser] = useState<boolean>(false);

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessToken();
      if (token) {
        setUser(true);
        console.log("THERE IS TOKEN >>>", token);
      } else {
        console.log("NO TOKEN");
      }
    };
    getToken();
  }, []);

  const handleLoginSuccess = async () => {
    setUser(true);
  };

  const handleLogout = async () => {
    removeAccessToken();
    setUser(false);
  };

  const newsScreenInitialParams = {
    action: 'LOGOUT',
    handleAction: handleLogout
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen
              name="News"
              options={{title: "NewsFeed"}}
              component={NewsScreen}
              initialParams={newsScreenInitialParams}
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
            initialParams={{ action: 'LOGIN_SUCCESS', handleAction: handleLoginSuccess }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;