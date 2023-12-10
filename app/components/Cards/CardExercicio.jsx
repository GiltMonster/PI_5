import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';

const CardExercicio = ({isChecked, onCheckboxToggle, nome, repeticoes, series, carga, navigation }) => {
  const handleCardPress = () => {
    navigation.navigate('criarExercicio', { nome, repeticoes, series, carga });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.cardContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.nomeExercicio}>{nome}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.textoDetalhes}>{`Repetições: ${repeticoes}`}</Text>
          <Text style={styles.textoDetalhes}>{`Série: ${series}`}</Text>
          <Text style={styles.textoDetalhes}>{`Carga: ${carga}`}</Text>
        </View>
                    {/* Este é um comentário dentro do JSX 
  <View style={styles.rightDetails}>
            <Checkbox.Android
              status={isChecked ? 'checked' : 'unchecked'}
              onPress={onCheckboxToggle}
              color="#fff"
              
            />
          </View>
          */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 350,
    height: 150,
    backgroundColor: '#121213',
    borderRadius: 12,
    marginVertical: 10,
    padding: 10,
    alignSelf: 'center',
    flex: 1, 
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  nomeExercicio: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 8
  },
  rightDetails: {
    width: 97,
    height: 97,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  detailsContainer: {
    flexDirection: 'column',
    paddingLeft: 10
  },
  textoDetalhes: {
    color: '#fff',
    fontSize: 18,
    paddingBottom: 8
  }
});

export default CardExercicio;
