import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Sửa lại từ @react-navigation/native
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Sửa lại từ @react-navigation/native-stack
import HomeScreen from "./HomeScreen"; // Import màn hình HomeScreen
import Screen1 from "./Screen1"; // Import
import Screen2 from "./Screen2"; // Import
import Screen3 from "./Screen3"; // Import
import Screen4 from "./Screen4"; // Import
import Screen5 from "./Screen5"; // Import

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="Screen5" component={Screen5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

