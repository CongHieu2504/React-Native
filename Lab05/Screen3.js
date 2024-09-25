import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Screen3 = () => {

    //Khai báo useNavigation
    const [selectedColor, setSelectedColor] = useState(null);
    const navigation = useNavigation();

    //Bấm vào chọn màu muốn chuyển sang
    const handleNextPage= () => {
    if(selectedColor === '#000000')
    {
        navigation.navigate('Screen4', {color : selectedColor});
    }
    else if(selectedColor === '#F30D0D')   
    {
        navigation.navigate('Screen2', {color : selectedColor});    
    } 
    else if(selectedColor === '#234896')   
    {
        navigation.navigate('Screen5', {color : selectedColor});    
    }
    else if(selectedColor === '#C5F1FB')
    {
        navigation.navigate('Home', { color: selectedColor }); 
    }
};

    return(
    <View style={{ flex: 2 }}>
      {/* Bắt đầu làm */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
        <Image
          source={require('./img/vs_red.png')}
          style={{ height: 128, width: 114, top:5}}
        />
        <View style={{ 
            flex: 1 
        }}>
          <Text style={{
            fontSize: 15,
            flexWrap: 'wrap',
            flexShrink: 1,
            left: 20,
            marginTop:10,
          }}>
            Điện Thoại Vsmart Joy 3 {"\n"}Hàng chính hãng
          </Text>

          <Text style={{
            fontSize: 15,
            flexWrap: 'wrap',
            flexShrink: 1,
            left: 20,     
            marginTop:5,    
          }}>
            Màu: <Text style={{fontWeight:'bold'}}>đỏ</Text>
          </Text>

          <Text style={{
            fontSize: 15,
            flexWrap: 'wrap',
            flexShrink: 1,
            left: 20,      
            marginTop:5,        
          }}>
            Cung cấp bởi <Text style={{fontWeight:'bold'}}>Tiki Tradding</Text>
          </Text>

          <Text style={{
            fontSize: 15,
            flexWrap: 'wrap',
            flexShrink: 1,
            left: 20,  
            fontWeight: 'bold', 
            marginTop:5,         
          }}>1.790.000 đ</Text>
        </View>
      </View>

      <View style={{
        backgroundColor: '#C4C4C4',
        top: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{
          fontSize: 18,
          right: 90,
        }}>
          Chọn một màu bên dưới:
        </Text>

        {/* Màu xanh */}
        <TouchableOpacity onPress={() => setSelectedColor('#C5F1FB')}
          style={{
            height: 80,
            width: 85,
            backgroundColor: '#C5F1FB',
            marginTop: 8,
            borderWidth: selectedColor === '#C5F1FB' ? 2 : 0, // Đặt viền khi màu được chọn
            borderColor: selectedColor === '#C5F1FB' ? 'blue' : 'transparent',
        }} />

        {/* Màu đỏ */}
        <TouchableOpacity onPress={() => setSelectedColor('#F30D0D')}
          style={{
            height: 80,
            width: 85,
            backgroundColor: '#F30D0D',
            marginTop: 8,
            borderWidth: selectedColor === '#F30D0D' ? 2 : 0, // Đặt viền khi màu được chọn
            borderColor: selectedColor === '#F30D0D' ? 'blue' : 'transparent',
        }} />

        {/* Màu đen */}
        <TouchableOpacity onPress={() => setSelectedColor('#000000')}
          style={{
            height: 80,
            width: 85,
            backgroundColor: '#000000',
            marginTop: 8,
            borderWidth: selectedColor === '#000000' ? 2 : 0, // Đặt viền khi màu được chọn
            borderColor: selectedColor === '#000000' ? 'blue' : 'transparent',
        }} />

        {/* Màu xanh dương đậm */}
        <TouchableOpacity onPress={() => setSelectedColor('#234896')}
          style={{
            height: 80,
            width: 85,
            backgroundColor: '#234896',
            marginTop: 8,
            borderWidth: selectedColor === '#234896' ? 2 : 0, // Đặt viền khi màu được chọn
            borderColor: selectedColor === '#234896' ? 'blue' : 'transparent',
        }} />

        <TouchableOpacity onPress={handleNextPage}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 5,
            width: 326,
            height: 44,
            marginTop: 40,
            backgroundColor: '#1952E2',
        }}>
          <Text style={{ color: '#fff' }}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
};

export default Screen3;