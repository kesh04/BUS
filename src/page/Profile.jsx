import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import Button from "../custom/Button";
import auth from "@react-native-firebase/auth";
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
        backgroundColor:'#FED339',
        height:100,
       
      }, 
    
   
    })
  },[])

  const handleout = async ()=>{
    try{
  await auth().signOut()
  navigation.reset({
    index:0,
    routes:[{name:"Login"}],
  })
    }catch (error){
  console.log("ERROR ", error);
    }
  }

  return (
    
      <View
        style={{  justifyContent: "center", alignItems: "center" }}
      >
        <Button text="Logout" onPress={handleout} />
      </View>
    
  );
}
