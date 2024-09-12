import React, { useState } from 'react';
import { Button, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const YourApp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  
  const handleInputChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <LinearGradient 
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
      style={{ flex: 1,padding:20}}
    >

      {/* Giữ nguyên hình ảnh */}
      <View style={{
        flex: 2, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 30
      }}>
        <Image 
          source={{uri: 'https://images2.thanhnien.vn/zoom/686_429/Uploaded/vietthong/2018_09_16/thumb2_MVHP.jpg'}}
          style={{ height: 140, width: 140}}
        />
      </View>

      {/* Mô tả số điện thoại */}
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
      }}>
        <Text style={{
          fontSize: 15,
          fontWeight: '700',
          textAlign: 'center'
        }}>Enter onetime password sent on</Text>

        <Text style={{
          fontSize: 15,
          fontWeight: '700',
          textAlign: 'center',
          marginTop: 5
        }}>+849092605798</Text>
      </View>

      {/* Các ô nhập OTP */}
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10
      }}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={{
              width: 45,
              height: 45,
              borderWidth: 1,
              borderColor: '#000',
              textAlign: 'center',
              fontSize: 20,
              margin: 5,
              backgroundColor: '#fff',
              borderRadius: 5 // Làm cho ô nhập mã vuông vắn hơn
            }}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleInputChange(value, index)}
          />
        ))}
      </View>

      {/* Nút "VERIFY CODE" */}
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
      }}>
        <TouchableOpacity style={{
          width: 305, 
          height: 45, 
          backgroundColor: '#E3C000', 
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginBottom:80
        }}>
          <Text style={{ color: '#000', fontSize: 20, fontWeight: '700' }}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
};

export default YourApp;
