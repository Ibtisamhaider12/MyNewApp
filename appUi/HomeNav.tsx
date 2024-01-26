import { StyleSheet, Text, View,Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const HomeNav = (props) => {
    const [name,setName] = useState("");
    const pass = 345;
  return (
    <View>

      <Text>Home Screen</Text>
      <TextInput style={{fontSize:30, borderColor:'#000', borderWidth:2, alignItems:'center'}} onChangeText={(text)=> setName(text)} placeholder='Enter Name'/>
         <Button title='go to Grid' onPress={()=> props.navigation.navigate('Grid',{name,pass})}/>
    </View>
  )
}

export default HomeNav

