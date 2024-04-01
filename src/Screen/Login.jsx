import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Input from "../custom/Input";
import Button from "../custom/Button";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
  const { height } = useWindowDimensions();
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(true); // to check on password
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error msg");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
const navigation = useNavigation()
  const signIn = ()=>{
   navigation.navigate('Home')
  }
  const signup = ()=>{
    navigation.navigate('Signup')
  }
  const signIngoogle = ()=>{
    navigation.navigate('')
  }
  
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: "center",
            padding: 20,
            marginTop: 70,
          }}
        >
           
          <Text style={style.Heading}>Login In</Text>

          <Input placeholder="E-mail" value={email} setValue={onChangeEmail} />
          <Input
            placeholder="Password"
            value={password}
            setValue={onChangePassword}
            secureTextEntry={true}
          />

          <Button text="Sign In"  onPress={signIn}/>
          <Button
            text="Sign In with Google"
            bgcolor="#FAE9EA"
            fgcolor="#DD4D44"
            onPress={signIngoogle}
          />

          <Button text="don't have an account? Create one" onPress={signup} type="TERITIARY" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  Heading: {
    color: "black",
    fontSize: 34,
  },
});
