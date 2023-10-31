import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import Home from './app/pages/Home';

export default function App() {
  const [userName, setUserName] = useState('Barbara');
  const [height, setHeight] = useState(1.10);
  const [weight, setWeight] = useState(43.00);
  const [imcCategory, setImcCategory] = useState("Peso Normal");
  const [idealWeight, setIdealWeight] = useState("41,63 Kg - 56,25 Kg");

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

  const onPress = () => {

  }

  return (
    <View style={styles.container}>
      <Home 
        onPress={onPress}
        userName={userName} 
        trainingName={'Costas e Bíceps'} 
        members={'Superior'}
        height={height}
        weight={weight}
        imcCategory={imcCategory}
        idealWeight={idealWeight}
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
