import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
 
export default function App() {
  const [hoTen, sethoTen] = useState("ABC");
  const CapNhat =(dulieu) =>{
      sethoTen (dulieu);
  }
  const InHoa = ()=>{
    sethoTen ( hoTen.toUpperCase () );
  }
  return (
    <View style={styles.container}>
        <Text style={styles.txt}>Ho ten:  {hoTen}  </Text>
      
       <TextInput placeholder='Nhap ho ten' 
       onChangeText={CapNhat}
       /> 
       <Button title='In hoa'  onPress={InHoa} />

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:40
  },
  txt:{ fontSize:30}
});