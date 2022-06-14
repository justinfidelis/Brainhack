import {Text, SafeAreaView, ScrollView,
    StyleSheet,
    View,
    TouchableOpacity,} from 'react-native';
import React from 'react';
import colors from '../../assets/colors/colors.js';

export default function PlannerScreen() {

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 80,

        },
        progress: {
          width: "95%",
          height: 125,
          marginTop: 15,
          alignItems: "center",
        },
        title_box: {
          backgroundColor: colors.green,
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
          height: 450,
          alignItems: "center",
        },
        box: {
          backgroundColor: "rgba(213,218,223,1)",
          borderRadius: 10,
          width: "95%",
          height: 10,
          alignSelf: "center",
        },
        btn_box: {
          flexDirection: "row",
          width: "75%",
          justifyContent: "center",
        },
        btn_shape: {
          backgroundColor: colors.green,
          borderRadius: 10,
          width: "50%",
          height: 40,
          marginTop: 40,
          justifyContent: "center",
        },
        btn_text: {
          color: "rgba(255,255,255,1)",
          fontSize: 16,
          textAlign: "center",
          fontWeight: "bold",
        },
      });

    let exercise = [];
    let activityTotal = 0.0;
    const activities = [{id: 0, name: "2.4km Run", duration: "11min", points: 20}, {id: 1, name: "Sit Ups", duration: "30 reps", points:20}, {id: 2, name: "Push Ups", duration: "20 reps", points:20}];

    activities.forEach((x) => {
      exercise.push(
        <View
          key={x.id}
          style={{
            alignItems: "center",
            width: 340,
            height: 100,
            paddingTop: 8,
            marginBottom: 15,
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(230,230,230,1)",
              borderRadius: 15,
              padding: 15,
              width: "95%",
              height: "95%",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>{x.name}</Text>
            <Text>{"Rate: " + x.duration}</Text>
            <Text>{"Points: " + x.points}</Text>
          </View>
        </View>
      );
      activityTotal = activityTotal + x.points;
    });

    return (
        <View style={styles.container}>
        <View style={styles.progress_box}>
                <Text style={styles.progress_title}>Today is</Text>
                <Text style={styles.progress_value}>
                  {"12/06/2022"}
                </Text>
              </View>
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
                { backgroundColor: colors.olive, marginVertical: 10 },
              ]}
            >
              <Text style={styles.title}>Today's Attempt 🏋️</Text>
            </View>
            <ScrollView horizontal={false} style={styles.box}>
              <Text>{exercise}</Text>
            </ScrollView>
          </View>
          <View style={styles.btn_box}>
            <TouchableOpacity
              onPress={() => {}}
              style={[styles.btn_shape, { marginHorizontal: 10 }]}
            >
              <Text style={styles.btn_text}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={[
                styles.btn_shape,
                { backgroundColor: colors.olive, marginHorizontal: 10 },
              ]}
            >
              <Text style={styles.btn_text}>Refresh</Text>
            </TouchableOpacity>
          </View>
        </View>
      );

      
}