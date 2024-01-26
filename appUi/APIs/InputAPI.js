/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const InputAPI = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(''); // Change to string
  const [email, setEmail] = useState('');



  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const saveData = async () => {
    setNameError(!name);
    setAgeError(!age);
    setEmailError(!email);

    if (!name || !age || !email) {
      return false;
    }
    

    console.warn("next");
    const url = "http://10.0.2.2:3000/comments";
    let result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, age, email })
    });
    result = await result.json();
    if (result){
        console.warn("Data Added");
    }
  };

  return (
    <View>
      <Text>InputAPI</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder='Enter name'
      />
      {
        nameError ?<Text style={styles.errorTxt}>Please enter valid name</Text> :null
      }
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={(text) => setAge(text)} // Update to string
        placeholder='Enter Age'
        keyboardType='numeric' // Add this to show a numeric keyboard
      />
       {
        ageError ?<Text style={styles.errorTxt}>Please enter valid age</Text> :null
      }
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder='Enter Email'
      />
       {
        emailError ?<Text style={styles.errorTxt}>Please enter valid email</Text> :null
      }
      <Button style={styles.btn} title='Save data' onPress={saveData} />
    </View>
  );
};

export default InputAPI;

const styles = StyleSheet.create({
  input: {
    borderColor: "blue",
    borderWidth: 1,
    margin: 20,
    marginBottom:5
  },
  errorTxt:{
    color:"red",
    marginLeft:22,
    zIndex:3
  }
});
