import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import BackgroundContainer from '../components/BackgroundContainer';
import TextField from '../components/TextField';
import { createTreino } from '../services/TreinoDB';
import { useActionSheet } from '@expo/react-native-action-sheet';
import getFont from '../util/fonts';
import { obterDataFormatada, pegaDiaAtual } from '../util/data';
import { salvaPrimeiraLetra } from '../util/conversores';
import TabBar from '../components/tabBarComponents/TabBar';

export default function CriarTreino({ navigation, takeRouter }) {
  const [treino, setTreino] = useState();
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('Selecione uma categoria');
  const [diaDaSemana, setDiaDaSemana] = useState('Selecione um dia');
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

  const categoryColor = categoria === 'Selecione uma categoria' ? 'gray': '#FAFAFA';
  const dayColor = diaDaSemana === 'Selecione um dia' ? 'gray': '#FAFAFA';

  return (
    <View style={styles.container}>
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
    {/* <TabBar takeRouter={takeRouter} style={styles.tabBarStyle} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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

