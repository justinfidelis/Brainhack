import React from 'react';
import {View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import userData from '../../assets/userData.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../assets/colors/colors.js';

export default function SocialScreen({navigation}) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.headerText}>Connect</Text>
                <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('Chat')}>
                    <Ionicons name="chatbubble" size={30} color='white'></Ionicons>
                </TouchableOpacity>
            </View>
            <FlatList
                data={userData}
                renderItem={renderUser}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const renderUser = ({item}) => {
    return (
        <TouchableOpacity style={styles.userContainer}>
            <View style={styles.profpic}>
                <Image source={item.image} resizeMode='cover' style={styles.image}></Image>
            </View>
            <View style={{height: 30}}></View>
            <Text style={styles.userInfo}>{item.name}</Text>
            <Text style={styles.userInfo}>Location: {item.location}</Text>
            <Text style={styles.userInfo}>IPPT goal: {item.goal}</Text>
            <View style={{height: 30}}></View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.userButton}>
                    <Text style={styles.userButtonText}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userButton}>
                    <Text style={styles.userButtonText}>Follow</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    chatButton: {
        backgroundColor: colors.brown,
        borderRadius: 10,
        width: 40,
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    },
    headerText: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'PoppinsMedium',
        paddingLeft: 20,
        paddingVertical: 5,
    },
    userContainer: {
        height: '95%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: colors.blue,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 10
    },
    profpic: {
        backgroundColor: '#d3d3d3',
        borderRadius: 100,
        borderWidth: 1,
        height: 200,
        width: 200,
        borderColor: colors.olive,
        overflow: "hidden",
    },
    userInfo: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'PoppinsRegular'
    },
    userButton: {
        backgroundColor: colors.lime,
        marginHorizontal: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.olive,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    userButtonText: {
        fontSize: 15,
        fontFamily: 'PoppinsRegular'
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 100,
    }
});