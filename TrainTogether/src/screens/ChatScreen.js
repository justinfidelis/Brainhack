import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ChatScreen({navigation}) {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('TabNavigator')}>
                    <AntDesign name="arrowleft" size={30} color='white'></AntDesign>
                </TouchableOpacity>
                <Text style={styles.header}>Chat</Text>
            </SafeAreaView>
            <UnreadMessageComponent name={'George'}/>
            <MessageComponent name={'Joe'}/>
            <MessageComponent name={'David'}/>
            <MessageComponent name={'Peter'}/>
        </View>
    );
}

const MessageComponent = (props) => {
    return (
        <View style={styles.messageContainer}>
            <View style={styles.profpic}>
                <AntDesign name="user" size={40} color='white'></AntDesign>
            </View>
            <Text style={styles.messageText}>{props.name}</Text>
        </View>
    );
}

const UnreadMessageComponent = (props) => {
    return (
        <View style={styles.messageContainer}>
            <View style={styles.profpic}>
                <AntDesign name="user" size={40} color='white'></AntDesign>
            </View>
            <Text style={styles.messageText}>{props.name}</Text>
            <View style={styles.unreadAlert}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#98c1d9',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        flexDirection: 'row',
        justifyContent: 'flexStart'
    },
    backButton: {
        paddingLeft: 10,
        paddingRight: 25,
        paddingVertical: 20,
    },
    header: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingVertical: 10,
    },
    messageContainer: {
        height: '10%',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        justifyContent: 'flexStart',
        alignItems: 'center',
        paddingLeft: 20,
        paddingVertical: 10,
        flexDirection: 'row'
    },
    profpic: {
        backgroundColor: '#d3d3d3',
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginRight: 10
    },
    messageText: {
        fontSize: 20
    },
    unreadAlert: {
        backgroundColor: '#5579c6',
        position: 'absolute',
        right: 40,
        marginVertical: 28,
        height: 10,
        width: 10,
        borderRadius: 10
    }
});