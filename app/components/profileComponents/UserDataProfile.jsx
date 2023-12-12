import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import getFont from '../../util/fonts';
import replace from '../../util/replace';

export default function UserDataProfile({initialUserName, initialHeight,initialWeight, onSave, }) {
  const [userName, setUserName] = useState(initialUserName);
  const [height, setHeight] = useState(initialHeight);
  const [weight, setWeight] = useState(initialWeight);

  const [tempUserName, setTempUserName] = useState(initialUserName);
  const [tempHeight, setTempHeight] = useState(String(initialHeight));
  const [tempWeight, setTempWeight] = useState(String(initialWeight));

  const handleSave = () => {
    onSave({
      userName: tempUserName,
      height: parseFloat(tempHeight.replace(',', '.')),
      weight: parseFloat(tempWeight.replace(',', '.')),
    });
    setUserName(tempUserName);
    setHeight(parseFloat(tempHeight.replace(',', '.')));
    setWeight(parseFloat(tempWeight.replace(',', '.')));
  };

  React.useEffect(() => {
    if (initialHeight === 0 || initialHeight === undefined) {
      setTempHeight('');
    } else {
      setTempHeight(String(replace(initialHeight.toFixed(2))));
    }

    if (initialWeight === 0 || initialWeight === undefined) {
      setTempWeight('');
    } else {
      setTempWeight(String(replace(initialWeight.toFixed(2))));
    }
  }, [initialHeight, initialWeight]);

  return (
    <View>
      <View style={styles.dataProfileContainer}>
        <View style={styles.inputContainer}>
          <Text style={[styles.inputText, { fontFamily: getFont('sfProTextSemibold') }]}>Nome:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setTempUserName(text)}
            value={tempUserName}
            placeholder='Digite seu nome'
            placeholderTextColor={'gray'}
          />
        </View>
        <View style={styles.line}></View>
        <View style={styles.inputContainer}>
          <Text style={[styles.inputText, { fontFamily: getFont('sfProTextSemibold') }]}>Altura:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setTempHeight(text)}
            value={tempHeight}
            keyboardType="decimal-pad"
            placeholder='Digite sua altura'
            placeholderTextColor={'gray'}
          />
        </View>
        <View style={styles.line}></View>
        <View style={styles.inputContainer}>
          <Text style={[styles.inputText, { fontFamily: getFont('sfProTextSemibold') }]}>Peso:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setTempWeight(text)}
            value={tempWeight}
            keyboardType="decimal-pad"
            placeholder='Digite seu peso'
            placeholderTextColor={'gray'}
          />
        </View>
      </View>
      {/* Botão de Salvar */}
      <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dataProfileContainer: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#FAFAFA',
    marginHorizontal: 10,
  },
  line: {
    backgroundColor: '#FAFAFA',
    height: 2,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  inputText: {
    color: '#FAFAFA',
    fontSize: 17,
    marginLeft: 20,
  },
  input: {
    height: 35,
    width: '75%',
    margin: 12,
    padding: 10,
    color: '#FAFAFA',
    fontSize: 17,
    // borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  saveButton: {
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: '#6EDEFD',
    fontSize: 17,
  },
});
