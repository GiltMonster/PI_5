import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

export default function WorkoutButton({ onPress, trainingName, members }) {
  const [loaded, error] = useFonts({
    sfProTextSemibold: require('../assets/fonts/sf-pro-text-semibold.ttf'),
  });

  if (error) {
    console.log("Erro ao carregar a fonte: ", error);
  }

  const font = loaded ? 'sfProTextSemibold' : null;

  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.workoutButton}>
      <Text style={[styles.workoutButtonText, { fontFamily: font, color: '#EDEDED' }]}>{trainingName}</Text>

      {/* Aqui tem a tag <Link> que tem como objetivo de informar o proximo componente  */}
      <Text style={[styles.workoutButtonText,{ fontFamily: font, color: '#BF5BF3' }]}>{members}</Text>


    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  workoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 15,
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