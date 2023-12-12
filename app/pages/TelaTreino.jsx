import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, FlatList, ActivityIndicator } from 'react-native';
import CardTreino from '../components/Cards/CardTreino';
import { getTreinos } from '../services/TreinoDB';
import ToolBar from '../components/toolBarComponents/ToolBar';
import TabBar from '../components/tabBarComponents/TabBar';

const TelaTreino = ({ navigation, takeRouter }) => {
  const [treino, setTreino] = useState();
  const [isLoad, setLoading] = useState(true);

  useEffect(() => {
    getTreinos().then((treinos) => {
      if (!treinos) {
        Alert.alert('Atenção', 'Não foi possível carregar os treinos.', ['ok']);
      } else {
        console.log('Treinos carregados com sucesso.');
        setTreino(treinos);
        setLoading(false);
      }
    });
  }, []);

  const goToPage = () => {
    navigation.navigate('criarTreino',);
  }

  return (
    
    isLoad ?

      <View style={styles.container}>
        <ToolBar onPress={() => goToPage()} onPressBack={navigation.goBack} screenName={"Treinos"} iconName={"plus"} />
        <View style={styles.noTraining}>
          <ActivityIndicator size="large" color="#6EDEFD" />
        </View>
        {/* <TabBar takeRouter={takeRouter} style={styles.tabBarStyle} /> */}
      </View>

      :

      <View style={styles.container}>
        <ToolBar onPress={() => goToPage()} onPressBack={navigation.goBack} screenName={"Treinos"} iconName={"plus"} />
        {treino && (
          <FlatList
            data={treino}
            renderItem={({ item }) =>
              <CardTreino
                treino={item}
                navigation={navigation}
              />
            }
            keyExtractor={item => item.idTreino}
            style={{top: 20}}
          />
        )}
        {/* <TabBar takeRouter={takeRouter} style={styles.tabBarStyle} /> */}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  toolbar: {
    marginBottom: 50
  },
  noTraining: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  noTrainingText: {
    fontSize: 25,
    color: 'gray'
  }
});

export default TelaTreino;