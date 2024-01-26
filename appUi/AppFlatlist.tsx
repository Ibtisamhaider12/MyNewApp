/* eslint-disable prettier/prettier */
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppFlatlist = () => {
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
    ]

  return (
    <View>
      <Text>AppFlatlist</Text>
      <FlatList
      data={users}
      renderItem={({item})=><Text>{item.name}</Text>}
      keyExtractor={item=>item.id}
      />
    </View>
  )
}

export default AppFlatlist;