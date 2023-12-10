import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HeaderScreensNavigations from '../components/HeaderScreensNavigations';
import CardExercicio from '../components/Cards/CardExercicio';

const TelaExercicio = ({ route, navigation }) => {
  const treinoSalvo = route.params?.treinoSalvo || { titulo: 'Treino Padrão' };
  const exercicioSalvo = route.params?.exercicioSalvo || null;

  return (
    <View style={styles.container}>
      <HeaderScreensNavigations
        title="Exercícios"
        onAddPress={() => navigation.navigate('criarExercicio')}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.header}>{`${treinoSalvo.titulo}`}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {exercicioSalvo && (
          <CardExercicio
            nome={exercicioSalvo.nome}
            series={exercicioSalvo.series}
            repeticoes={exercicioSalvo.repeticoes}
            carga={exercicioSalvo.carga}
            navigation={navigation}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    // paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    fontSize: 20,
    color: '#BF5BF3',
    textAlign: 'center',
    fontWeight: 'bold'
   // padding: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   // backgroundColor: 'red',
    paddingRight: 20,
  },
  scrollView: {
    flex: 1,
  }
});

export default TelaExercicio;
