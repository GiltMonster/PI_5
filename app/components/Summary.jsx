import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import getFont from '../util/fonts';

export default function Summary({ takeRouter }) {
  return (
    <View>
      <Text style={[styles.titleText, { fontFamily: getFont('sfProDisplayBold') }]}>Resumo</Text>
      <TouchableOpacity onPress={()=>{takeRouter("treinos")}} style={styles.summaryButton}>
        <Text style={[styles.summaryButtonText,{ fontFamily: getFont('sfProTextSemibold') }]}>Treinos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{takeRouter("meta")}} style={styles.summaryButton}>
        <Text style={[styles.summaryButtonText,{ fontFamily: getFont('sfProTextSemibold') }]}>Meta</Text>
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