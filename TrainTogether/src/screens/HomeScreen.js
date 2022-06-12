import { View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-datepicker';
export default function HomeScreen() {
    const [date, setDate] = useState(new Date());
    var todaydate = new Date();
    return (
        <SafeAreaView>
           <Text style={styles.home}>Home</Text> 
           <View style={styles.workout}>
           </View>
           <View style={styles.box}>
               <Text style={styles.text}>Calorie counter</Text>
           </View>
           <View style={styles.box}>
               <Text style={styles.text}>Days to IPPT</Text>
               <DatePicker
          style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate={todaydate}
          maxDate="01-01-2200"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        /> 
            <Text style={styles.text}>{diffInDays}</Text>
           </View>
        </SafeAreaView>
    ); 
 
}
const moment = require('moment');
const startDate  = new Date().getDate();
const endDate    = '2022-12-12';
const diffInDays = moment(endDate).diff(moment(startDate), 'days'); 
const styles = StyleSheet.create({
    home: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
        paddingBottom: 10,
        paddingLeft: 10,
        textAlign: 'center'
        //fontFamily: 'Comfortaa_700Bold'
    },
    workout: {
        backgroundColor: 'black',
        width: 200,
        height: 270,
        borderRadius: 30,
        marginLeft: 20,
        marginTop: 30,
        marginBottom: 40
        
    },
    box: {
        backgroundColor: 'darkgrey',
        width: 200,
        height: 130,
        borderRadius: 30,
        marginLeft: 20,
        marginTop: 30 
    },
    text: {
        alignSelf: 'center',
        fontWeight: 'bold',
        paddingTop: 10
    }
})
