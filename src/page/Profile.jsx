import { View, Text } from "react-native";
import React from "react";
import Button from "../custom/Button";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Profile() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{ padding: 20, justifyContent: "center", alignItems: "center" }}
      >
        <Button text="Logout" onPress={() => navigation.navigate("Logout")} />
      </View>
    </SafeAreaView>
  );
}
