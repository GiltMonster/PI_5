import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useFonts } from 'expo-font';

export default function TabBar({ onPress }) {
  const [loaded, error] = useFonts({
    sfProTextRegular: require('../assets/fonts/sf-pro-text-regular.ttf')
  });

  if (error) {
    console.log("Erro ao carregar a fonte: ", error);
  }

  const sfProTextRegular = loaded ? 'sfProTextRegular' : null;

  return (
    <View style={styles.headerContainer}>
        <View>
            <TouchableOpacity onPress={() => onPress()}>
                <Icon name={'fitness-center'} color='black' size={40}/>
            </TouchableOpacity>
            <Text style={[styles.headerText, { fontFamily: sfProTextRegular }]}>Histórico</Text>
        </View>
        <View>
            <TouchableOpacity onPress={() => onPress()}>
                <Icon name={'add-circle-outline'} color='black' size={40}/>
            </TouchableOpacity>
            <Text style={[styles.headerText, { fontFamily: sfProTextRegular }]}>Criar Treino</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingTop: 5,
    backgroundColor: '#232325',
    height: 83
  },
  headerText: {
    fontSize: 13,
    position: 'relative',
    color: 'lightgray',
  },
});
