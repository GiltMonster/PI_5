import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CardExercicio from '../components/Cards/CardExercicio';
import ToolBar from '../components/toolBarComponents/ToolBar';

const TelaExercicio = ({ route, navigation }) => {
  const treinoSalvo = route.params?.treinoSalvo || { titulo: 'Treino Padrão' };
  const exercicioSalvo = route.params?.exercicioSalvo || null;

  return (
    <View style={styles.container}>
      <ToolBar onPress={() => navigation.navigate('criarExercicio')} onPressBack={navigation.goBack} screenName={"Exercícios"} iconName={"plus"}/>
      <ScrollView style={styles.scrollView}>
        <View style={styles.titleContainer}>
          <Text style={styles.header}>{`${treinoSalvo.titulo}`}</Text>
        </View>
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
  },
  header: {
    fontSize: 20,
    color: '#BF5BF3',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 30
  },
  scrollView: {
    flex: 1,
  }
});

export default TelaExercicio;
