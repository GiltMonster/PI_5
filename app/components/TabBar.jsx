import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import getFont from '../util/fonts';

export default function TabBar({ onPress }) {
  return (
    <View style={styles.tabBarContainer}>
        <View>
            <TouchableOpacity onPress={() => onPress()}>
                <Icon name={'fitness-center'} color='black' size={40}/>
            </TouchableOpacity>
            <Text style={[styles.tabBarText, { fontFamily: getFont('sfProTextRegular') }]}>Histórico</Text>
        </View>
        <View>
            <TouchableOpacity onPress={() => onPress()}>
                <Icon name={'add-circle-outline'} color='black' size={40}/>
            </TouchableOpacity>
            <Text style={[styles.tabBarText, { fontFamily: getFont('sfProTextRegular') }]}>Criar Treino</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingTop: 5,
    backgroundColor: '#232325',
    height: 90
  },
  tabBarText: {
    fontSize: 13,
    position: 'relative',
    color: 'lightgray',
  },
});
