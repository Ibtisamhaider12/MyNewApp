/* eslint-disable prettier/prettier */
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Externalstyles from '../style'

const AppForm = () => {
    const [name, setName]= useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [display, setDisplay] = useState(false)
    const [show, setShow] = useState()

    const resetFromData = () => {
        setDisplay(false);
        setEmail("");
        setName("");
        setPassword("");
    }
  return (
    <View>
      <Text>AppForm</Text>
      <TextInput style={Externalstyles.txt} placeholder='Enter User Name'
      onChangeText={(text)=>setName(text)}
      value={name}
      />
      <TextInput style={Externalstyles.txt} placeholder='Enter User Email'
      onChangeText={(text)=>setEmail(text)}
      value={email}
      />
      <TextInput style={Externalstyles.txt} placeholder='Enter User Password'
      secureTextEntry={false}
      onChangeText={(text)=>setPassword(text)}
      value={password}
      />
      <Pressable style={Externalstyles.btn} onPress={()=>setDisplay(true)}>
         <Text style={Externalstyles.btnTxt}>Print</Text>
    </Pressable>
    <Button title='Delete' onPress={resetFromData}/>
    <View>
        {
            display ?
        <View>
        <Text style={Externalstyles.txt}>User Name is : {name}</Text>
        <Text style={Externalstyles.txt}>User email is : {email}</Text>
        <Text style={Externalstyles.txt}>User password is : {password}</Text>
        </View>
            :null
        }
    </View>
    </View>
  )
}

export default AppForm