import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import HeaderScreensNavigations from '../components/HeaderScreensNavigations';
import BackgroundContainer from '../components/BackgroundContainer';
import TextField from '../components/TextField';
import { createTreino } from '../services/TreinoDB';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { obterDataFormatada, pegaDiaAtual } from '../util/data';
import { salvaPrimeiraLetra } from '../util/conversores';

export default function CriarTreino({ navigation }) {
  const [treino, setTreino] = useState();
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('Superior');
  const [diaDaSemana, setDiaDaSemana] = useState();
  const { showActionSheetWithOptions } = useActionSheet();

  useEffect(() => {
    setDiaDaSemana(pegaDiaAtual());
  }, []);

  const handleSalvar = () => {
    if (!isValidString(nome)) {
      Alert.alert('Atenção', 'Por favor, preencha o nome do treino.');
      return;
    }else{
      const novoTreino = {
        "idUsuario": 1,
        "data": obterDataFormatada(diaDaSemana),
        "duracao": "00:00:00",
        "nome": nome,
        "categoria": salvaPrimeiraLetra(categoria),
        "conclusao": 0
      };

      console.log('Treino: ', novoTreino);
      createTreino(novoTreino).then((res) => {
        if (!res) {
          Alert.alert('Alguma coisa deu errado','Treino não criado', ['ok']);
        } else {
          setNome('');
          setCategoria('Superior');
          setDiaDaSemana(pegaDiaAtual());
          Alert.alert('Sucesso', "Treino criado com sucesso", ['ok']);
          navigation.navigate('treinos');
        }
      });
    }
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

  return (
    <BackgroundContainer>
      <HeaderScreensNavigations navigation={navigation} title="Criar Treino" onSavePress={handleSalvar} />

      <TextField
        label="Nome:"
        value={nome}
        onChangeText={(nome) => {setNome(nome)}}
        placeholder="Digite o nome do treino"
        placeholderTextColor="red"
      />

      <View style={styles.row}>
        <Text style={styles.label}>Categoria:</Text>
        <Text style={styles.modalText} onPress={showCategoriaActionSheet}>
          {categoria}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Dia da Semana:</Text>
        <Text style={styles.modalText} onPress={showDiaDaSemanaActionSheet}>
          {diaDaSemana}
        </Text>
      </View>

    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    color: '#fff',
  },
  row: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalText: {
    color: '#fff',
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingVertical: 5,
    marginLeft: 5,
  },
});

