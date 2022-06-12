import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ChatScreen({navigation}) {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('TabNavigator')}>
                    <AntDesign name="arrowleft" size={30} color='black'></AntDesign>
                </TouchableOpacity>
                <Text style={styles.header}>Chat</Text>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        flexDirection: 'row',
        justifyContent: 'flexStart'
    },
    backButton: {
        paddingLeft: 10,
        paddingRight: 30,
        paddingVertical: 20,
    },
    header: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingVertical: 20,
    },
});