import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Input from "../custom/Input";
import Button from "../custom/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../FirebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { Path, Svg } from "react-native-svg";

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
          <Svg>
            <Path d="M0,64L40,64C80,64,160,64,240,74.7C320,85,400,107,480,144C560,181,640,235,720,229.3C800,224,880,160,960,117.3C1040,75,1120,53,1200,74.7C1280,96,1360,160,1400,192L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"/>
          </Svg>
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
