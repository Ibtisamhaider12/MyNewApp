/* eslint-disable prettier/prettier */
import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Sectionlist = () => {
     const users=[
        {
            id:1,
            name:"ibtisam",
            data: ["html", "css", "js", "node"]
        },
        {
            id:2,
            name:"Ali",
            data: ['html', 'css', 'js', 'node']
        },
        {
            id:3,
            name:"husnain",data: ['html', 'css', 'js', 'node']
        },
        {
            id:4,
            name:"hassan",
            data: ['html', 'css', 'js', 'node']
        },
        {
            id:5,
            name:"Zain",
           data: ["react", "html", "js", 'vue']
        },
        {
            id:12,
            name:"Alis",
            data: ['html', 'css', 'js', 'node']
        },
        {
            id:13,
            name:"husnains",
            data: ['html', 'css', 'js', 'node']
        },
       
    ]
  return (
    <View>
      <SectionList 
      sections={users}
      renderItem={({item})=><Text style={{fontSize: 15, marginLeft: 20}}>{item}</Text>}
      renderSectionHeader={({section:{name}})=>(
        <Text style={{color:'red', fontSize: 22, marginLeft: 10}}>{name}</Text>
      )}
      />
    </View>
  )
}

export default Sectionlist

const styles = StyleSheet.create({
  color:{
    
  }
})