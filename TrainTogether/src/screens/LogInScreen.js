import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import React,{ useState, useEffect } from 'react';

import LoginScreen from "react-native-login-screen";

export default function LogInScreen({navigation}) {
    return (
        <LoginScreen
        logoImageSource={require("../../assets/traintogether.png")} 
        onLoginPress={() => navigation.navigate('TabNavigator')} 
        onSignupPress={() => {}}
        onEmailChange={(email) => {}}
        onPasswordChange={(password) => {}}
      />
    )
}