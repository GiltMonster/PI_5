import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import Header from '../components/Header';
import WorkoutButton from '../components/WorkoutButton';
import Imc from '../components/Imc';
import Goal from '../components/Goal';

export default function HomePage({ userName, onPress, trainingName, members, height, weight , imcCategory, idealWeight }) {
  const [loaded, error] = useFonts({
    sfProDisplayBold: require('../assets/fonts/sf-pro-display-bold.ttf'),
    sfProTextSemibold: require('../assets/fonts/sf-pro-text-semibold.ttf'),
    sfProTextRegular: require('../assets/fonts/sf-pro-text-regular.ttf'),
  });

  if (error) {
    console.log("Erro ao carregar a fonte: ", error);
  }

  const sfProDisplayBold = loaded ? 'sfProDisplayBold' : null;
  const sfProTextSemibold = loaded ? 'sfProTextSemibold' : null;
  const sfProTextRegular = loaded ? 'sfProTextRegular' : null;

  return (
    <View>
      <Header/>
      <Text style={[styles.homeText, { fontFamily: sfProDisplayBold }]}>Treino de hoje, {userName}</Text>
      <WorkoutButton onPress={onPress} trainingName={trainingName} members={members}/>
      <Imc height={height} weight={weight} imcCategory={imcCategory} idealWeight={idealWeight}/>
      <Text style={[styles.homeText, { fontFamily: sfProDisplayBold }]}>Meta</Text>
      <Goal currentWeight={75.53} targetWeight={65.00}/>
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