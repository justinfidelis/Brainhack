import React from 'react';
import {View, SafeAreaView, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import userData from '../../assets/userData.js';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SocialScreen({navigation}) {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <Text style={styles.headerText}>Connect</Text>
            <FlatList
                data={userData}
                renderItem={renderUser}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <Text style={styles.headerText}>Messages</Text>
            <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('Chat')}>
                <Ionicons name="chatbubble" size={30} color='white'></Ionicons>
                <Text style={{color: 'white'}}>Chat</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const renderUser = ({item}) => {
    return (
        <TouchableOpacity style={styles.userContainer}>
            <View style={styles.profpic}>
                <AntDesign name="user" size={60} color='white'></AntDesign>
            </View>
            <Text style={styles.userInfo}>{item.name}</Text>
            <Text style={styles.userInfo}>Location: {item.location}</Text>
            <Text style={styles.userInfo}>IPPT goal: {item.goal}</Text>
        </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    chatButton: {
        backgroundColor: '#98c1d9',
        borderRadius: 10,
        width: '70%',
        height: '10%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        marginTop: 20
    },
    headerText: {
        color: '#0B0B45',
        fontSize: 35,
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingVertical: 5,
    },
    userContainer: {
        height: '95%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#3d5a80',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 10
    },
    profpic: {
        backgroundColor: '#d3d3d3',
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    userInfo: {
        color: 'white',
        fontSize: 20,
    }
});