/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View, Button, Modal, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from '../../style'

const ListwithAPI = () => {
    const [data,setData]= useState([])
    const [modal, setModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(undefined);
    const getAPIData =async ()=> {
        const url = "http://10.0.2.2:3000/comments";
        let result = await fetch(url);
        result = await result.json();
        console.warn(result);
        if(result){
            setData(result)
        }
    }

    const deleteUser = async (id) => {
        const url = "http://10.0.2.2:3000/comments";
        let result = await fetch(`${url}/${id}`, {
            method:"delete"
        })
        result = await result.json();
        if(result){
            console.warn("User Deleted");
            getAPIData();
        }
    }

    useEffect(( )=> { getAPIData();},[]);
    const updatedUser=(data)=>{
        setModal(true)
        setSelectedUser(data)
    }
  return (
    <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
           <View style={{flex:1.5}}><Text>Name</Text></View>
           <View style={{flex:1.5}}><Text>Age</Text></View>
           <View style={{flex:2.2}}><Text>Email</Text></View>
           <View style={{flex:1.8}}><Text>Options</Text></View>
        </View>
      {
        data.length ?
        data.map((item)=> <View style={styles.wrapper}>
           <View style={{flex:1}}><Text>{item.name}</Text></View>
           <View style={{flex:1}}><Text>{item.age}</Text></View>
           <View style={{flex:1}}><Text>{item.email}</Text></View>
           <View style={{flex:1}}><Button title='Delete' onPress={()=>deleteUser(item.id)}/></View>
           <View style={{flex:1}}><Button title='Update' onPress={()=>updatedUser(item)}/></View>
        </View>)
            :null
      }
        <Modal visible={modal} transparent={true}>
            <UserModal setModal= {setModal} selectedUser={selectedUser} getAPIData={getAPIData}/>
        </Modal>
    </ScrollView>
  )
};


const UserModal=(props)=>{
    console.warn(props.selectedUser);
    const [name, setName] =useState(undefined);
    const [age, setAge] =useState(undefined);
    const [email, setEmail] =useState(undefined);

    useEffect(()=>{
       if(props.selectedUser){
        setName(props.selectedUser.name)
        setAge(props.selectedUser.age)
        setEmail(props.selectedUser.email)
       }

    },[props.selectedUser])

const updateUser = async () => {
    console.warn(name, age, email, props.selectedUser.id);
    const url = "http://10.0.2.2:3000/comments";
    const id = props.selectedUser.id;

    let result = await fetch(`${url}/${id}`, {
        method: "PUT", // Corrected method name
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, email }), // Pass an object with properties
    });

    result = await result.json();
    if (result) {
        console.warn(result);
        props.getAPIData();
        props.setModal(false); // Close the modal after successful update
    }
};


    return(<View style={styles.centeredView}>
        <View style={styles.modalView}>
            <TextInput  style={styles.input} value={name} onChangeText={(text)=>setName(text)}/>
            <TextInput style={styles.input} value={age} onChangeText={(text)=>setAge(text)}/>
            <TextInput style={styles.input} value={email} onChangeText={(text)=>setEmail(text)}/>
            <View style={styles.updatebtn}>
            <Button title='Update' onPress={updateUser}/>
                </View>
            <Button title='Close' onPress={()=>props.setModal(false)}/>
        </View>
    </View>)
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    wrapper:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:"orange",
        margin:10,
        padding:10,
        color:"#333"
    },
    centeredView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modalView:{
        backgroundColor:'#fff',
        padding:25,
        borderRadius:10,
        shadowColor:"#000",
        shadowOpacity:0.70,
        elevation:5,
        margin:10,
    },
    input:{
        borderColor:'skyblue',
        borderWidth:1,
        width:250,
        marginBottom:20,
        fontSize:15,
    },
    updatebtn:{
        marginBottom:10
    }
})


export default ListwithAPI