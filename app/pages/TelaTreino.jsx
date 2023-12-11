import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CardTreino from '../components/Cards/CardTreino';
import ToolBar from '../components/toolBarComponents/ToolBar';
import getFont from '../util/fonts';

const TelaTreino = ({ route, navigation }) => {
  const treinoSalvo = route.params?.treinoSalvo || null;
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <ToolBar onPress={() => navigation.navigate('criarTreino')} onPressBack={navigation.goBack} screenName={"Treinos"} iconName={"plus"}/>
      </View>
      <ScrollView>
        {treinoSalvo && (
          <CardTreino
            titulo={treinoSalvo.titulo}
            categoria={treinoSalvo.categoria}
            diaSemana={treinoSalvo.diaDaSemana}
            isChecked={false}
            onCheckboxToggle={() => { }}
            treinoSalvo={treinoSalvo} 
            navigation={navigation}

          />
        )}
        {!treinoSalvo && (
          <View style={styles.noTraining}>
            <Text style={[styles.noTrainingText, { fontFamily: getFont('sfProTextSemibold') }]}>Sem Treinos</Text>
          </View>
        )}
      </ScrollView>
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
    top: 100
  },
  noTrainingText: {
    fontSize: 25,
    color: 'gray'
  }
});

export default TelaTreino;
