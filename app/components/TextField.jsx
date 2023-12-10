// TextField.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextField = ({ label, value, onChangeText, placeholder, keyboardType, multiline }) => {
  const inputStyle = multiline ? styles.inputMultiline : styles.input;

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        multiline={multiline}
        placeholderTextColor={'#6A6767'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    color: '#fff',
    fontSize: 18,
  },
  inputMultiline: {
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 10,
    height: 130,
    padding: 10,
    borderRadius: 10,
    color: '#fff',
    fontSize: 18,

  },
});

export default TextField;
