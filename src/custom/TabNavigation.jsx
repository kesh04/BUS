import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../page/Home";
import Profile from "../page/Profile";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Search from "../page/Search";


const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,}}>
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarLabel:"Home",
        tabBarIcon:({color,size})=>(
          <Entypo name="home" size={24} color="#1c4b3d" />
        )

    }}/>
     <Tab.Screen name="Search" component={Search}
       options={{
        tabBarLabel:"Search",
        tabBarIcon:({color,size})=>(
          <Feather name="search" size={24} color="#1c4b3d" />
        )

    }} />
      <Tab.Screen name="Profile" component={Profile}
       options={{
        tabBarLabel:"Setting",
        tabBarIcon:({color,size})=>(
          <Feather name="settings" size={24} color="#1c4b3d" />
        )

    }} />
     
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabNavigation;
