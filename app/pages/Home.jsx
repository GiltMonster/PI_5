import { View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import HomePage from './HomePage';
import img from '../assets/images/avatar.jpg';
import Perfil from './Perfil';
import { calculatesImc } from '../util/calculatesImc';

export default function Home({navigation}) {
  const [userName, setUserName] = useState('Lukinhas');
  const [userImage, setUserImage] = useState(img);
  const [height, setHeight] = useState(1.69);
  const [weight, setWeight] = useState(85.00);
  const [imcCategory, setImcCategory] = useState("Peso Normal");
  const [idealWeight, setIdealWeight] = useState("41,63 Kg - 56,25 Kg");
  const [targetWeight, setTargetWeight] = useState(65.00);
  const [trainingName, setTrainingName] = useState('Costas e Bíceps');

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
    calculatesImc(weight, height, setImcCategory, setIdealWeight);
  }, [weight, height]);

  const onPress = () => {
    console.log('teste');
  }

  // const criarExercicio = () => navigation.navigate("CriarExercicio")

  return (
    <View style={styles.container}>
      <HomePage 
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
      />
      {/* <Perfil
        onPress={onPress} 
        userName={userName} 
        userImage={userImage}
        onChangeUserName={onChangeUserName} 
        height={height} 
        onChangeHeight={onChangeHeight} 
        weight={weight} 
        onChangeWeight={onChangeWeight}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
});