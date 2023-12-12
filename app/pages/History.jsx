import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ActivityIndicator } from 'react-native';
import CardTreinoFinalizado from '../components/Cards/CardTreinoFinalizado';
import ToolBar from '../components/toolBarComponents/ToolBar';
import { getTreinos } from '../services/TreinoDB';
import { formatarData, ordenarListaPorDataEConclusao } from '../util/data';
import { retornarPalavraPorLetra } from '../util/conversores';

const History = ({ navigation }) => {
  //dado estatico para teste
  const [treino, setTreino] = useState();
  const [isLoad, setLoading] = useState(true);

  useEffect(() => {
    getTreinos().then((treinos) => {
      if (!treinos) {
        Alert.alert('Atenção', 'Não foi possível carregar os treinos.', ['ok']);
      } else {
        console.log('Treinos carregados com sucesso.');
        console.log(ordenarListaPorDataEConclusao(treinos));
        setTreino(ordenarListaPorDataEConclusao(treinos));
        setLoading(false);
      }
    });
  }, []);

  return (

    isLoad ?

      <View style={styles.container}>
        <ToolBar onPressBack={navigation.goBack} screenName={"Histórico"} />
        <View style={styles.noTraining}>
          <ActivityIndicator size="large" color="#6EDEFD" />
        </View>
      </View>

      :

      <SafeAreaView style={styles.container} >
        <ToolBar onPressBack={navigation.goBack} screenName={"Histórico"} />

        <Text style={styles.titulo}>Últimos treinos realizados:</Text>

        <FlatList
          style={styles.content}
          data={treino}
          renderItem={({ item }) =>
            <CardTreinoFinalizado
              data={formatarData(item.dataTreino)}
              nomeTreino={item.nomeTreino}
              categoria={retornarPalavraPorLetra(item.categoriaTreino)}
            />
          }
          keyExtractor={item => item.idTreino}
        />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  content: {
    paddingHorizontal: 20,
  },
  titulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 15,
    paddingLeft: 20,
    top: 10
  }
});

export default History;
