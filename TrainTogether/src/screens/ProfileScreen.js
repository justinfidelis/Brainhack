import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import colors from '../../assets/colors/colors.js';


function ProfileScreen() {
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
          const cameraStatus = await Camera.requestPermissionsAsync();
          setHasCameraPermission(cameraStatus.status === 'granted');
    
          const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
          setHasGalleryPermission(galleryStatus.status === 'granted');
    
        })();
      }, []);


      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

      if (hasGalleryPermission === false) {
        return <View />;
      }
      
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.titleBar}>
                    
                </View>

                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                    {image && <Image source={{uri: image}} style={{width: 200, height: 200, borderRadius: 100}} />}
                    </View>
                    <View style={styles.dm}>
                        <MaterialIcons name="chat" size={18} color={colors.lime}></MaterialIcons>
                    </View>
                    {/*<View style={styles.active}></View>*/}
                    <TouchableOpacity style={styles.active}>
                        <Ionicons name="camera-outline" size={48} color={colors.lime} style={{ alignItems: 'center', marginTop: 3, marginLeft: 5}}></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.add}
                                      onPress={() => pickImage()}>
                        <Ionicons name="ios-add" size={48} color={colors.lime} style={{ marginTop: 5, marginLeft: 4 }}></Ionicons>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Nicholas</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Commando</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>10</Text>
                        <Text style={[styles.text, styles.subText]}>Workouts Done</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: colors.lime, borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>25</Text>
                        <Text style={[styles.text, styles.subText]}>Followers</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>24</Text>
                        <Text style={[styles.text, styles.subText]}>Following</Text>
                    </View>
                </View>

                <View style={{ marginTop: 32 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../../assets/media1.jpg")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../../assets/media2.jpg")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../../assets/media3.jpg")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                    </ScrollView>
                    <View style={styles.mediaCount}>
                        <Text style={[styles.text, { fontSize: 24, color: colors.lime, fontWeight: "300" }]}>2</Text>
                        <Text style={[styles.text, { fontSize: 12, color: colors.lime, textTransform: "uppercase" }]}>Goals</Text>
                    </View>
                </View>
                <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                Started following <Text style={{ fontWeight: "400" }}>Junfeng</Text> and <Text style={{ fontWeight: "400" }}>Louis Ang</Text>
                            </Text>
                        </View>
                    </View>

                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                Finished <Text style={{ fontWeight: "400" }}>30 min HIIT Workout</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    text: {
        fontFamily: "PoppinsRegular",
        color: "#52575D"
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500",
        fontFamily: 'PoppinsRegular'
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'rgb(225, 227, 237)',
        overflow: "hidden"
    },
    dm: {
        backgroundColor: colors.olive,
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: colors.olive, //"#34FFB9"
        position: "absolute",
        bottom: 28,
        top: 140,
        left: 10,
        //marginTop: 100,
        height: 60,
        width: 60,
        borderRadius: 30
    },
    add: {
        backgroundColor: colors.olive,
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: colors.olive,
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: colors.lime,
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
})

export default ProfileScreen;