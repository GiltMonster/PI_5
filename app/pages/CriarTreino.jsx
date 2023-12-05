
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

export default function CriarTreino() {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [diaDaSemana, setDiaDaSemana] = useState('');
  const [duracao, setDuracao] = useState('');
  const [horario, setHorario] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text style={styles.title}>Criar Treino</Text>
        <View style={styles.buttons}>
          <Button title="Salvar" onPress={() => {}} />
        </View>
      </View>
      <Text style={styles.label}>Nome do Treino</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
      <View style={styles.row}>
        <Text style={styles.label}>Categoria</Text>
        <Picker
          selectedValue={categoria}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
        >
          <Picker.Item label="Superior" value="superior" color={categoria === 'superior' ? '#fff' : '#000'} />
          <Picker.Item label="Inferior" value="inferior" color={categoria === 'inferior' ? '#fff' : '#000'} />
        </Picker>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Dia da Semana</Text>
        <Picker
          selectedValue={diaDaSemana}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setDiaDaSemana(itemValue)}
        >
          <Picker.Item label="Domingo" value="domingo" color={diaDaSemana === 'domingo' ? '#fff' : '#000'} />
          <Picker.Item label="Segunda-feira" value="segunda" color={diaDaSemana === 'segunda' ? '#fff' : '#000'} />
          <Picker.Item label="Terça-feira" value="terca" color={diaDaSemana === 'terca' ? '#fff' : '#000'} />
          <Picker.Item label="Quarta-feira" value="quarta" color={diaDaSemana === 'quarta' ? '#fff' : '#000'} />
          <Picker.Item label="Quinta-feira" value="quinta" color={diaDaSemana === 'quinta' ? '#fff' : '#000'} />
          <Picker.Item label="Sexta-feira" value="sexta" color={diaDaSemana === 'sexta' ? '#fff' : '#000'} />
          <Picker.Item label="Sábado" value="sabado" color={diaDaSemana === 'sabado' ? '#fff' : '#000'} />
        </Picker>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Duração</Text>
        <Picker
          selectedValue={horario}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setHorario(itemValue)}
        >
          {Array.from({length: 24}, (_, i) => i).map((_, i) => (
            Array.from({length: 60}, (_, j) => j).map((_, j) => (
              <Picker.Item 
                key={`${i}:${j}`} 
                label={`${i}h:${j < 10 ? `0${j}` : j}m`} 
                value={`${i}:${j < 10 ? `0${j}` : j}`} 
                color={horario === `${i}:${j < 10 ? `0${j}` : j}` ? '#fff' : '#000'} 
              />
            ))
          ))}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 160,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 5,
  },
  input: {
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  picker: {
    height: 50,
    width: 120,
    color: '#fff',
    borderColor: '#000',
    borderWidth: 0,
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
});