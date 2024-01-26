import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './Login'
import Signup from './Signup'

const Tab = createBottomTabNavigator();

const Tabnav = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name='Login' component={Login}/>
        <Tab.Screen name='Signup' component={Signup}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Tabnav