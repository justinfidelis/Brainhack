import React, {useRef, useState} from 'react';
import { Alert,Text, View, FlatList, TouchableHighlight, TextInput, ScrollView, StyleSheet, Image } from 'react-native';

const data =[
    {id:1, name:"Big Mac", cal:"540"},
    {id:2, name:"Quarter Pounder Burger", cal:"540"},
    {id:3, name:"Hamburger",cal:"250"},
    {id:4, name:"Cheeseburger", cal:"300"},
    {id:5, name:"Double Cheeseburger", cal:"300"},
    {id:6, name:"Triple Cheeseburger", cal:"520"},
    {id:7, name:"Filet-o-Fish",cal:"390"},
    {id:8, name:"McChicken", cal:"350"},
    {id:9, name:"Buttermilk Crispy Chicken", cal:"570"},
    {id:10, name:"4 Piece Chicken Nuggets", cal:"180"},
    {id:11, name:"6 Piece Chicken Nuggets",cal:"270"},
    {id:12, name:"10 Piece Chicken Nuggets", cal:"440"},
    {id:13, name:"20 Piece Chicken Nuggets", cal:"890"},
    {id:14, name:"Buttermilk Crispy Tenders", cal:"490"},
    {id:15, name:"4 Piece Crispy Tenders",cal:"490"},
    {id:16, name:"6 Piece Crispy Tenders", cal:"730"},
    {id:17, name:"Egg McMuffin", cal:"300"},
    {id:18, name:"Sausage McMuffin", cal:"400"},
    {id:19, name:"Sausage and Egg McMuffin",cal:"470"},
    {id:20, name:"McGriddle", cal:"550"},
    {id:21, name:"Hashbrown", cal:"150"},
    {id:22, name:"French Fries", cal:"340"},
    {id:23, name:"Medium French Fries",cal:"300"},
    {id:24, name:"Small French Fries", cal:"240"},
    {id:25, name:"McFlurry", cal:"300"},
    {id:26, name:"Oreo McFlurry", cal:"400"},
    {id:27, name:"Caramel Macchiato",cal:"400"},
    {id:28, name:"Mocha Frappe", cal:"400"},
    {id:29, name:"White Bread",cal:"280"},
    {id:30, name:"Milk", cal:"250"},
    {id:31, name:"White Rice", cal:"150"},
    {id:32, name:"Brown Rice", cal:"100"},
    {id:33, name:"Chicken Curry",cal:"250"},
    {id:34, name:"Cookie", cal:"240"},
    {id:35, name:"Pizza", cal:"500"},
    {id:36, name:"Eggs", cal:"400"},
    {id:37, name:"Chocolate",cal:"400"},
    {id:38, name:"Chips", cal:"100"},
]

const getItem = (name, cal, navigation) => {

    Alert.alert(name, "Calories: "+cal,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "ADD", onPress: () => {console.log("Add Pressed");
      navigation.navigate('Calorie')} }
    ]);

  }
const FoodScreen = ({navigation}) => {

    const [dataFromState, setData]=useState(data)

    const item = ({item})=>{
        return(
          
            <View style={{alignItems:"center"}}>
                <Text style={{fontSize:15, color: "#290916", paddingBottom:8}} onPress={()=> getItem(item.name,item.cal, navigation)}>{item.name}</Text>
            </View>
        )
    }

    const searchName =(input)=>{
        let data = dataFromState
        let searchData = data.filter((item)=>{
            return item.name.toLowerCase().includes(input.toLowerCase())
        });
        setData(searchData)
    }

  return (
    <ScrollView>
    
        <View style={{marginTop:60}}>
            <TextInput style={styles.searchBar}
            placeholderTextColor= 'white'
            placeholder='Search For Food'
            onChangeText={(input)=>{
                searchName(input)
            }}
            />
        </View>
      <FlatList
        data={dataFromState}
        renderItem={item}
        keyExtractor={(item, index) => index.toString()}
        //extraData={selectedId}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#8d967d',
    color: 'white',
    borderRadius: 30,
    fontSize: 17,
    //width: 370,
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    justifyContent: "center",
    paddingLeft: 20
  }
})
  

export default FoodScreen;