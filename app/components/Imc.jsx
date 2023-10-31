import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function Imc({ height, weight , imcCategory, idealWeight }) {
  const [loaded, error] = useFonts({
    sfProDisplayBold: require('../assets/fonts/SF-Pro-Display-Bold.ttf'),
    sfProTextRegular: require('../assets/fonts/sf-pro-text-regular.ttf'),
  });
  
  if (error) {
    console.log("Erro ao carregar a fonte: ", error);
  }

  const sfProDisplayBold = loaded ? 'sfProDisplayBold' : null;
  const sfProTextRegular = loaded ? 'sfProTextRegular' : null;

  const heightNumber = parseFloat(height);
  const weightNumber = parseFloat(weight);

  const replace = (number) => {
    return String(number).replace('.', ',');
  }

  return (
    <View>
      <Text style={[styles.titleText, { fontFamily: sfProDisplayBold }]}>IMC</Text>
      <View style={styles.imcContainer}>
        <View style={styles.imcTextContainer}>
          <Text style={[styles.imcText, { fontFamily: sfProTextRegular }]}>Altura: {replace(heightNumber.toFixed(2))} m</Text>
          <Text style={[styles.imcText, { fontFamily: sfProTextRegular }]}>Peso:   {replace(weightNumber.toFixed(2))} kg</Text>
        </View>
        <View style={[styles.imcTextContainer, { alignItems: 'center' }]}>
          <Text style={[styles.imcText, { fontFamily: sfProDisplayBold }]}>{ imcCategory }</Text>
          <View style={{alignItems: 'center'}}>
            <Text style={[styles.imcText, { fontFamily: sfProTextRegular }]}>Peso ideal:</Text>
            <Text style={[styles.imcText, { fontFamily: sfProTextRegular }]}>{ idealWeight }</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    paddingHorizontal: 20,
    fontSize: 23,
    color: '#E3ECF1'
  },
  imcContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: '#232325',
    height: 84,
    borderRadius: 10,
    // shadowRadius: 10,
    // shadowOffset: {width: 5, height: 5},
    // shadowOpacity: 0.1,
    // shadowColor: '#EDEDED'
  },
  imcTextContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  imcText: {
    color: '#EDEDED',
    paddingHorizontal: 10,
    fontSize: 14,
  }
});
