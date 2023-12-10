import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ActionSheet from 'react-native-actionsheet';
import HeaderScreensNavigations from '../components/HeaderScreensNavigations';
import BackgroundContainer from '../components/BackgroundContainer';
import TextField from '../components/TextField';
import { Picker } from '@react-native-picker/picker';
import { createTreino } from '../services/TreinoDB';

export default function CriarTreino({ navigation }) {
  const [treino, setTreino] = useState(
    {
      "idUsuario": 1,
      "data": "2023-12-04T12:00:00",
      "duracao": "02:52:00",
      "nome": "Treino de perna",
      "categoria": "S",
      "conclusao": 0
    });

  function newCreateTreino() {
    createTreino(treino).then((res) => {
      if (!res) {
        console.log('Treino não criado');
      } else {
        console.log("Treino criado com sucesso", res);
      }
    });
  }

  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('Superior');
  const [diaDaSemana, setDiaDaSemana] = useState('Domingo');
  const categoriaActionSheetRef = React.createRef();
  const diaDaSemanaActionSheetRef = React.createRef();

  const categorias = ['Superior', 'Inferior'];
  const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

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
    categoriaActionSheetRef.current.show();
  };

  const showDiaDaSemanaActionSheet = () => {
    diaDaSemanaActionSheetRef.current.show();
  };

  const isValidString = (value) => {
    return typeof value === 'string' && value.trim() !== '';
  };

  return (
    <BackgroundContainer>
        <HeaderScreensNavigations navigation={navigation} title="Criar Treino" onSavePress={() => handleSalvar()} />
  
        <TextField
        label="Nome:"
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome do treino"
        placeholderTextColor="#A3A3A3"
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
  
        <ActionSheet
          ref={categoriaActionSheetRef}
          title={'Selecione uma Categoria'}
          options={[...categorias, 'Cancelar']}
          cancelButtonIndex={categorias.length}
          destructiveButtonIndex={categorias.length}
          onPress={(index) => {
            if (index < categorias.length) {
              setCategoria(categorias[index]);
            }
          }}
        />
  
        <ActionSheet
          ref={diaDaSemanaActionSheetRef}
          title={'Selecione um Dia da Semana'}
          options={[...diasDaSemana, 'Cancelar']}
          cancelButtonIndex={diasDaSemana.length}
          destructiveButtonIndex={diasDaSemana.length}
          onPress={(index) => {
            if (index < diasDaSemana.length) {
              setDiaDaSemana(diasDaSemana[index]);
            }
          }}
        />
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

