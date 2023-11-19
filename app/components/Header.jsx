import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import getFont from '../util/fonts';
import img from '../assets/images/TelaInicial.png'

export default function Header({ onPress }) {
  return (
    <View style={styles.headerContainer}>
      {/* <View style={styles.emptyView}></View> */}
      <Image
        source={img}
        style={styles.headerImage}
      />
      <View style={styles.headerContent}>
        <Text style={[styles.headerText, { fontFamily: getFont('sfProDisplayBold') }]}>FitTrack</Text>
        <TouchableOpacity style={styles.userButton} onPress={() => onPress()}>
          <Icon 
            name={'account-circle'}  
            color='black' 
            size={65} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyView: {
    backgroundColor: '#28A3CC',
    height: 10
  },
  headerContainer: {
    height: 115,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  headerText: {
    fontSize: 30,
    position: 'relative',
    top: 23
  },
  headerImage: {
    position: 'absolute',
    // top: 10,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  userButton: {
    top: 11,
  }
});
