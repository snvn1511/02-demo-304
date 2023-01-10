import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
 
const CompInfo = (props)=>{
    return (
      <View>
        <Text style={styles.txt}> 
        Ho ten {props.hoTen} , Tuoi {props.tuoi} 
        </Text>
      </View>
    );
}


export default function App() {
  return (
    <View style={styles.container}>
       <CompInfo hoTen = 'nguyen A' tuoi='20'/>
       <CompInfo hoTen = 'nguyen bb' tuoi='20'/>
       <CompInfo hoTen = 'nguyen ccc' tuoi='20'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:40
  },
  txt:{ fontSize:20}
});