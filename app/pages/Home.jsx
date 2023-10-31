import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Header from '../components/Header';
import WorkoutButton from '../components/WorkoutButton';
import Imc from '../components/Imc';

export default function Home({ userName, onPress, trainingName, members, height, weight , imcCategory, idealWeight }) {
  const [loaded, error] = useFonts({
    sfProDisplayBold: require('../assets/fonts/SF-Pro-Display-Bold.ttf')
  });

  if (error) {
    console.log("Erro ao carregar a fonte: ", error);
  }

  const font = loaded ? 'sfProDisplayBold' : null;

  return (
    <View>
      <Header/>
      <Text style={[styles.homeText, { fontFamily: font }]}>Treino de hoje, {userName}</Text>
      <WorkoutButton onPress={onPress} trainingName={trainingName} members={members}/>
      <Imc height={height} weight={weight} imcCategory={imcCategory} idealWeight={idealWeight}/>
    </View>
  );
}

const styles = StyleSheet.create({
  homeText: {
    marginTop: 15,
    paddingHorizontal: 20,
    fontSize: 23,
    color: '#E3ECF1'
  },
});