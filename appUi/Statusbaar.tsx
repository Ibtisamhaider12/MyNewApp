/* eslint-disable prettier/prettier */
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Statusbaar = () => {
  <Button title='StatusBar'/>
    const [hide, setHide]=useState(false);
    const [barStyle,setBarStyle] = useState("default")
  return (
    <View style={styles.container}>
      <StatusBar
      backgroundColor="pink"
      barStyle={barStyle}
      hidden={hide}
      />

    <Button
    title='Toggle status Bar'
    onPress={()=> setHide(!hide)}/>
    <Button
    title='update Style'
    onPress={()=> setBarStyle("dark-content")}/>


</View>
  );
};

export default Statusbaar

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
})