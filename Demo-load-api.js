import React , {useState}from 'react'
import { Button, View } from 'react-native';

var api_url = "https://63db6922a3ac95cec5a10e24.mockapi.io/demo-api/sanpham";
// Demo lay du lieu


export default function App() {
   
  const getListSP = () => {

    fetch(api_url)
      .then((res) => { return res.json(); }) // chuyển dữ liệu thành json
      .then((data_json) => {
        console.log(data_json);
        alert(JSON.stringify(data_json)); //chuyển đối tượng thành chuỗi và alert
        //đổ dữ liệu vào biến state ở đây để hiển thị danh sách.
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <View style={{ margin: 30 }}>
      <Button title='Load list' onPress={getListSP} />
       
    </View>
  );
}
