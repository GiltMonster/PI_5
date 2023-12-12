import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import getFont from '../util/fonts';
import Header from '../components/Header';
import WorkoutButton from '../components/WorkoutButton';
import Imc from '../components/Imc';
import Goal from '../components/Goal';
import Summary from '../components/Summary';
import TabBar from '../components/tabBarComponents/TabBar';

import img from '../assets/images/avatares/avt00.jpeg';

export default function HomePage({ takeRouter }) {
  const [treino, setTreino] = useState({
    name: '',
    members: '',
  });

  const [user, setUser] = useState({
    name: '',
    image: undefined,
    height: 0,
    weight: 0, 
    targetWeight: 0,
  });

  const homeText = user.name === '' || user.name === undefined ? '' : 'Treino de hoje,';

  return (
    <View style={styles.homePageContainer}>
      <View style={styles.headerView}>
        <Header takeRouter={() => takeRouter('perfil')} userImage={user.image} />
      </View>
      <ScrollView>
        <Text style={[styles.homeText, { fontFamily: getFont('sfProDisplayBold') }]}>
          {homeText} {user.name}
        </Text>
        <WorkoutButton takeRouter={takeRouter} trainingName={treino.name} members={treino.members === 's' ? 'Superior' : 'Inferior'} />
        <Imc height={user.height} weight={user.weight} />
        <Text style={[styles.targetText, { fontFamily: getFont('sfProDisplayBold') }]}>Meta</Text>
        <Goal
        currentWeight={user.weight}
        targetWeight={user.targetWeight}
        takeRouter={takeRouter}
      />
        <Summary takeRouter={takeRouter} />
      </ScrollView>
      <TabBar takeRouter={takeRouter} style={styles.tabBarStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  homePageContainer: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  homeText: {
    marginTop: 15,
    paddingHorizontal: 20,
    fontSize: 23,
    color: '#E3ECF1'
  },
  targetText: {
    marginBottom: 10,
    paddingHorizontal: 20,
    fontSize: 23,
    color: '#E3ECF1'
  },
  headerView: {
    height: 100, 
    zIndex: 1
  },
  tabBarStyle: {
    justifyContent: 'flex-end'
  }
});