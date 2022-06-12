import {Text, SafeAreaView, ScrollView,
    StyleSheet,
    View,
    TouchableOpacity,} from 'react-native';
import React from 'react';

export default function PlannerScreen() {

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 80
        },
        progress: {
          width: "95%",
          height: 125,
          marginTop: 15,
          alignItems: "center",
        },
        title_box: {
          backgroundColor: "rgba(74,144,226,1)",
          borderRadius: 10,
          width: "95%",
          height: 40,
          justifyContent: "center",
        },
        title: {
          color: "rgba(255,255,255,1)",
          fontSize: 22,
          alignSelf: "center",
        },
        progress_container: {
          flexDirection: "row",
          width: "100%",
          marginTop: 20,
          justifyContent: "center",
        },
        progress_box: {
          backgroundColor: "rgba(213,218,223,1)",
          width: "40%",
          height: 55,
          borderRadius: 10,
          marginHorizontal: 25,
        },
        progress_title: {
          color: "#121212",
          alignSelf: "center",
          marginVertical: 4,
        },
        progress_value: {
          color: "#121212",
          fontSize: 20,
          fontWeight: "bold",
          alignSelf: "center",
        },
        exercise_container: {
          width: "95%",
          height: 400,
          alignItems: "center",
        },
        box: {
          backgroundColor: "rgba(213,218,223,1)",
          borderRadius: 10,
          width: "95%",
          height: 275,
          alignSelf: "center",
        },
        btn_box: {
          flexDirection: "row",
          width: "75%",
          justifyContent: "center",
        },
        btn_shape: {
          backgroundColor: "rgba(178,108,233,1)",
          borderRadius: 10,
          width: "50%",
          height: 40,
          marginTop: 10,
          justifyContent: "center",
        },
        btn_text: {
          color: "rgba(255,255,255,1)",
          fontSize: 16,
          textAlign: "center",
          fontWeight: "bold",
        },
      });

    return (
        <View style={styles.container}>
          <View style={styles.progress}>
            <View style={styles.title_box}>
              <Text style={styles.title}>Today's Progress! 🏃</Text>
            </View>
            <View style={styles.progress_container}>
              <View style={styles.progress_box}>
                <Text style={styles.progress_title}>Goal</Text>
                <Text style={styles.progress_value}>
                  {"85 points"}
                </Text>
              </View>
              <View style={styles.progress_box}>
                <Text style={styles.progress_title}>Current Total</Text>
                <Text style={styles.progress_value}>
                  {"60 points"}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.exercise_container}>
            <View
              style={[
                styles.title_box,
                { backgroundColor: "rgba(178,108,233,1)", marginVertical: 10 },
              ]}
            >
              <Text style={styles.title}>Today's Activity 🏋️</Text>
            </View>
            <ScrollView horizontal={false} style={styles.box}>
              <Text>Push Ups</Text>
            </ScrollView>
          </View>
          <View style={styles.btn_box}>
            <TouchableOpacity
              onPress={() => {}}
              style={[styles.btn_shape, { marginHorizontal: 10 }]}
            >
              <Text style={styles.btn_text}>Add Exercise</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={[
                styles.btn_shape,
                { backgroundColor: "rgba(153,50,245,1)", marginHorizontal: 10 },
              ]}
            >
              <Text style={styles.btn_text}>Refresh</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {}}
            style={[styles.btn_shape, { backgroundColor: "red" }]}
          >
            <Text style={styles.btn_text}>Log Out</Text>
          </TouchableOpacity>
        </View>
      );

      
}