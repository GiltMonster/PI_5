import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

const diasDaSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];

const Treino = ({ dia }) => {
  const [treinos, setTreinos] = useState([]);

  const adicionarTreino = () => {
    const novoTreino = `Treino ${treinos.length + 1}`;
    setTreinos([...treinos, novoTreino]);
  };

  return (
    <View>
      <Text>{dia}</Text>
      {treinos.map((treino, index) => (
        <Text key={index}>{treino}</Text>
      ))}
      <Button title="+" onPress={adicionarTreino} />
    </View>
  );
};

const App = () => {
  return (
    <ScrollView>
      {diasDaSemana.map((dia, index) => (
        <Treino key={index} dia={dia} />
      ))}
    </ScrollView>
  );
};

export default App;