import React from "react";
import { Text, View, Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

const  Screen2 = () => {

    const navigation = useNavigation();

  return (
    <View style={{ flex: 2 }}>
      <View style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        bottom:40,
      }}>
        <Image
          source={require('./img/vs_red.png')}
          style={{ height: 324, width: 265 }}
        />
      </View>

      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 90,
      }}>
        <Text style={{ fontSize: 15 }}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom:80,
      }}>
        <View style={{
            flexDirection: 'row',
            left:20,
        }}>
        <Image
          source={require('./img/star.png')}
          style={{ height: 25, width: 23 }}
        />
        <Image
          source={require('./img/star.png')}
          style={{ height: 25, width: 23 }}
        />
        <Image
          source={require('./img/star.png')}
          style={{ height: 25, width: 23 }}
        />
        <Image
          source={require('./img/star.png')}
          style={{ height: 25, width: 23 }}
        />
        <Image
          source={require('./img/star.png')}
          style={{ height: 25, width: 23 }}
        />
        </View>

        <View><Text style={{fontSize:15, right:20}}>(Xem 828 đánh giá)</Text></View>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom:70,
      }}>
        <View>
          <Text style={{fontSize:18, fontWeight:700,left:5}}>1.790.000 đ</Text>
        </View>
        <View>
          <Text style={{fontSize:15, textDecorationLine: 'line-through', right:70}}>1.790.000 đ</Text>
        </View>
      </View>

      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        bottom:50,
        left:-60,
      }}>
        <Text style={{color:'red'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
      </View>


      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 160,
        marginHorizontal: 20,
      }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 5,
            padding: 10,
            width: '90%',
            top:130,
          }}
          onPress={() => navigation.navigate('Screen1')} 
        >
          <Text>4 MÀU - CHỌN MÀU</Text>
        </TouchableOpacity>
      </View>


      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        bottom:20,
        marginHorizontal: 20,
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('Screen3')}
          style={{
            backgroundColor: 'red',
            padding: 15,
            borderRadius: 5,
            width: '90%',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>

    </View>
  ); 
};

export default Screen2;