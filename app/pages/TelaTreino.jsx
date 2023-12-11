import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Alert, FlatList } from 'react-native';
import CardTreino from '../components/Cards/CardTreino';
import HeaderScreensNavigations from '../components/HeaderScreensNavigations';
import { getTreinos } from '../services/TreinoDB';
import ToolBar from '../components/toolBarComponents/ToolBar';
import getFont from '../util/fonts';

const TelaTreino = ({ navigation }) => {
  const [treino, setTreino] = useState();
  const [checked, setChecked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    getTreinos().then((treinos) => {
      if (!treinos) {
        Alert.alert('Atenção', 'Não foi possível carregar os treinos.', ['ok']);
      } else {
        console.log('Treinos carregados com sucesso.');
        setTreino(treinos);
      }
    });
  }, []);

  const goToPage = () => {
    navigation.navigate('criarTreino');
  }


  return (
    <View style={styles.container}>
      <ToolBar onPress={() => navigation.navigate('criarTreino')} onPressBack={navigation.goBack} screenName={"Treinos"} iconName={"plus"} />
      {treino && (
        <FlatList
          data={treino}
          renderItem={({ item }) => <CardTreino
            treino={item}
            navigation={navigation}
          />}
          keyExtractor={item => item.idTreino}
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
  noTraining: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 100
  },
  noTrainingText: {
    fontSize: 25,
    color: 'gray'
  }
});

export default TelaTreino;
