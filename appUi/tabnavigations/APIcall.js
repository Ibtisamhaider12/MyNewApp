/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const APIcall = () => {
    const [data, setData]= useState(undefined);

    const getAPIData = async() => {
        // APIcall
        const url = "https://jsonplaceholder.typicode.com/posts/1";
        let result = await fetch(url);
        result =await result.json();
        setData(result)
    }

    useEffect(()=>{
        getAPIData();
    })

  return (
    <View>
      <Text>APIcall</Text>
      {
        data ?<View>
            <Text>{data.id}</Text>
            <Text>{data.userId}</Text>
            <Text>{data.title}</Text>
            <Text>{data.body}</Text>
        </View> :null
      }
    </View>
  )
}

export default APIcall

const styles = StyleSheet.create({})