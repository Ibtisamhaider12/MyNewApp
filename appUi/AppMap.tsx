/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Externalstyles from '../style'

const AppMap = () => {
    const users=[
        {
            id:1,
            name:"ibtisam",
        },
        {
            id:2,
            name:"Ali",
        },
        {
            id:3,
            name:"husnain",
        },
        {
            id:4,
            name:"hassan",
        },
        {
            id:5,
            name:"Zain",
        },
        {
            id:12,
            name:"Alis",
        },
        {
            id:13,
            name:"husnains",
        },
        {
            id:14,
            name:"hassasn",
        },
        {
            id:15,
            name:"Zains",
        },
        {
            id:7,
            name:"huss",
        },
        {
            id:8,
            name:"haasn",
        },
        {
            id:9,
            name:"Zans",
        },
    ]
  return (
    <ScrollView>
      <Text>AppMap</Text>
      {
        users.map((data)=><Text style={Externalstyles.maptxt}>{data.name}</Text>)
      }
    </ScrollView>
  )
}

export default AppMap

const styles = StyleSheet.create({

})