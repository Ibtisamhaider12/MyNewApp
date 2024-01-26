/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const PostAPI = () => {
    const saveAPIData= async()=>{
        const data = {
            title:"Techno",
            id:"550"
        }
        const url = "http://10.0.2.2:3000/comments"
        let result = await fetch(url, {
            method:"Post",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        result = await result.json();
        console.warn(result);

    }
  return (
    <View>
      <Text>PostAPI</Text>
      <Button title='Save Data' onPress={saveAPIData}/>
    </View>
  )
}

export default PostAPI