import React, { useEffect, useState } from 'react';

// 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAccessToken } from './src/utils';

// Screens
import LoginScreen from './src/screens/LoginScreen';
import NewsScreen from './src/screens/NewsScreen';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessToken();
      if(token){
        setLoggedIn(!!token);
      }
    };
    getToken();
  }, []);
  
  return (
   <NavigationContainer>
     <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
     >
      {loggedIn ? (
        <Stack.Screen name="News" component={NewsScreen} />
        ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
     </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;
