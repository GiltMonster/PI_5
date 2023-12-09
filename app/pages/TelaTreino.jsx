import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CardTreino from '../components/CardTreino';
import HeaderScreensNavigations from '../components/HeaderScreensNavigations';

const TelaTreino = ({ route, navigation }) => {
  const treinoSalvo = route.params?.treinoSalvo || null;
  return (
    <View style={styles.container}>
            <HeaderScreensNavigations
        title="Criar Treino"
        onAddPress={() => navigation.navigate('criarTreino')}
      />
      <ScrollView>
        {treinoSalvo && (
          <CardTreino
            titulo={treinoSalvo.titulo}
            categoria={treinoSalvo.categoria}
            diaSemana={treinoSalvo.diaDaSemana}
            isChecked={false}
            onCheckboxToggle={() => { }}
            navigation={navigation}

          />
        )}
      </ScrollView>
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
