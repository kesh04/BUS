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
import { Button } from "react-native";
export default function Home() {
  const navigation = useNavigation();
  // useLayoutEffect(()=>{
  //   navigation.setOptions({
  //     headerShown: true,
  //     title:'',
  //     headerStyle:{
  //       backgroundColor:'red',
  //       height:100
  //     }
  //   })
  // },[])
  const search = () => {
    navigation.navigate("Map");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 25,

              color: "#097969",
              fontWeight: 800,
              padding: 10,
            }}
          >
            MOVELK
          </Text>
          <Text style={styles.text1}>select your loaction </Text>
          <Pressable style={styles.button} onPress={search}>
            <Text style={styles.text}>Search Location</Text>
            <AntDesign style={{marginLeft:8,color:'white'}} name="right" size={16}  />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    height: "auto",
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
    borderRadius: 40,
    marginTop: -10,
    marginLeft: 5,
    backgroundColor: "#097969",
    width: "30%",
    height: "20%",
    flexDirection: 'row', 
  
    
  
   
  },
  text: {
    fontSize: 15,
    color: "white",
    paddingLeft:10
  },
});
