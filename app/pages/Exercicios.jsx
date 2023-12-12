import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, ActivityIndicator } from 'react-native';
import HeaderScreensNavigations from '../components/HeaderScreensNavigations';
import CardExercicio from '../components/Cards/CardExercicio';
import { getExerciciosPeloTreino } from '../services/Exercicio';

const TelaExercicio = ({ route, navigation }) => {
  const treino = route.params.treino;

  const [exercicios, setExercicios] = useState([]);
  const [isLoad, setLoading] = useState(true);

  useEffect(() => {
    console.log('treino:', treino);
    getExerciciosPeloTreino(treino.idTreino).then((exercicios) => {
      if (!exercicios) {
        Alert.alert('Atenção', 'Não foi possível carregar os treinos.', ['ok']);
      } else {
        console.log('Exercicios carregados com sucesso.');
        setExercicios(exercicios);
        setLoading(false);
      }
    });
  }, []);

  return (

    isLoad ?

      <View style={styles.container}>
        <HeaderScreensNavigations
          title="Exercícios"
          onAddPress={() => navigation.navigate('criarExercicio', {treinoId: treino.idTreino})}
        />
        <ActivityIndicator size="large" color="#6EDEFD" />
      </View>

      :

      <View style={styles.container}>
        <HeaderScreensNavigations
          title="Exercícios"
          onAddPress={() => navigation.navigate('criarExercicio', {treinoId: treino.idTreino})}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.header}>{treino.nomeTreino}</Text>
        </View>
        {exercicios && (
          <FlatList
            data={exercicios}
            renderItem={({ item }) =>
              <CardExercicio
                exercicio={item}
                navigation={navigation}
                treinoId={treino.idTreino}
              />
            }
            keyExtractor={item => item.idExercicio}
          />
        )}
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
