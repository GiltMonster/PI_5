import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import BackgroundContainer from '../components/BackgroundContainer';
import HeaderScreensNavigations from '../components/HeaderScreensNavigations';

const Meta = ({ navigation, onUpdateWeight }) => {
  const [currentWeight, setCurrentWeight] = useState('');
  const [targetWeight, setTargetWeight] = useState('');

  const handleSave = () => {
  
    console.log('apertando botao salvar peso que nao salva');
   // onUpdateWeight({ currentWeight, targetWeight });
  
   // console.log(`Meta atualizada com sucesso! Peso Atual: ${currentWeight}, Peso Estimado: ${targetWeight}`);
  
  };

  return (
    <BackgroundContainer>
    <View style={styles.container}>
      <HeaderScreensNavigations navigation={navigation} title="Meta" paddingRight={50} />

      <Text style={styles.label}>Peso Atual</Text>
      <TextInput
        style={styles.input}
        value={currentWeight}
        onChangeText={(text) => setCurrentWeight(text)}
        keyboardType="numeric"
        placeholder="Digite o peso atual"
        placeholderTextColor={'#A3A3A3'}
      />

      <Text style={styles.label}>Peso Estimado</Text>
      <TextInput
        style={styles.input}
        value={targetWeight}
        onChangeText={(text) => setTargetWeight(text)}
        keyboardType="numeric"
        placeholder="Digite o peso estimado"
        placeholderTextColor={'#A3A3A3'}
      />

      <Button title="Salvar Metas" onPress={handleSave} />
    </View>
    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 20,
  },
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
});

export default Meta;
