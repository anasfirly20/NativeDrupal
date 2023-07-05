import React from 'react';

// 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Screens
import LoginScreen from './src/screens/LoginScreen';
import NewsScreen from './src/screens/NewsScreen';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  
  return (
   <NavigationContainer>
     <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
     >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;
