import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../page/Home";
import Profile from "../page/Profile";
import { Entypo, FontAwesome, Fontisto } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Search from "../page/Search";
import { FontAwesome5 } from '@expo/vector-icons';
import Specail from "../page/Specail";
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="#FED339" />
            ) : (
              <Entypo
                name="home"
                size={24}
                color="#808080"
              />
            ),
        }}
      />
    
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused }) =>
            focused ? (
           
              <MaterialCommunityIcons name="bus-clock" size={25} color="#FED339" />
            ) : (
              <MaterialCommunityIcons name="bus-clock" size={25}  color="#808080" />
            ),
        }}
      />
        <Tab.Screen
        name="Specail"
        component={Specail}
        options={{
          tabBarLabel: "Specail Bus",
          tabBarIcon: ({ focused }) =>
            focused ? (
           
         
               
            <FontAwesome5 name="bus-alt" size={20} color="#FED339" />
          ) : (
           
            <FontAwesome5 name="bus-alt" size={20} color="#808080" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Fontisto name="player-settings" size={22} color="#FED339" />
            ) : (
              <Fontisto
                name="player-settings"
                size={22}
                color="#808080"
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabNavigation;
