
import React, { useEffect, useState } from 'react';
import { View, Alert, ScrollView } from 'react-native';
import HeaderScreensNavigations from '../components/HeaderScreensNavigations';
import TextField from '../components/TextField';
import BackgroundContainer from '../components/BackgroundContainer';
import { atualizaExercicio, createDescricaoExercicio, createExercicio } from '../services/Exercicio';

const EditarExercicio = ({ route, navigation }) => {
  const exercicio = route.params.exercicio;
  
  const [nome, setNome] = useState(exercicio.nomeExercicio);
  const [series, setSeries] = useState(exercicio.serieExercicio);
  const [repeticoes, setRepeticoes] = useState(exercicio.repeticoesExercicio);
  const [carga, setCarga] = useState(exercicio.cargaExercicio);
  const [descricao, setDescricao] = useState();

  useEffect(() => {
    console.log('editarExercicio exercicio:', exercicio);
  }, []);

  const handleSalvar = () => {
    // validar os dados
    if (!isValidString(nome)) {
      Alert.alert('Erro', 'Nome deve ser um texto válido.');
      return;
    }

    // verificar se os campos obrigatorios estão preenchidos
    if (!nome || !series || !repeticoes || !carga) {
      Alert.alert('Campos obrigatórios', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const exercicioSalvo = {
      "idTreino": exercicio.Treino_idTreino,
      "repeticoes": repeticoes,
      "serie": series,
      "nome": nome,
      "carga": carga,
    };

    console.log('Exercicio: ', exercicioSalvo);
    atualizaExercicio(exercicioSalvo, exercicio.idExercicio).then((res) => {
      if (!res) {
        Alert.alert('Alguma coisa deu errado', 'Exercicio não editado', ['ok']);
      } else {
        setNome('');
        setCarga('');
        setRepeticoes('');
        setSeries('');
        Alert.alert('Sucesso', "Exercicio editado com sucesso", ['ok']);
        console.log('response:', res);
        const idExercicio = res;

        const descricaoExercicio = {
          "idExercicio": idExercicio.insertId,
          "idTreino": exercicio.Treino_idTreino,
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
    <BackgroundContainer onPress={() => handleSalvar()} onPressBack={navigation.goBack} screenName={'Editar exercício'} rightText={'Salvar'}> 
      <ScrollView>
        <TextField
          label="Nome"
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome do exercício"
        />

        <TextField
          label="Repetições"
          value={repeticoes.toString()}
          onChangeText={(text) => isValidNumber(text) && setRepeticoes(text)}
          placeholder="Digite a quantidade de repetições"
          keyboardType="numeric"
        />
        <TextField
          label="Séries"
          value={series.toString()}
          onChangeText={(text) => isValidNumber(text) && setSeries(text)}
          placeholder="Digite a quantidade de séries"
          keyboardType="numeric"
        />

        <TextField
          label="Carga (kg)"
          value={carga.toString()}
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

export default EditarExercicio;
