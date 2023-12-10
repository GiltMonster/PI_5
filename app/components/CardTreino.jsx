import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';


const CardTreino = ({ titulo, categoria, diaSemana, isChecked, onCheckboxToggle, navigation }) => {

  const handleCardPress = () => {
    navigation.navigate('exercicios');
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.cardContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.tituloTreino}>{`${titulo}`}</Text>
          <Text style={styles.tituloCategoria}>{`${categoria}`}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.leftDetails}>
            <Text style={styles.diaSemana}>{diaSemana}</Text>
          </View>
          <View style={styles.rightDetails}>
            <Checkbox.Android
              status={isChecked ? 'checked' : 'unchecked'}
              onPress={onCheckboxToggle}
              color="#fff"
            />
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
    fontSize: 16,
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
    width: 97,
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
});

export default CardTreino;
