import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Screen2() {
  return (
    <View style={styles.container}>
      <View style={styles.container_title}>
        <Text style={styles.titleText}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      <View style={styles.container_image}>
        <Image style={styles.image} source={require('./assets/bluebike.png')} />
      </View>
      <Text style={styles.shopTitle}>POWER BIKE SHOP</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
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

  container_title: {
    width: 351,
    height: 87,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 20,
  },

  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },

  container_image: {
    width: 359,
    height: 388,
    borderRadius: 50,
    backgroundColor: '#E941411A',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  image: {
    width:292,
    height:270,
  },

  shopTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },

  button: {
    width:340,
    height:61,
    backgroundColor: '#E94141',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
