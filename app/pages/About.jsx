import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ToolBar from '../components/toolBarComponents/ToolBar';

const About = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ToolBar onPressBack={navigation.goBack} screenName={"Sobre"}/>  
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.texto}>
          Bem-vindo(a) ao FitTrack!{'\n\n'}
          O projeto FitTrack visa desenvolver um aplicativo mobile destinado a facilitar o acompanhamento e registro das rotinas de exercícios de musculação por parte dos usuários. A iniciativa é fundamentada em pesquisas minuciosas realizadas para identificar as maiores dificuldades enfrentadas por muitas pessoas ao tentarem manter uma rotina regular de exercícios, destacando-se como principal obstáculo a ausência de organização.{'\n\n'}
          Nosso objetivo é fornecer uma solução intuitiva e eficaz para que você possa atingir seus objetivos de forma mais fácil e organizada. Com o FitTrack, você terá uma ferramenta poderosa para registrar seus treinos, acompanhar seu progresso e manter uma rotina saudável. Estamos comprometidos em proporcionar uma experiência positiva e segura para todos os nossos usuários.
        </Text>
      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  scrollContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    top: 40
  },
  texto: {
    color: '#fff',
    fontSize: 18,
  },
});

export default About;