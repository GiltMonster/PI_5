import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ActivityIndicator } from 'react-native';
import CardTreinoFinalizado from '../components/Cards/CardTreinoFinalizado';
import ToolBar from '../components/toolBarComponents/ToolBar';
import { getTreinos } from '../services/TreinoDB';
import { formatarData, ordenarListaPorDataEConclusao } from '../util/data';
import { retornarPalavraPorLetra } from '../util/conversores';
import TabBar from '../components/tabBarComponents/TabBar';

const History = ({ navigation, takeRouter }) => {
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
        {/* <TabBar takeRouter={takeRouter} style={styles.tabBarStyle} /> */}
      </View>

      :

      <View style={styles.container} >
        <ToolBar onPressBack={navigation.goBack} screenName={"Histórico"} />

        <SafeAreaView style={styles.treinos}>
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
        {/* <TabBar takeRouter={navigation} style={styles.tabBarStyle} /> */}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  noTraining: {
    flex: 1,
    justifyContent: 'center'
  },
  treinos: {
    top: 25
  },
  content: {
    paddingHorizontal: 20,
    height: 650
  },
  titulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 15,
    paddingLeft: 20,
    top: 10
  },
  tabBarStyle: {
    justifyContent: 'flex-end'
  }
});

export default History;
