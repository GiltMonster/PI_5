import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Rect, Line, Text } from 'react-native-svg';
import replace from '../util/replace';

export default function Goal({ currentWeight, targetWeight }) {
    const weightDifference = (currentWeight - targetWeight);
    const heightContainer = currentWeight > targetWeight ? currentWeight+50 : targetWeight+50;

  return (
    <View style={styles.goalContainer}>
      <Svg width={300} height={heightContainer}>
        <Rect
          x={(300 - 33) / 2}
          y={heightContainer - currentWeight}
          width={33}
          height={currentWeight}
          fill={'#8CBECF'}
        />
        <Rect
          x={(300 - 33) / 2}
          y={heightContainer - targetWeight}
          width={33}
          height={targetWeight}
          fill={'#28A3CC'}
        />
        <Line
          x1={(333) / 2}
          y1={heightContainer - currentWeight}
          x2={0}
          y2={heightContainer - currentWeight}
          stroke="#E3ECF1"
          strokeWidth="1"
        />
        <Line
          x1={300}
          y1={heightContainer - targetWeight}
          x2={133}
          y2={heightContainer - targetWeight}
          stroke="#E3ECF1"
          strokeWidth="1"
        />
        <Text
          x={0} 
          y={heightContainer - currentWeight - 5} 
          fill="#E3ECF1"
          fontSize="13"
        >
          Peso Atual: {replace(currentWeight)} Kg
        </Text>
        <Text
          x={225} 
          y={heightContainer - targetWeight - 5} 
          fill="#00E0FF"
          fontSize="13"
        >
          Meta: {replace(targetWeight)} Kg
        </Text>
      </Svg>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#232325',
    borderRadius: 10,
    paddingVertical: 10
  },
  line: {
    backgroundColor: '#6A6767',
    height: 3,
    width: '90%',
    marginBottom: 10
  },
});
