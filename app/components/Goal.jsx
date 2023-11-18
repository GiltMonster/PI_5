import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Rect, Line, Text } from 'react-native-svg';
import replace from '../util/replace';

export default function Goal({ currentWeight, targetWeight }) {
  return (
    <View style={styles.goalContainer}>
      <Svg width={300} height={150}>
        <Rect
          x={(300 - 33) / 2}
          y={150 - 100}
          width={33}
          height={100}
          fill={'#8CBECF'}
        />
        <Rect
          x={(300 - 33) / 2}
          y={150 - 75}
          width={33}
          height={75}
          fill={'#28A3CC'}
        />
        <Line
          x1={(333) / 2}
          y1={150 - 100}
          x2={10}
          y2={150 - 100}
          stroke="#E3ECF1"
          strokeWidth="1"
        />
        <Line
          x1={300 - 10}
          y1={150 - 75}
          x2={133}
          y2={150 - 75}
          stroke="#E3ECF1"
          strokeWidth="1"
        />
        <Text
          x={10} 
          y={150 - 100 - 5} 
          fill="#E3ECF1"
          fontSize="13"
        >
          Peso Atual: {replace(currentWeight)}
        </Text>
        <Text
          x={215} 
          y={150 - 75 - 5} 
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
    marginVertical: 15,
    backgroundColor: '#232325',
    borderRadius: 10,
  },
  line: {
    backgroundColor: '#6A6767',
    height: 3,
    width: '90%',
    marginBottom: 10
  },
});
