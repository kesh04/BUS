import { View, Text, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import TabNavigation from "../custom/TabNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStatusBarHeight } from "react-native-status-bar-height";
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

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>keshan</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 30,
    paddingTop: getStatusBarHeight(),
  },
  header: {
    backgroundColor: "#286ef0",
    height: 70,
    alignItems: "flex-start",
  },
});
