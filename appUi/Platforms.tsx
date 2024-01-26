/* eslint-disable prettier/prettier */
import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Platforms = () => {
  return (
    <View>
      <Text style={{fontSize:30}}>Platforms : {Platform.OS}</Text>
      {
        Platform.OS=="android" ? 
        <View  style={{backgroundColor:'red', height:100, width:100}}></View>
        :
        <View style={{backgroundColor:'green', height:100, width:100}}>
        </View>
      }
      <Text style={styles.text}>
        Hello
      </Text>
      <Text>{JSON.stringify(Platform.constants.reactNativeVersion)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    text:{
       color: Platform.OS=="ios" ? "orange" : "blue"
    }
})

export default Platforms