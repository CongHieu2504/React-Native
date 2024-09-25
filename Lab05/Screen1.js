import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen1 = () => {
  const [selectedColor, setSelectedColor] = useState(null); // Lưu màu được chọn
  const navigation = useNavigation(); // Điều hướng

const handleNextPage= () => {
  if (selectedColor === '#C5F1FB') 
  {
    navigation.navigate('Home', { color: selectedColor }); 
  }
  else if (selectedColor === '#F30D0D')
  {
    navigation.navigate('Screen2', { color: selectedColor });
  }
  else if (selectedColor === '#000000')
  {
    navigation.navigate('Screen4', { color: selectedColor });
  }
  else if (selectedColor === '#234896')
  {
    navigation.navigate('Screen5', { color: selectedColor});
  }
  else
  {
    alert('Vui lòng chọn màu xanh!'); // Hiển thị cảnh báo nếu chọn màu khác
  }
};
  return (
    <View style={{ flex: 2 }}>
      {/* Bắt đầu làm */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
        <Image
          source={require('./img/vs_blue.png')}
          style={{ height: 132, width: 112 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{
            fontSize: 15,
            flexWrap: 'wrap',
            flexShrink: 1,
            left: 20,
          }}>
            Điện Thoại Vsmart Joy 3 {"\n"}Hàng chính hãng
          </Text>
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
        <TouchableOpacity 
          onPress={() => setSelectedColor('#C5F1FB')} // Chọn màu xanh
          style={{
            height: 80,
            width: 85,
            backgroundColor: '#C5F1FB',
            marginTop: 8,
            borderWidth: selectedColor === '#C5F1FB' ? 2 : 0, // Đặt viền khi màu được chọn
            borderColor: selectedColor === '#C5F1FB' ? 'blue' : 'transparent',
        }} />

        {/* Màu đỏ */}
        <TouchableOpacity 
          onPress={() => setSelectedColor('#F30D0D')} // Chọn màu đỏ
          style={{
            height: 80,
            width: 85,
            backgroundColor: '#F30D0D',
            marginTop: 8,
            borderWidth: selectedColor === '#F30D0D' ? 2 : 0, // Đặt viền khi màu được chọn
            borderColor: selectedColor === '#F30D0D' ? 'blue' : 'transparent',
        }} />

        {/* Màu đen */}
        <TouchableOpacity 
          onPress={() => setSelectedColor('#000000')} // Chọn màu đen
          style={{
            height: 80,
            width: 85,
            backgroundColor: '#000000',
            marginTop: 8,
            borderWidth: selectedColor === '#000000' ? 2 : 0, // Đặt viền khi màu được chọn
            borderColor: selectedColor === '#000000' ? 'blue' : 'transparent',
        }} />

        {/* Màu xanh dương đậm */}
        <TouchableOpacity 
          onPress={() => setSelectedColor('#234896')} // Chọn màu xanh dương đậm
          style={{
            height: 80,
            width: 85,
            backgroundColor: '#234896',
            marginTop: 8,
            borderWidth: selectedColor === '#234896' ? 2 : 0, // Đặt viền khi màu được chọn
            borderColor: selectedColor === '#234896' ? 'blue' : 'transparent',
        }} />

        <TouchableOpacity 
          onPress ={handleNextPage} // Khi nhấn nút "XONG"
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
  );
};

export default Screen1;
