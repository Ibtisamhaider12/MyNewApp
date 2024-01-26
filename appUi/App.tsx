import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Externalstyles from '../style'


const App = () => {
  const [name,setName] =useState("haider")
  
  return (
    <View>
      <Button title='update Props' onPress={()=> setName("ibtisam")}/>
      <User name={name} age={25}/>
    </View>
  )
  
}

const User=(props)=>{
  return( 
  <View>
    <Text style={{fontSize:30}}>Name: {props.name}</Text>
    <Text style={{fontSize:30}}>Age: {props.age}</Text>
    <Text style={Externalstyles.txt}>hi</Text>
  </View>
  );
}
