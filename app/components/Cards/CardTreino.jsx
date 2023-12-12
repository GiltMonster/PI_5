import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { retornaTrueOuFalse, retornaUmOuZero, retornarPalavraPorLetra } from '../../util/conversores';
import { obterDataFormatada, obterDiaDaSemana, pegaDiaAtual } from '../../util/data';
import { atualizaTreino } from '../../services/TreinoDB';

const CardTreino = ({ onCheckboxToggle, treino, navigation }) => {
  const [checked, setChecked] = useState(retornaTrueOuFalse(treino.conclusaoTreino));
  const [showMessage, setShowMessage] = useState(retornaTrueOuFalse(treino.conclusaoTreino));


  const handleCardPress = () => {
    navigation.navigate('exercicios', { treino });
  };

  const handleCheckboxToggle = () => {
    setChecked(!checked);
    setShowMessage(!checked);

    const treinoAtualizado = {
      "idUsuario": 1,
      "data": obterDataFormatada(pegaDiaAtual()),
      "duracao": "00:00:00",
      "nome": treino.nomeTreino,
      "categoria": treino.categoriaTreino,
      "conclusao": retornaUmOuZero(!checked)
    };

    console.log('Treino atualizado: ', treinoAtualizado);
    atualizaTreino(treinoAtualizado, treino.idTreino).then((res) => {
      if (!res) {
        Alert.alert('Atenção', 'Não foi possível atualizar o treino.', ['ok']);
      } else {
        if (!checked) {
          Alert.alert('Sucesso', 'Seu treino foi adicionado ao histórico!');
        }else{
          Alert.alert('Sucesso', 'Seu treino foi removido do histórico!');
        }
        console.log('Treino atualizado com sucesso.');
      }
    });

  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.cardContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.tituloTreino}>{treino.nomeTreino}</Text>
          <Text style={styles.tituloCategoria}>{retornarPalavraPorLetra(treino.categoriaTreino)}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.leftDetails}>
            <Text style={styles.diaSemana}>{obterDiaDaSemana(treino.dataTreino)}</Text>
          </View>
          <View style={styles.rightDetails}>
            <Checkbox.Android
              status={checked ? 'checked' : 'unchecked'}
              borderRadius={50}
              onPress={handleCheckboxToggle}
              color="#4DCA68"
              uncheckedColor="#fff"
            />
            {showMessage && (
              <Text style={styles.message}>Treino concluído!</Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 350,
    height: 134,
    backgroundColor: '#121213',
    borderRadius: 12,
    marginVertical: 10,
    padding: 10,
    alignSelf: 'center'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  tituloTreino: {
    color: '#BF5BF3',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tituloCategoria: {
    color: '#BF5BF3',
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flexDirection: 'row',
  },
  leftDetails: {
    marginHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
  },
  rightDetails: {
    width: 130,
    height: 97,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  diaSemana: {
    color: '#fff',
    fontSize: 20,
  },
  message: {
    color: '#4DCA68',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center'
  },
});

export default CardTreino;