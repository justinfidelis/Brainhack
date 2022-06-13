/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import React,{ useState, useEffect } from 'react';
import LoginScreen from "react-native-login-screen";
export default function SignUpScreen({navigation}) {
    return (
        <LoginScreen
        logoImageSource={require("../../assets/traintogether.png")} 
        onLoginPress={() => navigation.navigate('TabNavigator')} 
        signupText={() => {}}
        loginTextStyle={() => "Sign Up"}
        onEmailChange={(email: string) => {}}
        onPasswordChange={(password: string) => {}}
      />
    )
} */
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity} from 'react-native';
export default function SignUpScreen({navigation}) {
  const [value, setValue] = useState('')
  const [isEmailFocused, setEmailFocused] = useState(false)
  const [isPwFocused, setPwFocused] = useState(false)
  const [isIPPTGoalFocused, setIPPTGoalFocused] = useState(false)
  const [isBirthdayFocused, setBirthdayFocused] = useState(false)
  const [isFitnessFocused, setFitnessFocused] = useState(false)
  return (
    <SafeAreaView>
      <Image style={styles.img} source={require('../../assets/traintogether.png')} /> 
      <TextInput placeholder = "Email" 
                 placeholderTextColor={isEmailFocused == true ? 'rgb(14, 53, 179)' : 'grey'}
                 style={[styles.textinput, {borderColor: isEmailFocused == true ? 'rgb(14, 53, 179)' : 'rgb(230, 232, 240)'}]}
                 onChangeText={value => setValue(value)}
                 onFocus={() => setEmailFocused(true)}
                 onBlur={() => setEmailFocused(false)}>
      </TextInput>
      <TextInput placeholder = "Password" 
                 placeholderTextColor={isPwFocused == true ? 'rgb(14, 53, 179)' : 'grey'}
                 style={[styles.textinput, {borderColor: isPwFocused == true ? 'rgb(14, 53, 179)' : 'rgb(230, 232, 240)'}]}
                 onChangeText={value => setValue(value)}
                 onFocus={() => setPwFocused(true)}
                 onBlur={() => setPwFocused(false)}
                 secureTextEntry>
      </TextInput>
      <TextInput placeholder = "IPPT Goal" 
                 placeholderTextColor={isIPPTGoalFocused == true ? 'rgb(14, 53, 179)' : 'grey'}
                 style={[styles.textinput, {borderColor: isIPPTGoalFocused == true ? 'rgb(14, 53, 179)' : 'rgb(230, 232, 240)'}]}
                 onChangeText={value => setValue(value)}
                 onFocus={() => setIPPTGoalFocused(true)}
                 onBlur={() => setIPPTGoalFocused(false)}>
      </TextInput>
      <TextInput placeholder = "Birthday" 
                 placeholderTextColor={isBirthdayFocused == true ? 'rgb(14, 53, 179)' : 'grey'}
                 style={[styles.textinput, {borderColor: isBirthdayFocused == true ? 'rgb(14, 53, 179)' : 'rgb(230, 232, 240)'}]}
                 onChangeText={value => setValue(value)}
                 onFocus={() => setBirthdayFocused(true)}
                 onBlur={() => setBirthdayFocused(false)}>
      </TextInput>
      <TextInput placeholder = "Fitness Level" 
                 placeholderTextColor={isFitnessFocused == true ? 'rgb(14, 53, 179)' : 'grey'}
                 style={[styles.textinput, {borderColor: isFitnessFocused == true ? 'rgb(14, 53, 179)' : 'rgb(230, 232, 240)'}]}
                 onChangeText={value => setValue(value)}
                 onFocus={() => setFitnessFocused(true)}
                 onBlur={() => setFitnessFocused(false)}>
      </TextInput>
      <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('TabNavigator')}>
        <Text style={styles.signup}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goLogIn}
                        onPress={() => navigation.navigate('LogInScreen')}>
        <Text style={styles.login}>Already have an account?</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  textinput: {
      backgroundColor: 'rgb(230, 232, 240)',
      width: '90%',
      alignSelf: 'center',
      height: 52,
      marginTop: 10,
      paddingLeft: 10,
      borderRadius: 9,
      marginBottom: 5,
      borderColor: 'rgb(230, 232, 240)',
      borderWidth: 1,
      color: 'black'
  },
  button: {
    backgroundColor: 'rgb(66, 174, 227)',
      width: '90%',
      alignSelf: 'center',
      height: 41,
      marginTop: 25,
      borderRadius: 10,
      marginBottom: 7
  },
  signup: {
    fontWeight:'bold',
    textAlign: 'center',
    color:'white',
    paddingTop: 9,
    fontSize: 16
  },
  login: {
    color: 'rgb(170, 170, 170)',
    textAlign:'center',
    marginTop: 27
  }
})