import { View, Text, ScrollView, Pressable, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";
export default function Search() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: " MOVELK",
      headerTitleStyle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: "35%",
      },
      headerStyle: {
        backgroundColor: "#097969",
        height: 100,
      },
    });
  }, []);
  return (
    <ScrollView>
      <View
        style={{
          margin: 20,
          borderColor: "#097969",
          borderWidth: 3,
          borderRadius: 6,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingHorizontal: 5,
            borderColor: "#097969",
            borderWidth: 2,
            paddingVertical: 5,
          }}
        >
          <EvilIcons name="location" size={24} color="black" />
          <TextInput
            placeholder="From"
            placeholderTextColor="#097969"
            style={{ fontSize: 16 }}
          />
        </Pressable>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingHorizontal: 5,
            borderColor: "#097969",
            borderWidth: 2,
            paddingVertical: 5,
          }}
        >
          <EvilIcons name="location" size={24} color="black" />
          <TextInput
            placeholder="Where"
            placeholderTextColor="#097969"
            style={{ fontSize: 16 }}
          />
        </Pressable>

        <Pressable
          style={{
            
            paddingHorizontal: 5,
            borderColor: "#097969",
            borderWidth: 2,
            paddingVertical: 5,
            backgroundColor:"#097969"
          }}
        >
          <Text style={{textAlign:"center",fontSize:16,fontWeight:'bold',color:'white',}}>Search</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
