import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import getFont from '../util/fonts';
import img from '../assets/images/TelaInicial.png';
import { FontAwesome } from '@expo/vector-icons';

export default function Header({ takeRouter, userImage }) {
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
          <TouchableOpacity style={styles.userButton} onPress={takeRouter}>
            <FontAwesome name="user-circle" size={55} color="black" />
          </TouchableOpacity>
        )}
        {avatar && (
          <TouchableOpacity style={styles.userImageButton} onPress={takeRouter}>
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
    top: 15,
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
