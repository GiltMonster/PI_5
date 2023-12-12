import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, ActivityIndicator } from 'react-native';
import CardExercicio from '../components/Cards/CardExercicio';
import { getExerciciosPeloTreino } from '../services/Exercicio';
import ToolBar from '../components/toolBarComponents/ToolBar';

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
       <ToolBar onPress={() => navigation.navigate('criarExercicio', {idTreino: treino.idTreino})} onPressBack={navigation.goBack} screenName={"Exercícios"} iconName={"plus"}/>
        <ActivityIndicator size="large" color="#6EDEFD" />
      </View>

      :

      <View style={styles.container}>
        <ToolBar onPress={() => navigation.navigate('criarExercicio', {idTreino: treino.idTreino})} onPressBack={navigation.goBack} screenName={"Exercícios"} iconName={"plus"}/>
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
              idTreino={treino.idTreino}
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
    paddingRight: 20,
    marginLeft: 20,
    marginTop: 30
  },
  scrollView: {
    flex: 1,
  }
});

export default TelaExercicio;