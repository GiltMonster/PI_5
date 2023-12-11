import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import BackgroundContainer from '../components/BackgroundContainer';
import TextField from '../components/TextField';
import { createTreino } from '../services/TreinoDB';
import { useActionSheet } from '@expo/react-native-action-sheet';
import getFont from '../util/fonts';

export default function CriarTreino({ navigation }) {
  const [treino, setTreino] = useState(
    {
      "idUsuario": 1,
      "data": "2023-12-04T12:00:00",
      "duracao": "02:52:00",
      "nome": "Treino de perna",
      "categoria": "S",
      "conclusao": 0
    }
  );

  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('Selecione uma categoria');
  const [diaDaSemana, setDiaDaSemana] = useState('Selecione um dia');
  const { showActionSheetWithOptions } = useActionSheet();

  function newCreateTreino() {
    createTreino(treino).then((res) => {
      if (!res) {
        console.log('Treino não criado');
      } else {
        console.log("Treino criado com sucesso", res);
      }
    });
  }

  const handleSalvar = () => {
    if (!isValidString(nome)) {
      Alert.alert('Atenção', 'Por favor, preencha o nome do treino.');
      return;
    }

    const treinoSalvo = {
      titulo: nome,
      categoria,
      diaDaSemana,
    };

    navigation.navigate('treinos', { treinoSalvo });
  };

  const showCategoriaActionSheet = () => {
    const options = ['Superior', 'Inferior', 'Cancelar'];
    const destructiveButtonIndex = 2;
    showActionSheetWithOptions({
      title: 'Selecione uma categoria:',
      options,
      destructiveButtonIndex
    }, (selectedIndex) => {
      switch (selectedIndex) {
        case 0:
          // Superior
          setCategoria('Superior')
          break;

        case 1:
          // Inferior
          setCategoria('Inferior')
          break;

        case destructiveButtonIndex:
          // Cancelar
          break;
      }
    });
  };

  const showDiaDaSemanaActionSheet = () => {
    const options = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Cancelar'];
    const destructiveButtonIndex = 7;
    showActionSheetWithOptions({
      title: 'Selecione um dia da semana:',
      options,
      destructiveButtonIndex
    }, (selectedIndex) => {
      switch (selectedIndex) {
        case 0:
          // Domingo
          setDiaDaSemana(options[0])
          break;

        case 1:
          // Segunda-feira
          setDiaDaSemana(options[1])
          break;

        case 2:
          // Terça-feira
          setDiaDaSemana(options[2])
          break;

        case 3:
          // Quarta-feira
          setDiaDaSemana(options[3])
          break;

        case 4:
          // Quinta-feira
          setDiaDaSemana(options[4])
          break;

        case 5:
          // Sexta-feira
          setDiaDaSemana(options[5])
          break;

        case 6:
          // Sábado
          setDiaDaSemana(options[6])
          break;

        case destructiveButtonIndex:
          // Cancelar
          break;
      }
    });
  };

  const isValidString = (value) => {
    return typeof value === 'string' && value.trim() !== '';
  };

  const categoryColor = categoria === 'Selecione uma categoria' ? 'gray': '#FAFAFA';
  const dayColor = diaDaSemana === 'Selecione um dia' ? 'gray': '#FAFAFA';

  return (
    <BackgroundContainer onPress={() => handleSalvar()} onPressBack={navigation.goBack} screenName={'Criar Treino'} rightText={'Salvar'}>

      <View style={styles.input}>
        <Text style={[styles.name, { fontFamily: getFont('sfProTextSemibold') }]}>Nome</Text>
        <TextField
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome do treino"
        />
      </View>

      <View style={styles.row}>
        <Text style={[styles.label, { fontFamily: getFont('sfProTextSemibold') }]}>Categoria</Text>
        <Text style={[styles.modalText, { fontFamily: getFont('sfProTextRegular'), color: categoryColor }]} onPress={showCategoriaActionSheet}>
          {categoria}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={[styles.label, { fontFamily: getFont('sfProTextSemibold') }]}>Dia da Semana</Text>
        <Text style={[styles.modalText, { fontFamily: getFont('sfProTextRegular'), color: dayColor }]} onPress={showDiaDaSemanaActionSheet}>
          {diaDaSemana}
        </Text>
      </View>

    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  name: {
    color: '#FAFAFA',
    fontSize: 20,
    marginBottom: -10,
  },
  label: {
    color: '#FAFAFA',
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    marginBottom: 25,
  },
  row: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalText: {
    fontSize: 18,
  },
});

