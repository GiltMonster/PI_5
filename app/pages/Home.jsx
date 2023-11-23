import { View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import HomePage from './HomePage';
import replace from '../util/replace';
import img from '../assets/images/avatar.jpg';
import Perfil from './Perfil';

export default function Home({navigation}) {
  const [userName, setUserName] = useState('Lukinhas');
  const [userImage, setUserImage] = useState(img);
  const [height, setHeight] = useState(1.69);
  const [weight, setWeight] = useState(85.00);
  const [imcCategory, setImcCategory] = useState("Peso Normal");
  const [idealWeight, setIdealWeight] = useState("41,63 Kg - 56,25 Kg");
  const [targetWeight, setTargetWeight] = useState(65.00);
  const [trainingName, setTrainingName] = useState('Costas e Bíceps');

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

  const onChangeUserName = (name) => {
    setUserName(name);
  }

  const onChangeHeight = (height) => {
    setHeight(height);
  }

  const onChangeWeight = (weight) => {
    setWeight(weight);
  }

  useEffect(() => {
    calculatesImc(weight, height);
  }, [weight, height]);

  const onPress = () => {
    console.log('teste');
  }

  // const criarExercicio = () => navigation.navigate("CriarExercicio")

  return (
    <View style={styles.container}>
      {/* <HomePage 
        onPress={onPress}
        userName={userName}
        userImage={userImage}
        trainingName={trainingName} 
        members={'Superior'}
        height={height}
        weight={weight}
        imcCategory={imcCategory}
        idealWeight={idealWeight}
        targetWeight={targetWeight}
      /> */}
      <Perfil
        onPress={onPress} 
        userName={userName} 
        userImage={userImage}
        onChangeUserName={onChangeUserName} 
        height={height} 
        onChangeHeight={onChangeHeight} 
        weight={weight} 
        onChangeWeight={onChangeWeight}
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