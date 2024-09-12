import React from 'react';
import { Button, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons'; // Sử dụng icon từ thư viện expo

const YourApp = () => {
  return (
    <LinearGradient 
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}  
      style={{ flex: 1, padding: 20 }} 
    > 

      {/* Biểu tượng khóa */}
      <View style={{
        flex: 2,
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 30
      }}>
        <FontAwesome name="lock" size={100} color="black" />
      </View>

      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 25,
          fontWeight: '700'
        }}>FORGET</Text>

        <Text style={{
          fontSize: 25,
          fontWeight: '700'
        }}>PASSWORD</Text>
      </View>

      {/* Nội dung mô tả */}
      <View style={{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: 20
      }}>
        <Text style={{
          fontSize: 15,
          fontWeight: '700',
          textAlign: 'center'
        }}>Provide your account’s email for which you</Text>

        <Text style={{
          fontSize: 15,
          fontWeight: '700',
          textAlign: 'center'
        }}>want to reset your password</Text>
      </View>

      {/* TextInput với icon */}
      <View style={{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
      }}> 
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          backgroundColor: '#E0E0E0', 
          borderRadius: 5, 
          paddingHorizontal: 10,
          width: 305,
          height: 45
        }}>
          <FontAwesome name="envelope" size={24} color="black" />
          <TextInput
            style={{
              flex: 1,
              height: 45,  
              paddingHorizontal: 10, 
              fontSize: 18,
              backgroundColor: '#E0E0E0' // Giữ màu đồng nhất với background của input
            }}
            placeholder="Email" 
            placeholderTextColor="#999"
            keyboardType="email-address"  
            autoCapitalize="none" 
          />
        </View>
      </View>

      {/* Nút "NEXT" */}
      <View style={{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: 40
      }}>
        <TouchableOpacity style={{
          width: 305, 
          height: 45, 
          backgroundColor: '#E3C000', 
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5
        }}>
          <Text style={{ color: '#000', fontSize: 20, fontWeight: '700' }}>NEXT</Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
};

export default YourApp;

