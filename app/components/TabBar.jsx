import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import getFont from '../util/fonts';

export default function TabBar({ onPress }) {
  return (
    <View style={styles.tabBarContainer}>
        <View style={styles.tabBarItem}>
            <TouchableOpacity onPress={onPress}>
                <Icon name={'list'} color='lightgray' size={40}/>
                <Text style={[styles.tabBarText, { fontFamily: getFont('sfProTextRegular') }]}>Histórico</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.tabBarItem}>
            <TouchableOpacity onPress={onPress}>
                <Icon name={'add-circle-outline'} color='lightgray' size={40}/>
                <Text style={[styles.tabBarText, { fontFamily: getFont('sfProTextRegular') }]}>Criar Treino</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.tabBarItem}>
            <TouchableOpacity onPress={onPress}>
                <Icon name={'tune'} color='lightgray' size={40}/>
                <Text style={[styles.tabBarText, { fontFamily: getFont('sfProTextRegular') }]}>Configurações</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 5,
    backgroundColor: '#232325',
    height: 85
  },
  tabBarText: {
    fontSize: 11,
    position: 'relative',
    color: 'lightgray',
  },
  tabBarItem: {
    alignItems: 'center',
    width: 76,
  },
});
