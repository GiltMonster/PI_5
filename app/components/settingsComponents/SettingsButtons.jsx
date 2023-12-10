import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import getFont from '../../util/fonts';

const SettingsButtons = ({ navigation }) => {
  const handlePrivacyAndTermsPress = () => {
    navigation.navigate('privacy&terms');
  };

  const handleAboutPress = () => {
    navigation.navigate('about');
  };

  return (
    <View style={styles.ButtonsContainer}>
      <View style={styles.line}></View>
      <TouchableOpacity onPress={handlePrivacyAndTermsPress}>
        <Text style={[styles.ButtonsText, { fontFamily: getFont('sfProTextRegular') }]}>Privacidade e Termos de uso</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TouchableOpacity onPress={handleAboutPress}>
        <Text style={[styles.ButtonsText, { fontFamily: getFont('sfProTextRegular') }]}>Sobre</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonsContainer: {
    top: 30
  },
  line: {
    backgroundColor: '#FAFAFA',
    height: 1,
    width: '100%',
  },
  ButtonsText: {
    fontSize: 18,
    color: 'white',
    marginVertical: 20,
    marginLeft: 25
  }
});

export default SettingsButtons;
