// import { View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
// import React, { useState } from 'react';
// import DatePicker from 'react-native-datepicker';
// export default function HomeScreen() {
//     const [date, setDate] = useState(new Date());
//     var todaydate = new Date();
//     const startDate  = new Date();
//   const diffTime = Math.abs(date - startDate);
//   const diffInDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
//     return (
//         <SafeAreaView>
//            <Text style={styles.home}>Home</Text> 
//            <View style={styles.workout}>
//            </View>
//            <View style={styles.box}>
//                <Text style={styles.text}>Calorie counter</Text>
//            </View>
//            <View style={styles.box}>
//                <Text style={styles.text}>Days to IPPT</Text>
//                <DatePicker
//           style={styles.datePickerStyle}
//           date={date} //initial date from state
//           mode="date" //The enum of date, datetime and time
//           placeholder="select date"
//           format="DD-MM-YYYY"
//           minDate={todaydate}
//           maxDate="01-01-2200"
//           confirmBtnText="Confirm"
//           cancelBtnText="Cancel"
//           customStyles={{
//             dateIcon: {
//               //display: 'none',
//               position: 'absolute',
//               left: 0,
//               top: 4,
//               marginLeft: 0,
//             },
//             dateInput: {
//               marginLeft: 36,
//             },
//           }}
//           onDateChange={(date) => {
//             setDate(date);
//           }}
//         /> 
//             <Text style={styles.text}>{diffInDays}</Text>
//            </View>
//         </SafeAreaView>
//     ); 
 
// }

// const styles = StyleSheet.create({
//     home: {
//         color: 'black',
//         fontWeight: 'bold',
//         fontSize: 40,
//         paddingBottom: 10,
//         paddingLeft: 10,
//         textAlign: 'center'
//         //fontFamily: 'Comfortaa_700Bold'
//     },
//     workout: {
//         backgroundColor: 'black',
//         width: 200,
//         height: 270,
//         borderRadius: 30,
//         marginLeft: 20,
//         marginTop: 30,
//         marginBottom: 40
        
//     },
//     box: {
//         backgroundColor: 'darkgrey',
//         width: 200,
//         height: 130,
//         borderRadius: 30,
//         marginLeft: 20,
//         marginTop: 30 
//     },
//     text: {
//         alignSelf: 'center',
//         fontWeight: 'bold',
//         paddingTop: 10
//     }
// })

import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  Linking,
  View,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import colors from '../../assets/colors/colors.js';
import * as Progress from 'react-native-progress';
const headerImage = require('../../assets/army_profile.jpg');
const notification = require('../../assets/Notification.png');
const banner = require('../../assets/BG.png');
const fire = require('../../assets/fire.png');
const model = require('../../assets/model.png');
const couple = require('../../assets/couple.jpg');
const cycle = require('../../assets/cycle.png');
const yoga = require('../../assets/yoga.png');
const walk = require('../../assets/walk.png');
const next = require('../../assets/next.png');
const play = require('../../assets/play.png');
const star = require('../../assets/Star.png');
const workout = require('../../assets/workout.png');
const home = require('../../assets/Home.png');
const heart = require('../../assets/H.png');
const calendar = require('../../assets/Calender.png');
const profile = require('../../assets/User.png');
const plus = require('../../assets/Plus.png');

