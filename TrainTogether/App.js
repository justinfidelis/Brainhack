import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{ useState, useEffect } from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import LoginScreen from "react-native-login-screen";
import { useFonts } from 'expo-font';

/*export default function App() {
  const [viewIndex, setViewIndex] = useState(0)
  //0: Login; 1: Home; 2: ...

  return viewIndex === 0 ? (
    <View style={styles.container}>
      <LoginScreen
        logoImageSource={require("./assets/traintogether.png")}
        onLoginPress={() => setViewIndex(1)} //TODO add firebase stuff
        onSignupPress={() => {}}
        onEmailChange={(email: string) => {}}
        onPasswordChange={(password: string) => {}}
      />
      <StatusBar style="auto" />
    </View>
  ) : viewIndex === 1 ? (
    <AppNavigation />
  ) : (
  <View style={styles.container}></View> //This is a placeholder blank screen
  ); 
} */

export default function App() {
  const [loaded] = useFonts({
    HelveticaNeue: require('./assets/fonts/HelveticaNeue-Medium.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <AppNavigation />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 