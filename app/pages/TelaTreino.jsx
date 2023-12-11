import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Alert, FlatList } from 'react-native';
import CardTreino from '../components/CardTreino';
import HeaderScreensNavigations from '../components/HeaderScreensNavigations';
import { getTreinos } from '../services/TreinoDB';

const TelaTreino = ({ navigation }) => {
  const [treino, setTreino] = useState();

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
      <HeaderScreensNavigations
        title="Criar Treino"
        onAddPress={goToPage}
      />
        {treino && (
          <FlatList
            data={treino}
            renderItem={({ item }) => <CardTreino
              onCheckboxToggle={() => { }}
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
    paddingLeft: 20,
    paddingRight: 20,
  }
});

export default TelaTreino;
