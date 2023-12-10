import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import getFont from '../util/fonts';

export default function WorkoutButton({ takeRouter, trainingName, members }) {
  const noTraining = trainingName === "" || trainingName === undefined ? true : false;
  
  return (
    <View>
      {!noTraining && (
        <TouchableOpacity onPress={takeRouter} style={styles.workoutButton}>
          <Text style={[styles.workoutButtonText, { fontFamily: getFont('sfProTextSemibold'), color: '#EDEDED' }]}>{trainingName}</Text>

          {/* Aqui tem a tag <Link> que tem como objetivo de informar o proximo componente  */}
          <Text style={[styles.workoutButtonText,{ fontFamily: getFont('sfProTextSemibold'), color: '#BF5BF3' }]}>{members}</Text>


        </TouchableOpacity>
      )}

      {noTraining && (
        <View style={styles.noTraining}>
          <Text style={[styles.noTrainingText, {fontFamily: getFont('sfProTextSemibold')} ]}>SEM TREINO REGISTRADO</Text>
        </View>
      )}
    </View>
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
  },
  noTraining: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#232325',
    height: 66,
    borderRadius: 10,
  },
  noTrainingText: {
    color: 'gray',
    fontSize: 17,
  }
});