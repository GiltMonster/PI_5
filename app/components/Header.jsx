import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useFonts } from 'expo-font';
import img from '../assets/images/TelaInicial.png'

export default function Header({ onPress }) {
  const [loaded, error] = useFonts({
    sfProDisplayBold: require('../assets/fonts/SF-Pro-Display-Bold.ttf')
  });

  if (error) {
    console.log("Erro ao carregar a fonte: ", error);
  }

  const font = loaded ? 'sfProDisplayBold' : null;

  return (
    <View>
      <View style={styles.emptyView}></View>
      <Image
        source={img}
        style={styles.headerImage}
      />
      <View style={styles.headerContainer}>
        <Text style={[styles.headerText, { fontFamily: font }]}>FitTrack</Text>
        <TouchableOpacity onPress={() => onPress()}>
          <Icon name={'account-circle'} color='black' size={65}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyView: {
    backgroundColor: '#28A3CC',
    height: 20
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  headerText: {
    fontSize: 30,
    position: 'relative',
    top: 10
  },
  headerImage: {
    position: 'absolute',
    top: 10,
    left: 0,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});
