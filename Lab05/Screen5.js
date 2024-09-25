import React from "react";
import { Text, View, Image, TouchableOpacity} from "react-native";

const Screen5 = () => { 
    return(
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
        }}> 
            <Image
                source={require('./img/vs_silver.png')}
            />
        </View>
    )
};

export default Screen5;