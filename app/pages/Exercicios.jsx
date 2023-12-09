import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
//import CardTreino from '../components/CardTreino'; 

const TelaExercicio = ({ route, navigation }) => {
 // const treinoSalvo = route.params?.treinoSalvo || null;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header}>Exercícios</Text>
        <TouchableOpacity onPress={() => navigation.navigate('criarExercicio')}>
          <MaterialIcons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    paddingTop: 50, 
  },
  header: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    paddingLeft: 20, 
    paddingRight: 20,
  },
});

export default TelaExercicio;
