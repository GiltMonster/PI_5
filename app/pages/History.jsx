import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import CardTreinoFinalizado from '../components/Cards/CardTreinoFinalizado';
import HeaderScreensNavigations from '../components/HeaderScreensNavigations';

const History = () => {
    //dado estatico para teste
  const treinosConcluidos = [
    { id: 1, data: '01/01/2023', nomeTreino: 'Treino A', categoria: 'Superior' },
    { id: 2, data: '02/01/2023', nomeTreino: 'Treino B', categoria: 'Inferior' },
  ];

  return (
    
   <View style={styles.container}>
    <HeaderScreensNavigations title={'Histórico'}paddingRight={50}></HeaderScreensNavigations>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    padding: 20,
  },
  titulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 15
  }
});

export default History;
