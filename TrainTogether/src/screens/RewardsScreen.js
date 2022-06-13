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

const voucher = require('../../assets/voucher.png');

export default function RewardsScreen() {
  const dataTopRewards = [
    {
      name: 'FnB vouchers',
      icon: voucher,
      bgColor: 'rgba(227,206,243,0.5)',
      points: 150,
    },
    {
      name: 'Mall vouchers',
      icon: voucher,
      bgColor: 'rgba(255, 234, 232, 0.5)',
      points: 200,
    },
    {
      name: 'Museum tickets',
      icon: voucher,
      bgColor: 'rgba(187, 208, 136, 0.5)',
      points: 250,
    },
    {
      name: 'ThemePark tickets',
      icon: voucher,
      bgColor: 'rgba(140, 250, 145,0.5)',
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
                icon={<Entypo name="pin" size={20} color='#dc143c'></Entypo>}
                color="#f4c2c2"
                text="All"
              />
              <BoxItemCategories
                icon={<Ionicons name="fast-food" size={20} color='#f6ad2d'></Ionicons>}
                color="rgba(233, 255, 210, 0.5)"
                text="FnB"
              />
              <BoxItemCategories
                icon={<Entypo name="shopping-bag" size={20} color='#65350f'></Entypo>}
                color="#C4A484"
                text="Shopping"
              />
              <BoxItemCategories
                icon={<Entypo name="tv" size={20} color='#7f7d9c'></Entypo>}
                color="#f0ceff"
                text="Entertainment"
              />
              <BoxItemCategories
                icon={<Entypo name="price-tag" size={20} color='#fee227'></Entypo>}
                color="rgba(255, 250, 204, 0.5)"
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

const BoxItemCategories = ({text, color, icon}) => {
    return (
      <TouchableOpacity style={styles.BICcontainer}>
        <View style={styles.wrapperImg(color)}>{icon}</View>
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
            <Text style={styles.wrapperButtom}>${points}</Text>
            <TouchableOpacity>
              <AntDesign name="heart" size={20} color='#C0C0C0'></AntDesign>
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
      fontWeight: 'bold',
      color: '#45b6fe',
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
    color: '#45b6fe',
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
    color: '#45b6fe',
    fontSize: 20,
  },
  textSeeAll: {
    color: 'black',
    fontSize: 12,
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
  wrapperImg: color => ({
    height: 60,
    width: 60,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }),
  BICtext: {
    marginTop: 10,
    color: '#0B0B45',
    fontSize: 14,
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
    fontSize: 16,
  },
  points: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  wrapperButtom: {
    fontSize: 18,
  },
  image: {
    height: 110,
    width: 110,
    resizeMode: 'contain',
    marginLeft: 20,
  },
});