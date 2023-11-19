import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import getFont from '../util/fonts';

export default function WorkoutButton({ onPress, trainingName, members }) {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.workoutButton}>
      <Text style={[styles.workoutButtonText, { fontFamily: getFont('sfProTextSemibold'), color: '#EDEDED' }]}>{trainingName}</Text>

      {/* Aqui tem a tag <Link> que tem como objetivo de informar o proximo componente  */}
      <Text style={[styles.workoutButtonText,{ fontFamily: getFont('sfProTextSemibold'), color: '#BF5BF3' }]}>{members}</Text>


    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  workoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#232325',
    height: 66,
    borderRadius: 10,
  },
  workoutButtonText: {
    color: 'white',
    paddingHorizontal: 20,
    fontSize: 17
  }
});