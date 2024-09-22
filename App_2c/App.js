import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import React, { useState } from 'react'; // Import useState từ react

export default function App() {
  const [passwordLength, setPasswordLength] = useState('');
  return (
    <View style={{
      flex:1,
      backgroundColor:'#23235B',
      padding:20
    }}>
    <View style={{
      flex:2,
      justifyContent:'center',
      alignItems:'center',
    }}>
      <Text style={{color:'#fff',fontSize:25, fontWeight:700}}>PASSWORD</Text>
      <Text style={{color:'#fff',fontSize:25, fontWeight:700}}>GENERATOR</Text>
    </View>

    <View style={{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      bottom:50
      }}>
      <Text style={{fontSize:20, fontWeight:700, color:'#fff'}}>Password length</Text>

      <TextInput style=
      {{
        padding:10,
        width:140,
        backgroundColor:'#fff',
        borderRadius:5,
        textAlign:'center'
      }}>

      </TextInput>
    </View>

    <View style={{
      flex:1,
      justifyContent:'space-around',
      alignItems:'center',
      flexDirection:'row',
    }}>

    <Text style={{fontSize:20, fontWeight:700, color:'#fff'}}>Include lower case letters</Text>
    <Text style={{
      backgroundColor:'#fff',
      width:25,
      height:25}}>

    </Text>
    </View>

    </View>



  );
};
