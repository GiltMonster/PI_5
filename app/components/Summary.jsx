import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useFonts } from 'expo-font';
import img from '../assets/images/TelaInicial.png'

export default function Summary({ onPress }) {
  const [loaded, error] = useFonts({
    sfProDisplayBold: require('../assets/fonts/SF-Pro-Display-Bold.ttf'),
    sfProTextSemibold: require('../assets/fonts/sf-pro-text-semibold.ttf'),
  });

  if (error) {
    console.log("Erro ao carregar a fonte: ", error);
  }

  const sfProDisplayBold = loaded ? 'sfProDisplayBold' : null;
  const sfProTextSemibold = loaded ? 'sfProTextSemibold' : null;

  return (
    <View>
      <Text style={[styles.titleText, { fontFamily: sfProDisplayBold }]}>Resumo</Text>
      <TouchableOpacity onPress={() => onPress()} style={styles.summaryButton}>
        <Text style={[styles.summaryButtonText,{ fontFamily: sfProTextSemibold }]}>Treinos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress()} style={styles.summaryButton}>
        <Text style={[styles.summaryButtonText,{ fontFamily: sfProTextSemibold }]}>Meta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    titleText: {
        marginTop: 10,
        paddingHorizontal: 20,
        fontSize: 23,
        color: '#E3ECF1'
      },
    summaryButtonText: {
      paddingHorizontal: 20,
      fontSize: 17,
    },
    summaryButton: {
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      marginVertical: 10,
      backgroundColor: '#28A3CC',
      height: 60,
      borderRadius: 18,
    },
  });