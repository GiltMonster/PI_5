import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import getFont from '../../util/fonts';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

export default function TabBarButton ({ onPress, iconName, text }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.tabBarButton}>
          {(iconName !== 'home' &&
            <MaterialIcons name={iconName} size={40} color="lightgray"/>
          )}
          {(iconName === 'home' &&
            <AntDesign name={iconName} size={40} color="lightgray"/>
          )}
          <Text style={[styles.tabBarButtonText, { fontFamily: getFont('sfProTextRegular') }]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tabBarButtonText: {
      fontSize: 11,
      position: 'relative',
      color: 'lightgray',
    },
    tabBarButton: {
      alignItems: 'center',
      width: 76,
    },
});