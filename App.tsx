import React, { useEffect, useState } from 'react';

// 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAccessToken, removeAccessToken } from './src/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens
import LoginScreen from './src/screens/LoginScreen';
import NewsScreen from './src/screens/NewsScreen';
import NewsDetailsScreen from './src/screens/NewsDetailsScreen';

const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator();

  const [user, setUser] = useState<boolean>(false);

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessToken();
      if(token){
        setUser(true);
        console.log("THERE IS TOKEN >>>", token)
      } else {
        console.log("NO TOKEN");
        123
      }
    };
    getToken();
  }, []);
  
  const handleLoginSuccess = async () => {
    setUser(true);
  };

  const handleLogout = async () => {
    removeAccessToken()
    setUser(false);
  };
  
  return (
   <NavigationContainer>
     <Stack.Navigator
      screenOptions={{
        headerShown: false, 
      }}
     >
      {user ? (
        <>
          <Stack.Screen name="News"
          options={{
            headerShown: false,
            headerTitle: 'News Feed',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={NewsScreen}
          initialParams={{ action: 'LOGOUT', handleAction: handleLogout }} 
          />
          <Stack.Screen 
          name="News Details"
          options={{ title: 'NewsDetails' }}
          component={NewsDetailsScreen}
           />
        </>
        ) : (
        <Stack.Screen name="Login"
        options={{ title: 'Login' }}
        component={LoginScreen}
        initialParams={{ action: 'LOGIN_SUCCESS', handleAction: handleLoginSuccess }} 
        />
      )}
     </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;
