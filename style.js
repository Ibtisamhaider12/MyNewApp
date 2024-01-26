/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native"


export default Externalstyles=StyleSheet.create({
    txt:{
        color:'#333',
        fontSize: 20,
        color:'blue',
        margin: 10,
        borderWidth: 2,
        borderColor: "blue",
    },

    btn:{
        color: "#fff",
        backgroundColor: "#345D52",
        padding: 10,
        marginBottom: 5,
    },
    btnTxt:{
        textAlign: 'center',
        color: '#fff',
    },
    maptxt:{
        fontSize: 30,
        backgroundColor:'red',
        padding: 20,
        margin:12,
    },
    items:{
        fontSize: 25,
        backgroundColor: 'blue',
        color: '#fff',
        margin: 5,
        padding:5,
        width: 120,
        height: 120,
        textAlign: 'center',
        textAlignVertical: 'center'

    },
    grid:{
        flex:1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    userItem:{
        fontSize: 20,
        color: 'orange',
        fontWeight: '700',
        flex:1,
        margin: 5,
    },
    userBox:{
        backgroundColor: 'gray',
        flexDirection:'row',
        marginBottom: 10,
        borderWidth: 2,
    }
})