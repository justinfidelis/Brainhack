import React from 'react';
import {
  StyleSheet, TouchableOpacity,
  View,Button,Text, Dimensions, Image, ImageBackground, Pressable
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import { NavigationContainer } from '@react-navigation/native';
import Dialog from 'react-native-dialog';
import {
  ProgressChart,
} from "react-native-chart-kit";
import AntDesign from 'react-native-vector-icons/AntDesign';

const deviceWidth= Math.round(Dimensions.get('window').width);

const data1 = {
  labels: ["Fat", "Carbohydrates", "Protein"], // optional
  data: [0.4, 0.6, 0.8]
};


const data = [
  {
    label: 'Breakfast'
   },
   {
    label: 'Morning Snack'
   },
   {
    label: 'Lunch'
   },
   {
    label: 'Afternoon Snack'
   },
   {
    label: 'Dinner'
   },
   {
    label: 'Supper'
   },
  ];
  const banner = require('../../assets/BG.png');
export default class CalorieScreen extends React.Component{
  state={
    visible:false,
  }
  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate('TabNavigator')}>
              <AntDesign name="arrowleft" size={30} color='black'></AntDesign>
        </TouchableOpacity>
        <View style={styles.cardContainer}>
          <ImageBackground style={styles.imageStyle} source= {require('../../assets/BG.png')}>
          <Image style={styles.imageStyle1} source= {require('../../assets/food_tracker.png')}/>
          </ImageBackground>
          <Text style={styles.bodyStyle}>Hey Nicholas,</Text>
          <Text style={styles.bodyStyle}>Track down your daily food intake to have a healthy and balanced diet!</Text>
          <Text style={styles.titleStyle}>Target: 1,317 kCal</Text></View>
          <View style={{paddingTop: 20}}>
          <Pressable style={styles.button}  onPress={()=>this.setState({visible:true})}>
          <Text style={styles.buttonStyles}>RECORD CALORIE INTAKE</Text>
          </Pressable>
          <Text style={{paddingLeft:150, paddingTop:35, fontSize: 17, fontWeight: "bold"}}>Today</Text>
          <Image  style={{height:20,width:20, opacity:0.8, position:'absolute',top:100, left:200}} source= {require('../../assets/today.png')}></Image>
          <ProgressChart
  data={data1}
  width={ deviceWidth - 15 }
  height={220}
  chartConfig={{
    //backgroundColor: '#478438',
    backgroundGradientFrom: '#FFF8E1',
    backgroundGradientTo: '#FFF8E1',
    //decimalPlaces: 2,
    color: (opacity = 1) => `rgba(75,84,59, ${opacity})`,
  }}
  style= {{
    borderRadius: 15,
    paddingTop:5
  }}
/>
      <Dialog.Container visible={this.state.visible}>
      <RadioButtonRN
  data={data}
  selectedBtn={(e) => console.log(e)}
/>
        <Dialog.Button label="Done" onPress={()=>
          {this.props.navigation.navigate('Food');
          this.setState({visible:false});
        }} />
        <Dialog.Button label="Cancel" onPress={()=>this.setState({visible:false})} />
        
      </Dialog.Container>

          </View>
        
      </View>
    )
  }

}

const styles=StyleSheet.create({
  backButton: {
    paddingLeft: 10,
    paddingRight: 25,
    paddingVertical: 20,
    alignSelf: 'flex-start'
  },
  container:{
    //flex:10,
    //justifyContent:"space-between",
    alignItems:"center",
    paddingTop:50
  },
  cardContainer:{
    width: deviceWidth - 30, 
    backgroundColor: '#DFD8C8',
    height: 300,
    borderRadius:15,
    shadowColor: '#000000',
  shadowOffset: {
  width: 5,
  height: 5,
},shadowOpacity: 0.75,
shadowRadius:5,
elevation: 9,
paddingBottom:50
},
imageStyle: {
  width: deviceWidth-30,
  height: 200,
  borderRadius:30,
  overflow:"hidden",
  opacity: 0.9

},
imageStyle1: {
  top: 22,
  left: 125,
  width: 150,
  height: 150,
  //justifyContent:"space-between"
},
titleStyle:{
  color: "#663046",
  fontWeight:"900",
  fontSize:23,
  paddingLeft:100,
  paddingTop: 5,
  //fontStyle:"italic"
},
bodyStyle:{
  color: "#290916",
  fontWeight:"900",
  fontSize:15,
  paddingLeft:20,
  paddingTop:5,
  fontStyle:"italic"
},
button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 7,
    elevation: 5,
    backgroundColor: "#DFD8C8"
    
},
buttonStyles: {
  fontSize: 15,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: '#663046',
},

})

