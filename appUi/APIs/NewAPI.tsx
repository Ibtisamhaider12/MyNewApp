/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const NewAPI = () => {
    
    const [data, setData] = useState([]);

    const getAPIData = async ()=>{
        const url ="https://jsonplaceholder.typicode.com/posts"
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }
    useEffect(()=> {
        getAPIData()
    }, []);
  return (
    <ScrollView>
      <Text>NewAPI</Text>
      {
        data.length ? 
        data.map((item)=>
            <View style={{padding:20, borderBottomColor:"#ccc", borderBottomWidth:1}}>
                <Text style={{fontSize:20, backgroundColor:"#ddd"}}>{item.id}</Text>
                <Text  style={{fontSize:20}}>{item.title}</Text>
                <Text style={{fontSize:20}}>{item.body}</Text>
            </View>
         )
        :null
      }
    </ScrollView>
  )
}

export default NewAPI

const styles = StyleSheet.create({})