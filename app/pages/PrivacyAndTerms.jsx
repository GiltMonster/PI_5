import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import HeaderScreensNavigations from '../components/HeaderScreensNavigations';

const PrivacidadeTermosTela = ({navigation}) => {
  return (
    <View style={styles.container}>
        
        <HeaderScreensNavigations navigation={navigation} title="Privacidade e Termos de Uso" paddingRight={60} />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
  <Text style={styles.texto}>
    Bem-vindo(a) ao FitTrack!{'\n'}
    Estamos comprometidos em garantir a privacidade e segurança dos dados dos nossos usuários. Leia atentamente os termos abaixo para entender como coletamos, usamos e protegemos suas informações.{'\n\n'}
    Coleta de Dados:{'\n'}
    Em virtude da natureza local do nosso aplicativo, não realizamos o compartilhamento de dados sensíveis. As informações fornecidas por você permanecem seguras e são utilizadas exclusivamente para aprimorar a sua experiência dentro do aplicativo.{'\n'}
    
    {'\n'} Se tiver dúvidas ou preocupações, entre em contato conosco em @Dominio.
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
    paddingRight: 20
  },
  texto: {
    color: '#fff',
    fontSize: 18,
  },
});

export default PrivacidadeTermosTela;