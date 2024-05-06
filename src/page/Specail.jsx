import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
const Specail = () => {
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
        <View>
            <Text>
            keshana
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Specail;
