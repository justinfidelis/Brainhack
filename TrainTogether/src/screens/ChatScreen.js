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
});