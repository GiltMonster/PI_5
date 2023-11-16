import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Header from '../components/Header';
import WorkoutButton from '../components/WorkoutButton';
import Imc from '../components/Imc';

import { useState } from 'react';

export default function Home({navigation}) {
  const [userName, setUserName] = useState('Barbara');
  const [height, setHeight] = useState(1.10);
  const [weight, setWeight] = useState(43.00);
  const [imcCategory, setImcCategory] = useState("Peso Normal");
  const [idealWeight, setIdealWeight] = useState("41,63 Kg - 56,25 Kg");
  const [members, setMembers] = useState("Costas e Bíceps");
  const [trainingName, setTrainingName] = useState("Superior");

  const calculatesImc = (weight, height) => {
    const imcValue = weight / Math.pow(height,2)

    if (imcValue < 18.5) {
      setImcCategory("Abaixo do Peso");
    } else if (imcValue < 25) {
      setImcCategory("Peso Normal");
    } else if (imcValue < 30) {
      setImcCategory("Acima do Peso");
    } else if (imcValue >= 30){
      setImcCategory("Obesidade");
    } else {
      message = 'Os valores informados são inválidos!'
    }
  }

  const [loaded, error] = useFonts({
    sfProDisplayBold: require('../assets/fonts/SF-Pro-Display-Bold.ttf')
  });

  if (error) {
    console.log("Erro ao carregar a fonte: ", error);
  }

  const font = loaded ? 'sfProDisplayBold' : null;

  const criarExercicio = () => navigation.navigate("CriarExercicio")

  return (
    <View style={styles.container}>
      <Header/>
      <Text style={[styles.homeText, { fontFamily: font }]}>Treino de hoje, {userName}</Text>
      <WorkoutButton onPress={criarExercicio} trainingName={trainingName} members={members}/>
      <Imc height={height} weight={weight} imcCategory={imcCategory} idealWeight={idealWeight}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  homeText: {
    marginTop: 15,
    paddingHorizontal: 20,
    fontSize: 23,
    color: '#E3ECF1'
  },
});