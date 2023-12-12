import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardTreinoFinalizado = ({ data, nomeTreino, categoria }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.data}>{data}</Text>
      <View style={styles.cardContainer}>
        <Text style={styles.textoLeft}>{nomeTreino}</Text>
        <Text style={styles.textoRight}>{categoria}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  cardContainer: {
    width: 350,
    height: 100,
    backgroundColor: '#121213',
    borderRadius: 12,
    padding: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textoLeft: {
    color: '#BF5BF3',
    fontSize: 17,
    fontWeight: 'bold',
    width: 200
  },
  textoRight: {
    color: '#BF5BF3',
    fontSize: 17,
    fontWeight: 'bold',
  },
  data: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
});

export default CardTreinoFinalizado;
