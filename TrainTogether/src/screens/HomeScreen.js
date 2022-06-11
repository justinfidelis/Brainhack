import { View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
//import AppLoading from 'expo-app-loading';
//import { useFonts, Comfortaa_700Bold, Comfortaa_300Light } from '@expo-google-fonts/comfortaa';

export default function HomeScreen() {

    /*let [fontsLoaded] = useFonts({
        Comfortaa_700Bold,
        Comfortaa_300Light
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    */

    return (
        <SafeAreaView>
           <Text style={styles.home}>Home</Text> 
        </SafeAreaView>
    ); 
 
}

const styles = StyleSheet.create({
    home: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
        paddingBottom: 10,
        paddingLeft: 10,
        fontFamily: 'Comfortaa_700Bold'
    }
})
