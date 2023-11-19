import { View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import HomePage from './HomePage';
import replace from '../util/replace';

export default function Home({navigation}) {
  const [userName, setUserName] = useState('Lukinhas');
  const [height, setHeight] = useState(1.69);
  const [weight, setWeight] = useState(85.00);
  const [imcCategory, setImcCategory] = useState("Peso Normal");
  const [idealWeight, setIdealWeight] = useState("41,63 Kg - 56,25 Kg");
  const [targetWeight, setTargetWeight] = useState(65.00);
  const [trainingName, setTrainingName] = useState('');

  const calculatesImc = (weight, height) => {
    const imcValue = weight / Math.pow(height,2);
    const maxIdealWeight = 25 * Math.pow(height,2);
    const minIdealWeight = 18.5 * Math.pow(height,2);
    
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

    setIdealWeight(`${replace(minIdealWeight.toFixed(2))} Kg - ${replace(maxIdealWeight.toFixed(2))} Kg`)
  }

  useEffect(() => {
    calculatesImc(weight, height);
  }, [weight, height]);

  const onPress = () => {

  }

  // const criarExercicio = () => navigation.navigate("CriarExercicio")

  return (
    <View style={styles.container}>
      <HomePage 
        onPress={onPress}
        userName={userName} 
        trainingName={trainingName} 
        members={'Superior'}
        height={height}
        weight={weight}
        imcCategory={imcCategory}
        idealWeight={idealWeight}
        targetWeight={targetWeight}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
});