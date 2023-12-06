import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';

const DATA = [
  {
    id: '1',
    title: 'Segunda-Feira',
    subtitle: 'Superior',
  },
  {
    id: '2',
    title: 'Terça-Feira',
    subtitle: 'Inferior',
  },
    {
    id: '3',
    title: 'Quarta-Feira',
    subtitle: 'Superior',
  },
  {
    id: '4',
    title: 'Quinta-Feira',
    subtitle: 'Inferior',
  },
    {
    id: '5',
    title: 'Sexta-Feira',
    subtitle: 'Superior',
  },
  {
    id: '6',
    title: 'Sábado',
    subtitle: 'Inferior',
  },
    {
    id: '7',
    title: 'Domingo',
    subtitle: 'Superior',
  },
];

const Item = ({ title, subtitle, color }) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.item}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="first"
            status={ checked ? 'checked' : 'unchecked' }
            onPress={() => setChecked(!checked)}
            uncheckedColor={color}
            color={color}
          />
          <Text style={styles.trainingName}>Nome do treino</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <Text style={[styles.subtitle, { color }]}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default function TelaTreinos({ navigation }) {
  const renderItem = ({ item }) => {
    const color = item.id % 2 === 0 ? '#FFA500' : '#993399';
    return <Item title={item.title} subtitle={item.subtitle} color={color} navigation={navigation} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Treinos</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateTraining')}>
        <Text style={styles.link} onPress={() => navigation.navigate('CriarTreino')}>
          <MaterialIcons name="add" size={24} color="#fff" />
        </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    width: Dimensions.get('window').width,
  },
  header: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontWeight: 'Bold',
    fontSize: 22,
    paddingBottom: 15,
  },
  subtitle: {
    fontSize: 17,
    position: 'absolute', 
    bottom: 50, 
    paddingRight: 80,
  },
  trainingName: {
    fontSize: 16,
    color: '#fff',
    paddingRight: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  radioButtonContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'space-between',
    paddingLeft: 20,
    height: 97,
    borderRadius: 15,
  },
    headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    paddingLeft: 125,
    paddingRight: 20,
  },
    link: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});