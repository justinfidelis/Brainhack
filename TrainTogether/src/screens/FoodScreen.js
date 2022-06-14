import React, {useRef, useState} from 'react';
import { Alert,Text, View, FlatList, TouchableHighlight, TextInput } from 'react-native';

const data =[
    {id:1, name:"McChicken"},
    {id:2, name:"Burger"},
    {id:3, name:"White Rice"},
    {id:4, name:"Brown Rice"}
]
const getItem = (name) => {

    Alert.alert(name, "hello");

  }
const FoodScreen = () => {

    const [dataFromState, setData]=useState(data)

    const item = ({item})=>{
        return(
            <View>
                <Text onPress={()=> getItem(item.name)}>{item.name}</Text>
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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 200,
      }}>
        <View>
            <TextInput 
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
    </View>
  )
}
export default FoodScreen;