/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Users = (props) => {
    useEffect(()=> {
        console.warn('run this code when data prop is updated');
        
    },[props.info.data])
    useEffect(()=> {
        console.warn('run this code when count prop is updated');
        
    },[props.info.count])
  return (
    <View>
    <Text style={{fontSize:25, color: 'orange'}}>User Component data : {props.info.data} </Text>
    <Text style={{fontSize:25, color: 'orange'}}>User Component Count : {props.info.count} </Text>
  </View>
  )
}

export default Users

