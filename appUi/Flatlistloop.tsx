/* eslint-disable prettier/prettier */
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Externalstyles from '../style'

const Flatlistloop = () => {
    const users=[
        {
            id:1,
            name:"ibtisam",
            email:"abc@gmail.com"
        },
        {
            id:2,
            name:"Ali",
            email:"abc@gmail.com"
        },
        {
            id:3,
            name:"husnain",
            email:"abc@gmail.com"
        },
        {
            id:4,
            name:"hassan",
            email:"abc@gmail.com"
        },
        {
            id:5,
            name:"Zain",
            email:"abc@gmail.com"
        },
        {
            id:12,
            name:"Alis",
            email:"abc@gmail.com"
        },
        {
            id:13,
            name:"husnains",
            email:"abc@gmail.com"
        },
        {
            id:14,
            name:"hassasn",
            email:"abc@gmail.com"
        },
        {
            id:15,
            name:"Zains",
            email:"abc@gmail.com"
        },
       
    ]
  return (
    <View>
      <Text style={Externalstyles.txt}>Flatlistloop</Text>
      <FlatList  
      data={users}
      renderItem={({item})=> <UserData item={item}/>}
      />
    </View>
  )
}

const UserData = (props) => {
    const item = props.item;
    return(
        <View style={Externalstyles.userBox}>
        <Text style={Externalstyles.userItem}>{item.name}</Text>
        <Text>{item.email}</Text>
      </View>
    )
}

export default Flatlistloop