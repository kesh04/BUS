import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStatusBarHeight } from "react-native-status-bar-height";


export default function Home() {
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
  const search = () => {
    navigation.navigate("Map");
  };

  return (
    // <SafeAreaView >
      <View style={styles.container}>

        
          
        <View style={styles.header}>
      
        {/* <Image style={{height:60,width:90, backgroundColor:'black', borderRadius:10, margin:5}} source={require("../../assets/images/icon.png")} /> */}
          {/* <Text
            style={{
              fontSize: 25,
              color: "#097969",
             paddingTop:-20,
             fontWeight:800,
              padding: 10,
            }}
          >
            MOVELK
          </Text> */}
          <Text style={styles.text1}>select your loaction </Text>
          <Pressable style={styles.button} onPress={search}>
            <Text style={styles.text}>Search Location</Text>
            <AntDesign style={{marginLeft:5,color:'white'}} name="right" size={15}  />

          </Pressable>
        </View>
        <ScrollView bounces={false}>
          <View style={styles.home}>
            <Image
              source={require("../../assets/images/bus.png")}
              style={styles.img1}
            />
            
          </View>
        </ScrollView>
      </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    height: "35%",
    borderRadius: 10,
  
    
  },
  text1: {
    color: "black",
    fontSize: 22,
    paddingBottom: 30,
    padding: 10,
    marginVertical: -5,
  },
  img1: {
    width: "100%",
    height: 170,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: -10,
    marginLeft: 5,
    backgroundColor: "#097969",
    width: "45%",
    height: "20%",
    flexDirection: 'row', 
  },
  text: {
    fontSize: 15,
    color: "white",
   
  },
});
