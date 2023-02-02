import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View ,StatusBar} from 'react-native';
 


export default function App() {
   

  return (
    <View style ={St.box}>
      <Text style={ { color:'red', fontSize:30 } } >Họ tên: NVA</Text>
   
      <TextInput style={St.inputTen} placeholder='Nhap ten' />
    
      <View style={St.nutBam}>
        <Button title='Bam nut' />
      </View>
    
    </View>
  );
}
 
const St = StyleSheet.create( {
    box:{
      flexDirection: 'column',
      backgroundColor: '#fff',
      flex:1, 
      justifyContent: "center",
      alignItems:"center",
      marginTop: StatusBar.currentHeight|0

    },
    inputTen:{
      borderWidth:1,
      padding:10,
      borderColor: '#ccc',
      fontSize: 20,
      margin: 10,
      borderRadius: 5,
      width: '100%'
    },
    nutBam:{
      width: 100,
      borderRadius: 10,
      backgroundColor: 'red'
    }
} );