import { View, Text } from 'react-native'
import React from 'react'
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
export default function Logout() {
  const navigation = useNavigation();
   
  
  return (
    <View>
      <Text>Logout</Text>
    </View>
  )
}