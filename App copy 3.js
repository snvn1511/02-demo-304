import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
 
const CompInfo = (props)=>{

  if(typeof(props.callParent) != 'undefined')
  props.callParent("3333333333abc");

  if(typeof(props.tinTong) != 'undefined')
  props.tinTong(5,7);

    return (
      <View>
        <Text style={styles.txt}> 
        Ho ten {props.hoTen} , Tuoi {props.tuoi} 
        </Text>
      </View>
    );
}


export default function App() {
  const [dulieuCon, setdulieuCon] = useState("");

  const callback_CompInfo = (dulieu_con_gui)=>{
      setdulieuCon (dulieu_con_gui);
  }

  const tong = (a, b)=>{
      alert((a+b) );
  }

  return (
    <View style={styles.container}>
      <Text>Du lieu con gui:  {dulieuCon}</Text>

       <CompInfo hoTen = 'nguyen A' tuoi='20' 
       callParent={callback_CompInfo}/>

       <CompInfo hoTen = 'nguyen bb' tuoi='20' 
            tinTong={tong}
       />
       <CompInfo hoTen = 'nguyen ccc' tuoi='20' />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:40
  },
  txt:{ fontSize:20}
});