const App = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.screen}>
          <Header />
          <Banner />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: '3%'}}>
          <Label>Your Recommended Workouts</Label>
          <View style={{flexDirection: 'row'}}>
            {data.map((item, index) => (
              <Card data={item} index={index} />
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Label>Follow-Along Fitness</Label>
            <Text
              style={{
                fontFamily: 'PoppinsRegular',
                opacity: 0.5,
                fontSize: 12,
              }}>
              View All
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
           
              <VideoPlay />
            
          </View>
          <View style={styles.logout}>
          <TouchableOpacity
          onPress={() => navigation.navigate('LogInScreen')}
          style={[styles.btn_shape, { backgroundColor: colors.olive }]}
        >
          <Text style={styles.btn_text}>Log Out</Text>
        </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;

const BottomTab = () => (
  <View
    style={{
      position: 'absolute',
      bottom: 10,
      margin: 10,
      marginHorizontal: 25,
      borderRadius: 20,
      padding: 10,
      // width: '100%',
      backgroundColor: '#EDEDED',
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <BottomButton image={home} />
    <BottomButton image={heart} />
    <BottomButton
      image={plus}
      style={{
        position: 'absolute',
        left: '43%',
        top: -25,
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 20,
      }}
    />
    <BottomButton />
    <BottomButton image={calendar} />
    <BottomButton image={profile} />
  </View>
);
const BottomButton = ({image, style, imageStyle}) => (
  <>
    <View
      style={[
        {
          flex: 1,
          alignSelf: 'center',
          alignItems: 'center',
        },
        style,
      ]}>
      <Image
        source={image}
        style={[
          {
            height: image === plus ? 40 : 20,
            width: image === plus ? 40 : 20,
          },
          imageStyle,
        ]}
      />
    </View>
    {image === home && (
      <View
        style={{
          width: '10%',
          position: 'absolute',
          height: 2,
          backgroundColor: '#8860a2',
          bottom: 0,
          left: 25,
        }}
      />
    )}
  </>
);

const callFun = () =>
  {
 
    Linking.openURL('https://www.youtube.com/watch?v=UoC_O3HzsH0&ab_channel=FraserWilson');
 
  }

const VideoPlay = () => (
  <View
    style={{
      borderRadius: 15,
      marginHorizontal: 12,
      shadowOffset: {width: -5, height: 3},
      shadowColor: 'grey',
      shadowOpacity: 0.5,
      shadowRadius: 3,
      backgroundColor: '#fff',
    }}>
    <View style={{borderRadius: 10, overflow: 'hidden'}}>
      <ImageBackground
        source={couple}
        style={{
          height: 150,
          width: 300,
        }}>
        <LinearGradient
          locations={[0, 1.0]}
          colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.60)']}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}></LinearGradient>
      </ImageBackground>
      <Text
        style={{
          position: 'absolute',
          bottom: 5,
          left: 10,
          fontFamily: 'PoppinsMedium',
          color: '#fff',
        }}>
        Endurance
      </Text>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#fff',
          padding: 5,
          right: 10,
          top: 10,
          borderRadius: 5,
        }}>
        <Image source={star} style={{height: 10, width: 10}} />
      </View>
    </View>
    <View
      style={{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 15,
      }}>
      <View
        style={{
          position: 'absolute',
          backgroundColor: colors.brown,
          padding: 10,
          right: 25,
          top: -15,
          borderRadius: 15,
          zIndex: 3,
        }}>
       <TouchableOpacity activeOpacity = { .5 } onPress={ callFun }>
        <Image source={play} style={{height: 10, width: 10}} />
        </TouchableOpacity>     
      </View>
      <Text style={{fontFamily: 'PoppinsRegular'}}>
        10 Minutes Bodyweight Workout
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontFamily: 'PoppinsRegular', fontSize: 12}}>
          <Image source={workout} style={{height: 15, width: 20}} />
          {' Beginner'}
        </Text>
        <Text
          style={{
            fontFamily: 'PoppinsRegular',
            fontSize: 12,
            fontWeight:'bold',
            color: colors.brown,
          }}>
          10 Min
        </Text>
      </View>
    </View>
  </View>
);

