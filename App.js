// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import { useCallback } from 'react';
// import Login from './src/Screen/Login';
// import Signup from './src/Screen/Signup';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './src/Screen/Home';

// export default function App() {

//   const Stack = createNativeStackNavigator();

//   return (
//     <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen  options={{ headerShown: false }} name="Signup" component={Signup} />
//     </Stack.Navigator>
//   </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/Screen/Login';
import Signup from './src/Screen/Signup';
import Home from './src/page/Home';
import TabNavigation from './src/custom/TabNavigation';
import Profile from './src/page/Profile';
import Logout from './src/page/Logout';


export default function App() {
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
    
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen  name="Home" component={TabNavigation} />
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
        <Stack.Screen  name="Logout" component={Logout} />
       

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
