import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import Button from "../custom/Button";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Profile() {
  const navigation = useNavigation();
 
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      title:' MOVELK',
      headerTitleStyle:{
        color:'white',
        fontSize:20,
       fontWeight:'bold',
      paddingHorizontal:'35%',
      
      },
      headerStyle:{
        backgroundColor:'#097969',
        height:100,
       
      }, 
    
   
    })
  },[])
  return (
    
      <View
        style={{  justifyContent: "center", alignItems: "center" }}
      >
        <Button text="Logout" onPress={() => navigation.navigate("Logout")} />
      </View>
    
  );
}
