import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import getFont from '../util/fonts';
import Header from '../components/Header';
import WorkoutButton from '../components/WorkoutButton';
import Imc from '../components/Imc';
import Goal from '../components/Goal';
import Summary from '../components/Summary';
import TabBar from '../components/tabBarComponents/TabBar';
import { getUser } from '../services/UserDB';
import { getTreinos } from '../services/TreinoDB';
import { obterTreinoMaisRecente } from '../util/data';

export default function HomePage({ takeRouter, navigation }) {
  const [treino, setTreino] = useState();

  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    getUser().then((res) => {
      if (!res) {
        console.log("deuRuim");
      } else {

        if (res.length > 0) {
          console.log(res[0]);
          setUser(res[0]);
          setUserName(res[0].nomeUsuario);
          setHeight(res[0].alturaUsuario);
          setWeight(res[0].pesoUsuario);
          setUserImage(res[0].avatarUsuario);
        }
      }
    });

    
  }, []);

  const homeText = userName === '' || userName === undefined ? '' : 'Treino de hoje,';

  return (
    <View style={styles.homePageContainer}>
      <View style={styles.headerView}>
        <Header takeRouter={() => takeRouter('perfil')} userImage={userImage} />
      </View>
      <ScrollView>
        <Text style={[styles.homeText, { fontFamily: getFont('sfProDisplayBold') }]}>
          {homeText} {userName}
        </Text>
        {/* <WorkoutButton takeRouter={takeRouter} trainingName={treino.name} members={treino.members === 's' ? 'Superior' : 'Inferior'} /> */}
        {/* <Imc height={height} weight={weight} /> */}
        <Text style={[styles.targetText, { fontFamily: getFont('sfProDisplayBold') }]}>Meta</Text>
        <Goal
          currentWeight={weight}
          targetWeight={80}
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