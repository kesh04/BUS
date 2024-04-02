import { View, Text } from 'react-native'
import React from 'react'
import Button from "../custom/Button";
import { useNavigation } from "@react-navigation/native";
export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={{padding:20,justifyContent:'center',alignItems:'center'}}>
     
      <Button
            text="Logout"
            onPress={() => navigation.navigate("Logout")}
           
          />

    </View>
  )
}