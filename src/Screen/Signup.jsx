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
  export default function Signup() {
    const { height } = useWindowDimensions();
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [confirmpassword, SetconfirmPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState(true); // to check on password
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Error msg");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [emailValid, setEmailValid] = useState(true);
  
    const signIn = ()=>{
      console.warn('Sign in');
    }
    const signup = ()=>{
      console.warn('Sign in');
    }
    const signIngoogle = ()=>{
      console.warn('Sign in with  google');
    }
    
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              alignItems: "center",
              padding: 20,
              marginTop: 20,
            }}
          >
              
            <Text style={style.Heading}>Create an account</Text>
  
            <Input placeholder="E-mail" value={email} setValue={onChangeEmail} />
            <Input
              placeholder="Password"
              value={password}
              setValue={onChangePassword}
              secureTextEntry={true}
            />
            <Input
              placeholder="Confirm Password"
              value={confirmpassword}
              setValue={SetconfirmPassword}
              secureTextEntry={true}
            />
  
            <Button text="Register"  onPress={signIn}/>
            <Button
              text="Sign In with Google"
              bgcolor="#FAE9EA"
              fgcolor="#DD4D44"
              onPress={signIngoogle}
            />
  
            <Button text="You have an account?  Login in " onPress={signup} type="TERITIARY" />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const style = StyleSheet.create({
    Heading: {
      color: "#052c60",
      fontSize: 24,
      margin:10,
      fontWeight:'bold'
      
    },
  });
  