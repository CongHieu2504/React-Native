import React from 'react';
import {Button,Text, View, Image, TouchableOpacity} from 'react-native';

const YourApp = () => {
  return (
    <View style={{flex:1, backgroundColor:'#00CCF9'}}> 
    <View style={{
      flex:2,
      justifyContent:'center', 
      alignItems:'center',
      top:50}}>

        <Image source={{uri:'https://images2.thanhnien.vn/zoom/686_429/Uploaded/vietthong/2018_09_16/thumb2_MVHP.jpg'}}
        
        style = {{
            height:140,
            width:140
        }}
        ></Image>
    </View>
    <View style={{
      flex:1, 
      justifyContent:'center',
      alignItems:'center'
    }}>
        <Text style={{
          fontSize:25,
          fontWeight:700
        }}>GROW</Text>

        <Text style={{
          fontSize:25,
          fontWeight:700
        }}>YOUR BUSINESS</Text>
    </View>
    <View style={{
      flex:1,
      justifyContent:'center', 
      alignItems:'center',
      top:-50}}>
      <Text style={{
          fontSize:15,
          fontWeight:700
      }}>We will help you to grow your business using</Text>

      <Text style={{
          fontSize:15,
          fontWeight:700
      }}>online server</Text>
    </View>
    <View style={{
      flex:1, 
      flexDirection:'row', 
      justifyContent:'space-around',
      alignItems:'center',
      top:-50}}>

      <TouchableOpacity style={{
        width:119, 
        height:48,
        borderWidth: 1, 
        borderColor: '#ccc',
        borderRadius: 10, 
        backgroundColor:'#E3C000', 
        justifyContent:'center', 
        alignItems:'center'
        }}>
            <Text style={{color: '#000', fontSize: 20,fontWeight:700}}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        width:119, 
        height:48, 
        borderWidth: 1, 
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor:'#E3C000', 
        justifyContent:'center', 
        alignItems:'center'
        }}>
            <Text style={{color: '#000', fontSize: 20,fontWeight:700}}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  </View>

  );
};

export default YourApp;