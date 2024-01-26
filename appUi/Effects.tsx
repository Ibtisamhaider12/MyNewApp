/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Users from './Users';

const Effects = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  // useEffect(()=> {
  //   console.warn('do Some Animation');
  // },[count, data]);

  // useEffect(()=> {
  //   console.warn('call Api Here');
  // },[data]);
  
  return (
    <View>
      <Text style={{fontSize:25}}>{data} Effects {count}</Text>

      <Button 
      title='Update Counter' 
      onPress={()=> setCount(count+1)}
      />
      <Button 
      title='Update data' 
      onPress={()=> setData(data+1)}
      />
      <Users info={{data, count}}/>
    </View>
  )


}
export default Effects;

