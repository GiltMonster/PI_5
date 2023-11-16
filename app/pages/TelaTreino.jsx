// Importando os componentes necessários
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

// Criando um componente para representar cada treino
const Treino = ({ nome, tipo, dia, onPress }) => {
  return (
    <View style={styles.treino}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.tipo}>{tipo}</Text>
      <Text style={styles.dia}>{dia}</Text>
      <Button title="Abrir" onPress={onPress} />
    </View>
  );
};

// Criando um componente para a tela principal
const TelaPrincipal = ({ navigation }) => {
  // Criando um estado para armazenar os treinos
  const [treinos, setTreinos] = useState([
    { id: '1', nome: 'Costas e Bíceps', tipo: 'Superior', dia: 'Segunda-feira' },
    { id: '2', nome: 'Peito e Tríceps', tipo: 'Superior', dia: 'Terça-feira' },
    { id: '3', nome: 'Pernas e Glúteos', tipo: 'Inferior', dia: 'Quarta-feira' },
    { id: '4', nome: 'Ombros e Trapézio', tipo: 'Superior', dia: 'Quinta-feira' },
    { id: '5', nome: 'Abdominais e Lombar', tipo: 'Inferior', dia: 'Sexta-feira' },
  ]);

  // Criando uma função para adicionar um novo treino
  const adicionarTreino = (nome, tipo, dia) => {
    // Gerando um id aleatório
    const id = Math.random().toString();
    // Criando um objeto com os dados do treino
    const treino = { id, nome, tipo, dia };
    // Atualizando o estado com o novo treino
    setTreinos((treinosAnteriores) => [...treinosAnteriores, treino]);
  };

  // Criando uma função para abrir a tela de um treino
  const abrirTreino = (id) => {
    // Encontrando o treino pelo id
    const treino = treinos.find((treino) => treino.id === id);
    // Navegando para a tela de detalhes do treino
    navigation.navigate('TelaDetalhes', { treino });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo de Academia</Text>
      <FlatList
        data={treinos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Treino
            nome={item.nome}
            tipo={item.tipo}
            dia={item.dia}
            onPress={() => abrirTreino(item.id)}
          />
        )}
      />
      <Button
        title="Adicionar Treino"
        onPress={() =>
          // Navegando para a tela de adicionar treino
          navigation.navigate('TelaAdicionar', { adicionarTreino })
        }
      />
    </View>
  );
};

// Criando um componente para a tela de adicionar treino
const TelaAdicionar = ({ route, navigation }) => {
  // Recebendo a função de adicionar treino da tela anterior
  const { adicionarTreino } = route.params;
  // Criando um estado para armazenar os dados do treino
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [dia, setDia] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adicionar Treino</Text>
      <Text style={styles.label}>Nome do treino:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(texto) => setNome(texto)}
      />
      <Text style={styles.label}>Tipo do treino:</Text>
      <TextInput
        style={styles.input}
        value={tipo}
        onChangeText={(texto) => setTipo(texto)}
      />
      <Text style={styles.label}>Dia da semana:</Text>
      <TextInput
        style={styles.input}
        value={dia}
        onChangeText={(texto) => setDia(texto)}
      />
      <Button
        title="Salvar"
        onPress={() => {
          // Adicionando o treino com os dados informados
          adicionarTreino(nome, tipo, dia);
          // Voltando para a tela anterior
          navigation.goBack();
        }}
      />
    </View>
  );
};

// Criando um componente para a tela de detalhes do treino
const TelaDetalhes = ({ route, navigation }) => {
  // Recebendo o treino da tela anterior
  const { treino } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes do Treino</Text>
      <Text style={styles.nome}>{treino.nome}</Text>
      <Text style={styles.tipo}>{treino.tipo}</Text>
      <Text style={styles.dia}>{treino.dia}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

// Definindo os estilos dos componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
  },
  treino: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: 50,
    backgroundColor: '#eee',
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  tipo: {
    fontSize: 16,
    color: '#000',
  },
  dia: {
    fontSize: 14,
    color: '#000',
  },
  label: {
    fontSize: 16,
    color: '#000',
    margin: 5,
  },
  input: {
    width: '90%',
    height: 40,
    backgroundColor: '#eee',
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
});

// Exportando os componentes
export { TelaPrincipal, TelaAdicionar, TelaDetalhes };