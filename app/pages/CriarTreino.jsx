import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ActionSheet from 'react-native-actionsheet';

const CriarTreino = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('Superior');
  const [diaDaSemana, setDiaDaSemana] = useState('Domingo');
  const categoriaActionSheetRef = React.createRef();
  const diaDaSemanaActionSheetRef = React.createRef();

  const categorias = ['Superior', 'Inferior'];
  const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

  const handleSalvar = () => {
    const treinoSalvo = {
      titulo: nome,
      categoria,
      diaDaSemana,
    };
    //banco

    navigation.navigate('treinos', { treinoSalvo });
  };

  const showCategoriaActionSheet = () => {
    categoriaActionSheetRef.current.show();
  };

  const showDiaDaSemanaActionSheet = () => {
    diaDaSemanaActionSheetRef.current.show();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header}>Treinos</Text>
        <TouchableOpacity onPress={showCategoriaActionSheet}>
          <MaterialIcons name="add" size={24} color='#1C1C1E' />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome do treino"
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

      <Button title="Salvar" onPress={handleSalvar} style={styles.button} />

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1E',
    flex: 1,
    padding: 20,
  },
headerContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 20,
  padding: 30,
  paddingLeft: 20, 
  paddingRight: 20,
},
header: {
  //backgroundColor: '#1C1C1E',
  padding: 10,
  fontSize: 17,
  color: '#fff',
},
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalText: {
    color: '#fff',
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingVertical: 5,
    marginLeft: 5,
  },
  button: {
    marginTop: 20,
  },
});

export default CriarTreino;



// headerContainer: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   marginBottom: 20,
//   padding: 30,
//   paddingLeft: 20, 
//   paddingRight: 20,
// },
// header: {
//   backgroundColor: '#1C1C1E',
//   padding: 10,
//   fontSize: 17,
//   color: '#fff',
// },