import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ToolBar from '../components/toolBarComponents/ToolBar';
import getFont from '../util/fonts';

const PrivacidadeTermosTela = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ToolBar onPressBack={navigation.goBack} screenName={"Privacidade e Termos de Uso"}/>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.texto, { fontFamily: getFont('sfProTextRegular') }]}>
          Bem-vindo(a) ao FitTrack!{'\n'}{'\n'}
          Estamos comprometidos em garantir a privacidade e segurança dos dados dos nossos usuários. Leia atentamente os termos abaixo para entender como coletamos, usamos e protegemos suas informações.{'\n\n'}
          Coleta de Dados:{'\n'}{'\n'}
          Em virtude da natureza local do nosso aplicativo, não realizamos nenhum compartilhamento dos dados coletados. As informações fornecidas por você permanecem seguras e são utilizadas exclusivamente para aprimorar a sua experiência dentro do aplicativo.{'\n'}
          
          {'\n'}Se tiver dúvidas ou preocupações, entre em contato conosco em @Dominio.
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
    textAlign: 'justify'
  },
});

export default PrivacidadeTermosTela;