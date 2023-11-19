import { View, Text, StyleSheet } from 'react-native';
import getFont from '../util/fonts';

export default function Imc({ height, weight , imcCategory, idealWeight }) {
  const heightNumber = parseFloat(height);
  const weightNumber = parseFloat(weight);

  const replace = (number) => {
    return String(number).replace('.', ',');
  }

  return (
    <View>
      <Text style={[styles.titleText, { fontFamily: getFont('sfProDisplayBold') }]}>IMC</Text>
      <View style={styles.imcContainer}>
        <View style={styles.imcTextContainer}>
          <Text style={[styles.imcText, { fontFamily: getFont('sfProTextRegular') }]}>Altura: {replace(heightNumber.toFixed(2))} m</Text>
          <Text style={[styles.imcText, { fontFamily: getFont('sfProTextRegular') }]}>Peso:   {replace(weightNumber.toFixed(2))} kg</Text>
        </View>
        <View style={[styles.imcTextContainer, { alignItems: 'center' }]}>
          <Text style={[styles.imcText, { fontFamily: getFont('sfProDisplayBold') }]}>{ imcCategory }</Text>
          <View style={{alignItems: 'center'}}>
            <Text style={[styles.imcText, { fontFamily: getFont('sfProTextRegular') }]}>Peso ideal:</Text>
            <Text style={[styles.imcText, { fontFamily: getFont('sfProTextRegular') }]}>{ idealWeight }</Text>
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
    marginVertical: 10,
    backgroundColor: '#232325',
    height: 84,
    borderRadius: 10,
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
