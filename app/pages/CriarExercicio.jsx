
import React, { useEffect, useState } from 'react';
import { View, Alert, ScrollView } from 'react-native';
import HeaderScreensNavigations from '../components/HeaderScreensNavigations';
import TextField from '../components/TextField';
import BackgroundContainer from '../components/BackgroundContainer';
import { createDescricaoExercicio, createExercicio } from '../services/Exercicio';

const CriarExercicio = ({ route, navigation }) => {
  const treinoId = route.params.treinoId;
  const [nome, setNome] = useState('');
  const [series, setSeries] = useState('');
  const [repeticoes, setRepeticoes] = useState('');
  const [carga, setCarga] = useState('');
  const [descricao, setDescricao] = useState();

  useEffect(() => {
    console.log('treinoId', treinoId);
  }, []);

  const handleSalvar = () => {
    // validar os dados
    if (!isValidString(nome)) {
      Alert.alert('Erro', 'Nome deve ser um texto válido.');
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
      "idTreino": treinoId,
      "repeticoes": repeticoes,
      "serie": series,
      "nome": nome,
      "carga": carga,
    };

    console.log('Exercicio: ', exercicioSalvo);
    createExercicio(exercicioSalvo).then((res) => {
      if (!res) {
        Alert.alert('Alguma coisa deu errado', 'Exercicio não criado', ['ok']);
      } else {
        setNome('');
        setCarga('');
        setRepeticoes('');
        setSeries('');
        Alert.alert('Sucesso', "Exercicio criado com sucesso", ['ok']);
        console.log('response:', res);
        const idExercicio = res;

        const descricaoExercicio = {
          "idExercicio": idExercicio.insertId,
          "idTreino": treinoId,
          "descricao": descricao
        };

        console.log('descricao:', descricaoExercicio);
        if (descricao && idExercicio) {

          console.log('idExercicio: ', descricaoExercicio);
          createDescricaoExercicio(descricaoExercicio).then((res) => {
            if (!res) {
              Alert.alert('Alguma coisa deu errado', 'Descrição não criada', ['ok']);
            } else {
              setDescricao('');
              console.log('Sucesso', "Descrição criada com sucesso");
            }
          });
        }

        navigation.goBack();
      }
    });
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
    <BackgroundContainer onPress={() => handleSalvar()} onPressBack={navigation.goBack} screenName={'Criar Exercício'} rightText={'Salvar'}> 
      <ScrollView>
        <TextField
          label="Nome"
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome do exercício"
        />

        <TextField
          label="Repetições"
          value={repeticoes}
          onChangeText={(text) => isValidNumber(text) && setRepeticoes(text)}
          placeholder="Digite a quantidade de repetições"
          keyboardType="numeric"
        />
        <TextField
          label="Séries"
          value={series}
          onChangeText={(text) => isValidNumber(text) && setSeries(text)}
          placeholder="Digite a quantidade de séries"
          keyboardType="numeric"
        />

        <TextField
          label="Carga (kg)"
          value={carga}
          onChangeText={(text) => isValidFloat(text) && setCarga(text)}
          placeholder="Digite a carga em kg"
          keyboardType="numeric"
        />

        <TextField
          label="Descrição"
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Digite uma descrição"
          multiline
        />
      </ScrollView>
    </BackgroundContainer>
  );
};

export default CriarExercicio;
