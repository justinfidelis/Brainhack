import React,{ useState, useEffect } from 'react';
import {View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import userData from '../../assets/userData.js';
import colors from '../../assets/colors/colors.js';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default function SocialScreen({navigation}) {
    const [viewType, setViewType] = useState(0)

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flexDirection: 'column', justifyContent: 'space-between', flex: 1}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1, flexGrow: 1}}>
                    <Text style={styles.headerText}>Connect</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity style={viewType === 0 ? styles.viewButtonSelected : styles.viewButtonUnselected} onPress={() => setViewType(0)}>
                            <Ionicons name="map" size={30} color='white'></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity style={viewType === 1 ? styles.viewButtonSelected : styles.viewButtonUnselected} onPress={() => setViewType(1)}>
                            <Ionicons name="albums" size={30} color='white'></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('Chat')}>
                            <Ionicons name="chatbubble" size={30} color='white'></Ionicons>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1, flexGrow: 10}}> 
                {viewType === 0 ? 
                    (<MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        region={{
                            latitude: 1.43714,
                            longitude: 103.78799,
                            latitudeDelta: 0.04,
                            longitudeDelta: 0.03
                        }}
                    >
                        <Marker 
                            coordinate={{latitude: 1.43835, longitude: 103.79014}}
                            image={require('./../../assets/selfpin.png')}
                        />
                        <Marker 
                            coordinate={{latitude: 1.43632, longitude: 103.77908}}
                            image={require('./../../assets/dude1pin.png')}
                        />
                        <Marker 
                            coordinate={{latitude: 1.44356, longitude: 103.79803}}
                            image={require('./../../assets/dude2pin.png')}
                        />
                        <Marker 
                            coordinate={{latitude: 1.45235, longitude: 103.77949}}
                            image={require('./../../assets/dude3pin.png')}
                        />
                        <Marker 
                            coordinate={{latitude: 1.40178, longitude: 103.80715}}
                            image={require('./../../assets/dog1pin.png')}
                        />
                    </MapView>) :
                    (<FlatList
                        data={userData}
                        renderItem={renderUser}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />)}
                </View>
            </View>
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
    viewButtonSelected: {
        backgroundColor: "#77614F",
        borderRadius: 10,
        width: 40,
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    },
    viewButtonUnselected: {
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
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});