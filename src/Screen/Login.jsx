import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Input from "../custom/Input";
import Button from "../custom/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../FirebaseConfig";
import { useNavigation } from "@react-navigation/native";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();

  const signInUser = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);

      navigation.navigate("Home");
    } catch (error) {
      console.error("Error signing in:", error.message);

      setShowError(true);
      setErrorMessage(error.message);
    }
  };

  const signUp = () => {
    navigation.navigate("Signup");
  };

  const signInWithGoogle = () => {};

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
         
          <Text style={styles.heading}>Login In</Text>
          <Input
            placeholder="E-mail"
            value={email}
            setValue={setEmail}
          />
          <Input
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          {showError && <Text style={styles.error}>{errorMessage}</Text>}
          <Button text="Sign In" onPress={signInUser} />
          <Button
            text="Sign In with Google"
            bgcolor="#FAE9EA"
            fgcolor="#DD4D44"
            onPress={signInWithGoogle}
          />
   
          <Button
            text="Don't have an account? Create one"
            onPress={signUp}
            type="TERITIARY"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    marginTop: 70,
  },
  heading: {
    color: "black",
    fontSize: 34,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
