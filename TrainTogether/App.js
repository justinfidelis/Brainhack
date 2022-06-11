import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "react-native-login-screen";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen
  logoImageSource={require("/Users/ryanguai/Documents/Brainhack/TrainTogether/assets/traintogether.png")}
  onLoginPress={() => {}}
  onSignupPress={() => {}}
  onEmailChange={(email: string) => {}}
  onPasswordChange={(password: string) => {}}
/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
