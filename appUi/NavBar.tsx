/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeNav from './HomeNav'
import Grid from './Grid'

const Stack = createNativeStackNavigator();
const NavBar = () => {
    const btnAction=() =>{
        console.warn('btn pressed');
        
    }
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
            backgroundColor: "red"
            },
            headerTintColor:'grey',
            headerTitleStyle:{
                fontSize:30,
        }
    }}>
        <Stack.Screen name='Home' component={HomeNav} 
           options={{
            headerTitle:(props)=> <Button onPress={btnAction} title='left'/>,
            headerRight:()=> <Button title='right'/>,
            title: "Home Screen",
            headerStyle:{
                backgroundColor: "orange"
                },
                headerTintColor:'white',
                headerTitleStyle:{
                    fontSize:30,
            }
        }}
        />
        <Stack.Screen name='Grid' component={Grid}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavBar

const styles = StyleSheet.create({})