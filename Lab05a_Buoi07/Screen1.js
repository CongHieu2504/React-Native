import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image 
        source={require('./img/Image 95.png')} 
        style={styles.image_container}
      />
      <View style={styles.func}>
          <Text style={styles.text_func}>MANAGE YOUR</Text>
          <Text style={styles.text_func}>TASK</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#BCC1CA"
        />
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen2')}>
             <Text style={styles.textButton}>GET STARTED</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image_container:{
    width:200,
    height:200,
  },

  func: {
    alignItems: 'center',
  },

  text_func: {
    fontSize:24,
    lineHeight:36,
    fontWeight:'bold',
    color:'#8353E2',
  },

  inputContainer: {
    marginTop:80,
    alignItems: 'center',
    borderWidth:1,
    borderRadius:12,
    width:334,
    height:43,
    paddingHorizontal:10,
    paddingVertical:5,
    width:'80%',
    backgroundColor:'#00000000'
  },

  input: {
    fontSize:16,
    fontStyle:'Inter',
  },

  buttonContainer: {
    marginTop:50,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:12,
    width:190,
    height:44,
    backgroundColor:'#00BDD6',
  },

  textButton:{
    fontSize:16,
    color:'white',
    fontWeight:'400',
    lineHeight:26,
  }
});
