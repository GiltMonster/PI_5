import { View, Text, StyleSheet, ScrollView } from 'react-native';
import getFont from '../util/fonts';
import Header from '../components/Header';
import WorkoutButton from '../components/WorkoutButton';
import Imc from '../components/Imc';
import Goal from '../components/Goal';
import Summary from '../components/Summary';
import TabBar from '../components/TabBar';

export default function HomePage({ userName, userImage, onPress, trainingName, members, height, weight , imcCategory, idealWeight, targetWeight }) {
  const homeText = userName === '' ? '' : 'Treino de hoje,';

  return (
    <View style={styles.homePageContainer}>
      <View style={styles.headerView}>
        <Header onPress={onPress} userImage={userImage}/>
      </View>
      <ScrollView>
        <Text style={[styles.homeText, { fontFamily: getFont('sfProDisplayBold') }]}>{homeText} {userName}</Text>
        <WorkoutButton onPress={onPress} trainingName={trainingName} members={members}/>
        <Imc height={height} weight={weight} imcCategory={imcCategory} idealWeight={idealWeight}/>
        <Text style={[styles.targetText, { fontFamily: getFont('sfProDisplayBold') }]}>Meta</Text>
        <Goal currentWeight={weight} targetWeight={targetWeight}/>
        <Summary onPress={onPress}/>
      </ScrollView>
      <TabBar onPress={onPress} style={styles.tabBarStyle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  homePageContainer: {
    flex: 1,
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