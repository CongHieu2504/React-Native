import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSpecialChar, setIncludeSpecialChar] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    let characters = '';
    if (includeLowerCase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUpperCase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumber) characters += '0123456789';
    if (includeSpecialChar) characters += '!@#$%^&*()';
    
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    
    setGeneratedPassword(password);
  };

  const toggleCheckbox = (setter, value) => {
    setter(!value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PASSWORD GENERATOR</Text>
      <TextInput
        style={styles.input}
        value={generatedPassword}
        editable={false}
        placeholder="Generated Password"
      />

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password length</Text>
        <TextInput
          style={styles.inputInline}
          value={passwordLength.toString()}
          onChangeText={(val) => setPasswordLength(parseInt(val) || 8)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Include lower case letters</Text>
        <TouchableOpacity 
          style={styles.checkbox} 
          onPress={() => toggleCheckbox(setIncludeLowerCase, includeLowerCase)} 
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Include upper case letters</Text>
        <TouchableOpacity 
          style={styles.checkbox} 
          onPress={() => toggleCheckbox(setIncludeUpperCase, includeUpperCase)} 
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Include numbers</Text>
        <TouchableOpacity 
          style={styles.checkbox} 
          onPress={() => toggleCheckbox(setIncludeNumber, includeNumber)} 
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Include special symbols</Text>
        <TouchableOpacity 
          style={styles.checkbox} 
          onPress={() => toggleCheckbox(setIncludeSpecialChar, includeSpecialChar)} 
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23235B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    backgroundColor: "#151537",
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  label: {
    color: '#fff',
    flex: 1,
  },
  inputInline: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
    width: '100%',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    marginRight: 10,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3E73FF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

