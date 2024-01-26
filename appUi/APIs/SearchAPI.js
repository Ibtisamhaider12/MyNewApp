/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const SearchAPI = () => {

    const [data, setData]=useState([]);
    const searchUser = async (text)=> {
       const url= `http://10.0.2.2:3000/comments?q=${text}`;
       let result = await fetch(url);
       result = await result.json();
       if (result) {
        setData(result)
       }
    } 


  return (
    <View style={{flex:1}}>
      <TextInput style={{borderColor:"skyblue", borderWidth:2, margin:15, fontSize:20,}} placeholder={"Search"} onChangeText={(text)=>searchUser(text)}/>
      {
        data.length ?
        data.map((item)=> <View style={{padding:10, flexDirection:'row', justifyContent:'space-between'}}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
            <Text>{item.email}</Text>
        </View>)
        :null
      }
    </View>
  )
}

export default SearchAPI

const styles = StyleSheet.create({})