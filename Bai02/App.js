import React from 'react';
import { Button, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Sử dụng expo-linear-gradient

const YourApp = () => {
  return (
    <LinearGradient 
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']} 
      style={{ flex: 1 }}
    >
      {/* Container của toàn bộ giao diện */}
      <View style={{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 20, // Thêm padding ngang
      }}>

        {/* Hình ảnh logo */}
        <View style={{
          marginBottom: 30, // Khoảng cách phía dưới hình ảnh
          alignItems: 'center',
        }}>
          <Image 
            source={{uri: 'https://images2.thanhnien.vn/zoom/686_429/Uploaded/vietthong/2018_09_16/thumb2_MVHP.jpg'}}
            style={{
              height: 140,
              width: 140,
              borderRadius: 70, // Tạo hình tròn cho ảnh
            }}
          />
        </View>

        {/* Phần text */}
        <View style={{
          alignItems: 'center',
          marginBottom: 30, // Khoảng cách giữa phần text và nút
        }}>
          <Text style={{
            fontSize: 25,
            fontWeight: '700',
            marginBottom: 10, // Khoảng cách giữa các dòng chữ
          }}>GROW</Text>

          <Text style={{
            fontSize: 25,
            fontWeight: '700',
          }}>YOUR BUSINESS</Text>
        </View>

        {/* Phần mô tả */}
        <View style={{
          alignItems: 'center',
          marginBottom: 30, // Khoảng cách giữa phần mô tả và nút
        }}>
          <Text style={{
            fontSize: 15,
            fontWeight: '700',
            textAlign: 'center', // Canh giữa text
          }}>We will help you to grow your business using</Text>

          <Text style={{
            fontSize: 15,
            fontWeight: '700',
            textAlign: 'center', // Canh giữa text
          }}>online server</Text>
        </View>

        {/* Các nút */}
        <View style={{
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          width: '100%',
          marginBottom: 30, // Khoảng cách giữa nút và phần tiếp theo
        }}>
          <TouchableOpacity style={{
            width: '45%', 
            height: 45, 
            backgroundColor: '#E3C000', 
            justifyContent: 'center', 
            alignItems: 'center',
            borderRadius: 5, // Thêm borderRadius cho nút
          }}>
            <Text style={{ color: '#000', fontSize: 18, fontWeight: '700' }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            width: '45%', 
            height: 45, 
            backgroundColor: '#E3C000', 
            justifyContent: 'center', 
            alignItems: 'center',
            borderRadius: 5, // Thêm borderRadius cho nút
          }}>
            <Text style={{
              color: '#000', 
              fontSize: 18,
              fontWeight: '700'
            }}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        {/* Phần cuối - HOW WE WORK */}
        <View style={{
          alignItems: 'center',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: '700',
          }}>HOW WE WORK?</Text>
        </View>
        
      </View>
    </LinearGradient>
  );
};

export default YourApp;


