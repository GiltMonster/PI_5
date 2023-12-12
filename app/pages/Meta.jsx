import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import BackgroundContainer from '../components/BackgroundContainer';
import getFont from '../util/fonts';
import TabBar from '../components/tabBarComponents/TabBar';
import img from '../assets/images/perfil.png';

const Meta = ({ navigation, onUpdateWeight, takeRouter }) => {
  const [currentWeight, setCurrentWeight] = useState('');
  const [targetWeight, setTargetWeight] = useState('');

  const handleSave = () => {
  
    console.log('apertando botao salvar peso que nao salva');
   // onUpdateWeight({ currentWeight, targetWeight });
  
   // console.log(`Meta atualizada com sucesso! Peso Atual: ${currentWeight}, Peso Estimado: ${targetWeight}`);
  
  };

  return (
    
    <View style={styles.container}>
      <BackgroundContainer onPress={onUpdateWeight} onPressBack={navigation.goBack} screenName={'Meta'} rightText={'Salvar'}>
        <Text style={[styles.label, { fontFamily: getFont('sfProTextSemibold') }]}>{'Peso Atual (Kg):'}</Text>
        <TextInput
          style={styles.input}
          value={currentWeight}
          onChangeText={(text) => setCurrentWeight(text)}
          keyboardType="numeric"
          placeholder="Digite seu peso atual"
          placeholderTextColor={'#A3A3A3'}
        />

        <Text style={[styles.label, { fontFamily: getFont('sfProTextSemibold') }]}>{'Peso Desejado (Kg):'}</Text>
        <TextInput
          style={styles.input}
          value={targetWeight}
          onChangeText={(text) => setTargetWeight(text)}
          keyboardType="numeric"
          placeholder="Digite sua meta de peso"
          placeholderTextColor={'#A3A3A3'}
        />
      </BackgroundContainer>
      <Image
        source={img}
        style={styles.perfilImage}
      />
      {/* <TabBar takeRouter={takeRouter} style={styles.tabBarStyle} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  perfilImage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default Meta;
