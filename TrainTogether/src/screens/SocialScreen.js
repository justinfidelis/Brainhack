import React from 'react';
import {View, SafeAreaView, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import userData from '../../assets/userData.js';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SocialScreen({navigation}) {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <SafeAreaView style={{height: '80%'}}>
                <Text style={styles.connectText}>Connect</Text>
                <FlatList
                    data={userData}
                    renderItem={renderUser}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
            <View>
                <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('Chat')}>
                    <Ionicons name="chatbubble" size={30} color='white'></Ionicons>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const renderUser = ({item}) => {
    return (
        <TouchableOpacity style={styles.userContainer}>
            <AntDesign name="user" size={60} color='black'></AntDesign>
            <Text style={styles.userInfo}>{item.name}</Text>
            <Text style={styles.userInfo}>Location: {item.location}</Text>
            <Text style={styles.userInfo}>IPPT goal: {item.goal}</Text>
        </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    chatButton: {
        backgroundColor: 'black',
        borderRadius: 40,
        width: '20%',
        height: '30%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    connectText: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingVertical: 5,
    },
    userContainer: {
        height: '50%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10
    },
    userInfo: {
        color: 'black',
        fontSize: 25,
    }
});