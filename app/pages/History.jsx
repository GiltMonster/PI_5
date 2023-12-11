import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import CardTreinoFinalizado from '../components/Cards/CardTreinoFinalizado';
import ToolBar from '../components/toolBarComponents/ToolBar';

const History = ({ navigation }) => {
  //dado estatico para teste
  const treinosConcluidos = [
    { id: 1, data: '01/01/2023', nomeTreino: 'Treino A', categoria: 'Superior' },
    { id: 2, data: '02/01/2023', nomeTreino: 'Treino B', categoria: 'Inferior' },
  ];

  return (
    <View style={styles.container}>
      <ToolBar onPressBack={navigation.goBack} screenName={"Histórico"}/>
      <View style={styles.content}>
        <Text style={styles.titulo}>Últimos treinos realizados:</Text>
        <ScrollView >
          {treinosConcluidos.map((treino) => (
            <CardTreinoFinalizado
              key={treino.id}
              data={treino.data}
              nomeTreino={treino.nomeTreino}
              categoria={treino.categoria}
            />
          ))}
        </ScrollView>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  content: {
    padding: 20,
    top: 20
  },
  titulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 15
  }
});

export default History;
