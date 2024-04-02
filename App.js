import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/Screen/Login';
import Signup from './src/Screen/Signup';

import TabNavigation from './src/custom/TabNavigation';

import Logout from './src/page/Logout';


export default function App() {
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
    
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen  options={{ headerBackTitleVisible: false ,headerTitle: '',}} name="Home" component={TabNavigation} />
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
        <Stack.Screen   name="Logout" component={Logout} />
       

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
