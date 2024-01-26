/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React from 'react'
import Externalstyles from '../style'

const Grid = (props) => {
    console.warn(props.route.params);
    
   
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
        {
            id:130,
            name:"husnains",
        },
        {
            id:140,
            name:"hassasn",
        },
        {
            id:150,
            name:"Zains",
        },
        {
            id:70,
            name:"huss",
        },
        {
            id:80,
            name:"haasn",
        },
        {
            id:90,
            name:"Zans",
        },
        {
            id:140,
            name:"hassasn",
        },
        {
            id:150,
            name:"Zains",
        },
        {
            id:70,
            name:"huss",
        },
        {
            id:80,
            name:"haasn",
        },
        {
            id:90,
            name:"Zans",
        },
    ]
  return (
      <View>
        
        <Text>Grid Section</Text>
        <ScrollView>
        <View style={Externalstyles.grid}>
        {
            users.map((item)=><Text style={Externalstyles.items}>{item.name}</Text>)
        }
        </View>

        </ScrollView>
        
    </View>
  )
}

export default Grid