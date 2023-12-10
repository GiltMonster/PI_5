import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Rect, Line, Text as SvgText } from 'react-native-svg';
import replace from '../util/replace';
import getFont from '../util/fonts';

const Goal = ({ currentWeight, targetWeight, takeRouter, onUpdateWeight }) => {
  const heightContainer = currentWeight > targetWeight ? currentWeight + 50 : targetWeight + 50;
  const noGoal =
    currentWeight <= 0 ||
    currentWeight === undefined ||
    targetWeight <= 0 ||
    targetWeight === undefined
      ? true
      : false;

  const handleGoalPress = () => {
    console.log('Meta pressionada!');
    takeRouter('meta', { onUpdateWeight });
  };

  return (
    <TouchableOpacity onPress={handleGoalPress}>
      <View>
        {noGoal && (
          <View style={styles.noGoal}>
            <Text style={[styles.noGoalText, { fontFamily: getFont('sfProTextSemibold') }]}>
              SEM DADOS REGISTRADOS
            </Text>
          </View>
        )}

        {!noGoal && (
          <View style={styles.goalContainer}>
            <Svg width={300} height={heightContainer}>
              <Rect x={(300 - 33) / 2} y={heightContainer - currentWeight} width={33} height={currentWeight} fill={'#8CBECF'} />
              <Rect x={(300 - 33) / 2} y={heightContainer - targetWeight} width={33} height={targetWeight} fill={'#28A3CC'} />
              <Line x1={(333) / 2} y1={heightContainer - currentWeight} x2={0} y2={heightContainer - currentWeight} stroke="#E3ECF1" strokeWidth="1" />
              <Line x1={300} y1={heightContainer - targetWeight} x2={133} y2={heightContainer - targetWeight} stroke="#E3ECF1" strokeWidth="1" />
              <SvgText x={0} y={heightContainer - currentWeight - 5} fill="#E3ECF1" fontSize="13">
                Peso Atual: {replace(currentWeight)} Kg
              </SvgText>
              <SvgText x={225} y={heightContainer - targetWeight - 5} fill="#00E0FF" fontSize="13">
                Meta: {replace(targetWeight)} Kg
              </SvgText>
            </Svg>
            <View style={styles.line}></View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#121213',
    borderRadius: 10,
    paddingVertical: 10,
  },
  line: {
    backgroundColor: '#6A6767',
    height: 3,
    width: '90%',
    marginBottom: 10,
  },
  noGoal: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    backgroundColor: '#121213',
    borderRadius: 10,
    paddingVertical: 10,
    height: 150,
  },
  noGoalText: {
    color: 'gray',
    fontSize: 17,
  },
});

export default Goal;