const Card = ({data, index}) => {
  return (
    <View
      style={{
        flex: 1,
        height: index === 1 ? 180 : 150,
        padding: 10,
        alignSelf: 'center',
        backgroundColor: data.color,
        justifyContent: 'space-between',
        marginHorizontal: 8,
        borderRadius: 10,
        shadowColor: 'lightgrey',
        shadowOffset: {width: -5, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 2,
      }}>
      <Image source={data.image} style={{height: 25, width: 25}} />
      <View style={{alignSelf: 'center', margin: 5}}>
        <Progress.Circle
          size={50}
          progress={data.status / 100}
          showsText
          unfilledColor="#ededed"
          borderColor="#ededed"
          color={data.darkColor}
          direction="counter-clockwise"
          fill="white"
          strokeCap="round"
          thickness={5}
          style={{
            shadowColor: 'grey',
            shadowOffset: {width: 2, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 1,
          }}
          textStyle={{
            fontSize: 16,
            fontFamily: 'PoppinsBold',
            fontWeight: 'bold',
          }}
        />
      </View>
      <View>
        <Text style={{fontSize: 10, fontFamily: 'PoppinsLight'}}>
          {'Day     1'}
        </Text>
        <Text style={{fontSize: 10, fontFamily: 'PoppinsLight'}}>
          {'Time   20 min'}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontFamily: 'PoppinsRegular'}}>{data.name}</Text>
        <View
          style={{
            backgroundColor: data.lightColor,
            padding: 2,
            borderRadius: 10,
          }}>
          <Image
            source={next}
            style={{
              height: 12,
              width: 12,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
    </View>
  );
};
const Header = () => (
  <View style={styles.header}>
    <ImageContainer image={headerImage} />
    <HeaderTitle />
    <ImageContainer image={notification} height={'50%'} width={'50%'} />
  </View>
);
const startDate  = new Date();
const endDate = new Date('2022-12-12');
const diffTime = Math.abs(endDate - startDate);
const diffInDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
const Banner = () => (
  <>
    <ImageBackground style={styles.banner} source={banner}>
      <View style={styles.bannerContainer}>
        <View style={styles.rowLabel}>
          <View style={styles.fireContainer}>
            <Image
              source={fire}
              resizeMode="contain"
              style={styles.fireImage}
            />
          </View>
          <Text style={styles.offer}>Next IPPT</Text>
        </View>
        <OfferText>{diffInDays} Days to 12/12/2022</OfferText>
        <OfferText>Maju Camp</OfferText>
      </View>
    </ImageBackground>
    <Image source={model} style={styles.model} resizeMode="contain" />
  </>
);

const OfferText = ({children}) => (
  <Text style={styles.offerText}>{children}</Text>
);

const ImageContainer = ({image, height = '100%', width = '100%'}) => (
  <View style={styles.imageContainer}>
    <Image source={image} style={[{height, width}]} />
  </View>
);

const todaysDate = new Date().toDateString();

const HeaderTitle = () => (
  <View style={styles.title}>
    <Text style={styles.bigTitle}>Hi, Nicholas</Text>
    <Text style={styles.smallTitle}>{todaysDate}</Text>
  </View>
);

const Label = ({children}) => <Text style={styles.label}>{children}</Text>;
const styles = StyleSheet.create({
  btn_shape: {
    backgroundColor: colors.olive,
    borderRadius: 30,
    width: "27%",
    height: 40,
    marginTop: 10,
    justifyContent: "center",
  },
  logout: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn_text: {
    fontFamily: 'PoppinsMedium',
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {flex: 1},
  header: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {paddingHorizontal: 10, flex: 1, justifyContent: 'center'},
  bigTitle: {fontSize: 20, fontFamily: 'PoppinsBold'},
  smallTitle: {fontSize: 10, fontFamily: 'PoppinsMedium', opacity: 0.6},
  image: {height: '100%', width: '100%'},
  fireImage: {height: 15, width: 15, alignSelf: 'center', margin: 5},
  banner: {
    marginTop: 20,
    padding: 30,
    resizeMode: 'contain',
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  bannerContainer: {flex: 1},
  label: {fontFamily: 'PoppinsMedium', fontSize: 20, marginVertical: 10},
  model: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 10,
    height: '75%',
    width: '50%',
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {margin: '3%'},
  offer: {color: 'white', fontFamily: 'PoppinsRegular', fontSize: 14},
  offerText: {color: 'white', fontSize: 14, fontFamily: 'PoppinsMedium'},

  rowLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fireContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const data = [
  {
    name: 'Cycling',
    status: 85,
    image: cycle,
    lightColor: colors.olive,
    color: colors.lime,
    darkColor: 'rgb(142, 145, 110)',
  },
  {
    name:'Running',
    status: 25,
    image: walk,
    lightColor: 'rgb(115, 82, 53)',
    color: '#ab9480',
    darkColor: colors.brown,
  },
  {
    name: 'Core',
    status: 85,
    image: yoga,
    lightColor: '#25472c',
    color: '#b4d2ba',
    darkColor: '#607d66',
  },
];
