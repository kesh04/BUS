import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../page/Home";
import Profile from "../page/Profile";
import { Entypo, FontAwesome, Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Search from "../page/Search";

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
              <Entypo name="home" size={24} color="#097969" />
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
              <FontAwesome name="search" size={24} color="#097969" />
            ) : (
              <FontAwesome
                name="search"
                size={24}
                color="#808080"
              />
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
              <Fontisto name="player-settings" size={24} color="#097969" />
            ) : (
              <Fontisto
                name="player-settings"
                size={24}
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
