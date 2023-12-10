import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import HeaderScreensNavigations from '../components/HeaderScreensNavigations';
import TextField from '../components/TextField';
import BackgroundContainer from '../components/BackgroundContainer';

const CriarExercicio = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [series, setSeries] = useState('');
  const [repeticoes, setRepeticoes] = useState('');
  const [carga, setCarga] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSalvar = () => {
    // validar os dados
    if (!isValidString(nome)) {
      Alert.alert('Erro', 'Nome deve ser umm texto válido.');
      return;
    }

    if (!isValidNumber(series) || !isValidNumber(repeticoes) || !isValidFloat(carga)) {
      Alert.alert('Erro', 'Séries, repetições e carga devem ser números válidos.');
      return;
    }

    // verificar se os campos obrigatorios estão preenchidos
    if (!nome || !series || !repeticoes || !carga) {
      Alert.alert('Campos obrigatórios', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const exercicioSalvo = {
      nome,
      series,
      repeticoes,
      carga,
      descricao,
    };

    //banco
    navigation.navigate('exercicios', { exercicioSalvo });
  };

  const isValidString = (value) => {
    return typeof value === 'string' || typeof value === 'undefined';
  };

  const isValidNumber = (value) => {
    return /^\d*$/.test(value) || typeof value === 'undefined';
  };

  const isValidFloat = (value) => {
    return /^\d*$/.test(value) || /^\d+(\.\d{0,2})?$/.test(value) || typeof value === 'undefined';
   // return /^\d+(\.\d*)?$/.test(value) || typeof value === 'undefined';
  };

  return (
    <BackgroundContainer>
      <View>
        <HeaderScreensNavigations navigation={navigation} title="Criar Exercício" onSavePress={() => handleSalvar()} />
      </View>
      <TextField
        label="Nome:"
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome do exercício"
      />

      <TextField
        label="Repetições:"
        value={repeticoes}
        onChangeText={(text) => isValidNumber(text) && setRepeticoes(text)}
        placeholder="Digite a quantidade de repetições"
        keyboardType="numeric"
      />
      <TextField
        label="Séries:"
        value={series}
        onChangeText={(text) => isValidNumber(text) && setSeries(text)}
        placeholder="Digite a quantidade de séries"
        keyboardType="numeric"
      />

      <TextField
        label="Carga (kg):"
        value={carga}
        onChangeText={(text) => isValidFloat(text) && setCarga(text)}
        placeholder="Digite a carga em kg"
        keyboardType="numeric"
      />

      <TextField
        label="Descrição:"
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Digite uma descrição"
        multiline
      />
    </BackgroundContainer>
  );
};

export default CriarExercicio;
