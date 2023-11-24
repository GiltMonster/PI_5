import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import getFont from '../util/fonts';
import img from '../assets/images/TelaInicial.png';

export default function Header({ onPress, userImage }) {
  const avatar = userImage !== undefined ? true : false;
  
  return (
    <View style={styles.headerContainer}>
      <Image
        source={img}
        style={styles.headerImage}
      />
      <View style={styles.headerContent}>
        <Text style={[styles.headerText, { fontFamily: getFont('sfProDisplayBold') }]}>FitTrack</Text>
        {!avatar && (
          <TouchableOpacity style={styles.userButton} onPress={onPress}>
            <Icon 
              name={'account-circle'}  
              color='black' 
              size={65} 
            />
          </TouchableOpacity>
        )}
        {avatar && (
          <TouchableOpacity style={styles.userImageButton} onPress={onPress}>
            <Image
              source={userImage}
              style={styles.avatar}
            />
          </TouchableOpacity>
        )}
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
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  userButton: {
    top: 11,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 60/2
  },
  userImageButton: {
    top: 13,
    right: 5
  }
});
