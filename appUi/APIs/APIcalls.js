/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const APIcalls = () => {
    const [data, setData] = useState([]);
    const getAPIData = async () =>{
       const url = " http://10.0.2.2:3000/comments";
       let result = await fetch(url);
       result = await result.json();
       setData(result)
    }
    useEffect(()=>{
        getAPIData()
    },[])
  return (
    <View>
      <Text>APIcalls</Text>
      {
        data.length ?
        data.map((item)=> <View>
            <Text style={{fontSize:30, color:"red"}}>{item.body}</Text>
            <Text style={{fontSize:30, color:"red"}}>{item.id}</Text>
        </View>)
        : null
      }
    </View>
  )
}

export default APIcalls