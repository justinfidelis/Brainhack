import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../assets/colors/colors';

const voucher = require('../../assets/voucher.png');

export default function RewardsScreen() {
  const dataTopRewards = [
    {
      name: 'FnB vouchers',
      icon: voucher,
      bgColor: colors.green,
      points: 150,
    },
    {
      name: 'Mall vouchers',
      icon: voucher,
      bgColor: colors.blue,
      points: 200,
    },
    {
      name: 'Museum tickets',
      icon: voucher,
      bgColor: colors.lime,
      points: 250,
    },
    {
      name: 'ThemePark tickets',
      icon: voucher,
      bgColor: colors.brown,
      points: 300,
    },
  ];

  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.flex1}>

        <View style={styles.wrapperHeader}>
            <Text style={styles.pointText}>1000 points</Text>
            <Feather name="shopping-bag" size={30} color='#C0C0C0'></Feather>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={{paddingHorizontal: 20}}>
            <View style={styles.wrapperSearch}>
              <TextInput placeholder="Search" style={styles.textInputSearch} />
            </View>
          </View>

          <View>
            <Text style={styles.titleCategories}>Categories</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.scrollViewCategories}>
              <BoxItemCategories
                icon={<Entypo name="pin" size={20} color={colors.blue}></Entypo>}
                text="All"
              />
              <BoxItemCategories
                icon={<Ionicons name="fast-food" size={20} color={colors.blue}></Ionicons>}
                text="FnB"
              />
              <BoxItemCategories
                icon={<Entypo name="shopping-bag" size={20} color={colors.blue}></Entypo>}
                text="Shopping"
              />
              <BoxItemCategories
                icon={<Entypo name="tv" size={20} color={colors.blue}></Entypo>}
                text="Entertainment"
              />
              <BoxItemCategories
                icon={<Entypo name="price-tag" size={20} color={colors.blue}></Entypo>}
                text="Others"
              />
            </ScrollView>
          </View>
          <View style={{backgroundColor: 'white', height: 24}}></View>

          <View>
            <View style={styles.wrapperHeadTopRewards}>
              <Text style={styles.titleTopRewards}>Top Rewards</Text>
              <TouchableOpacity>
                <Text style={styles.textSeeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sectionBoxTopRewards}>
              {dataTopRewards.map((item, index) => {
                return (
                  <BoxItemTopRewards
                    key={index}
                    bgColor={item.bgColor}
                    icon={item.icon}
                    text={item.name}
                    points={item.points}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const BoxItemCategories = ({text, icon}) => {
    return (
      <TouchableOpacity style={styles.BICcontainer}>
        <View style={styles.wrapperImg}>{icon}</View>
        <Text style={styles.BICtext}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const BoxItemTopRewards = ({bgColor, icon, text, points}) => {
    return (
      <TouchableOpacity style={styles.container(bgColor)}>
        <View style={{top: -40}}>
          <View>
            <Image source={icon} style={styles.image} />
            <View style={{height: 20}}></View>
            <Text style={styles.text}>{text}</Text>
          </View>
          <View style={{height: 20}}></View>
          <View style={styles.points}>
            <Text style={styles.wrapperBottom}>{points}</Text>
            <TouchableOpacity>
              <AntDesign name="heart" size={20} color='white'></AntDesign>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };


const styles = StyleSheet.create({
  flex1: {flex: 1, backgroundColor: 'white'},
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  pointText: {
      fontSize: 30,
      fontFamily: 'PoppinsMedium',
      color: colors.green,
  },
  wrapperSearch: {
    height: 40,
    backgroundColor: 'rgba(196, 196, 196, 0.5)',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  titleCategories: {
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
    color: colors.green,
    padding: 20,
  },
  scrollViewCategories: {
    paddingLeft: 20,
  },
  wrapperHeadTopRewards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  titleTopRewards: {
    color: colors.green,
    fontFamily: 'PoppinsMedium',
    fontSize: 20,
  },
  textSeeAll: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'PoppinsRegular'
  },
  sectionBoxTopRewards: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  BICcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 17,
  },
  wrapperImg: {
    height: 60,
    width: 60,
    backgroundColor: colors.olive,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 15
  },
  BICtext: {
    marginTop: 10,
    color: '#0B0B45',
    fontSize: 14,
    fontFamily: 'PoppinsRegular'
  },
  container: bgColor => ({
    height: 160,
    width: 150,
    backgroundColor: bgColor,
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 40,
  }),
  text: {
    paddingLeft: 10,
    fontSize: 13,
    fontFamily: 'PoppinsRegular'
  },
  points: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  wrapperBottom: {
    fontSize: 18,
    fontFamily: 'PoppinsRegular'
  },
  image: {
    height: 110,
    width: 110,
    resizeMode: 'contain',
    marginLeft: 20,
  },
});