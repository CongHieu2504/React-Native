import React from "react";
import { Text, View, Image, TouchableOpacity} from "react-native";

const Screen4 = () => {
    return(
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
        }}>
        <Image
            source={require('./img/vs_black.png')}
        />
        </View>
    )
};

export default Screen4;