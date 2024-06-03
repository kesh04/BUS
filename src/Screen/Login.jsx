

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [confirm, setConfirm] = useState(null);
  const [remainingAttempts, setRemainingAttempts] = useState(3); // Number of remaining attempts
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingAttempts < 3) {
        setRemainingAttempts(3); // Reset remaining attempts after a certain period
      }
    }, 24 * 60 * 60 * 1000); // Reset after 24 hours

    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in
        navigation.replace("Home"); // Redirect to Home screen
      }
    });

    return () => {
      clearInterval(timer);
      unsubscribe();
    };
  }, [remainingAttempts, navigation]);

  const signInWithPhoneNumber = async () => {
    if (remainingAttempts <= 0) {
      Alert.alert(
        "Too many attempts",
        "You have exceeded the maximum number of login attempts. Please try again later."
      );
      return;
    }

    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      setRemainingAttempts(prev => prev - 1); // Decrease remaining attempts
    } catch (error) {
      console.error("Error sending code:", error);
      if (error.code === "auth/too-many-requests") {
        Alert.alert(
          "Too many requests",
          "We have blocked all requests from this device due to unusual activity. Please try again later."
        );
      } else {
        Alert.alert("Error", error.message);
      }
    }
  };

  const confirmCode = async () => {
    if (!confirm) {
      console.log("Confirmation object is null");
      return;
    }

    try {
      const userCredential = await confirm.confirm(code);
      const user = userCredential.user;

      const userDocument = await firestore()
        .collection("user")
        .doc(user.uid)
        .get();

      if (userDocument.exists) {
        navigation.navigate("Home");
      } else {
        navigation.navigate("Detail", { uid: user.uid });
      }
    } catch (error) {
      console.log("Invalid code", error);
      Alert.alert("Invalid code", "The code you entered is invalid. Please try again.");
    }
  };

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#BEBDB8" }}>
      <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 40, marginTop: 150 }}>Login</Text>
      {!confirm ? (
        <>
          <Text style={{ marginBottom: 20, fontSize: 18 }}>Enter your phone number</Text>
          <TextInput
            style={{
              height: 50,
              width: "100%",
              borderColor: "black",
              borderWidth: 1,
              marginBottom: 30,
              paddingHorizontal: 10,
            }}
            placeholder="e.g., +94 123 456 7890"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <TouchableOpacity
            onPress={signInWithPhoneNumber}
            style={{
              backgroundColor: "#FED339",
              padding: 10,
              borderRadius: 5,
              marginBottom: 20,
              alignItems: "center",
            }}
            disabled={remainingAttempts <= 0} // Disable button if no remaining attempts
          >
            <Text style={{ color: "black", fontSize: 22, fontWeight: "bold" }}>Send Code</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={{ marginBottom: 20, fontSize: 18 }}>Enter OTP</Text>
          <TextInput
            style={{
              height: 50,
              width: "100%",
              borderColor: "black",
              borderWidth: 1,
              marginBottom: 30,
              paddingHorizontal: 10,
            }}
            placeholder="Enter code"
            value={code}
            onChangeText={setCode}
          />
          <TouchableOpacity
            onPress={confirmCode}
            style={{
              backgroundColor: "#FED339",
              padding: 10,
              borderRadius: 5,
              marginBottom: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "black", fontSize: 22, fontWeight: "bold" }}>Confirm Code</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Login;
