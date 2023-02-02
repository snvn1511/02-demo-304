import React, { useState } from 'react'
import { Button, FlatList, View, Text } from 'react-native';

var api_url = "https://63db6922a3ac95cec5a10e24.mockapi.io/demo-api/sanpham";
// Demo lay du lieu


export default function App() {
  const [dssp, setdssp] = useState([]);
  const getListSP = () => {

    fetch(api_url)
      .then((res) => { return res.json(); }) // chuyển dữ liệu thành json
      .then((data_json) => {
        console.log(data_json);
        //alert(JSON.stringify(data_json)); //chuyển đối tượng thành chuỗi và alert
        //đổ dữ liệu vào biến state ở đây để hiển thị danh sách.
        setdssp(data_json);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // hàm thêm dữ liệu
  const postAddSP = () => {
    // 1. chuẩn bị dữ liệu 
    let objSP = {
        name:"Xe máy 11111",
        price: 333333 // có thể gán dữ liệu từ state của TextInput
    }
    //2. fetch

    fetch( api_url , {
      method: 'POST',// POST: Thêm, PUT: Sửa, DELETE: xóa
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(  objSP   ),
    })
    .then ( (res)=>{
          console.log(res);
          if(res.status==201)
            alert("Thêm thành công")
    })
    .catch( (err)=>{ console.log( err );})
    ;
  }




  return (
    <View style={{ margin: 30 }}>
      <Button title='Load list' onPress={getListSP} />
      {/* Hiển thị danh sách */}
      <FlatList
        data={dssp}
        keyExtractor={(item) => { return item.id }}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: "yellow", margin: 5 }}>
            <Text> {item.name} -- {item.price}  </Text>
          </View>
        )}
      />

          <Button title='Add new ' onPress={postAddSP } />

    </View>
  );
}
