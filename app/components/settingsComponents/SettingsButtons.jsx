import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import getFont from '../../util/fonts';

export default function SettingsButtons({ onPress }) {
    return (
        <View style={styles.ButtonsContainer}>
            <View style={styles.line}></View>
            <TouchableOpacity onPress={onPress}>
                <Text style={[styles.ButtonsText, { fontFamily: getFont('sfProTextRegular') }]}>Privacidade e Termos de uso</Text>
            </TouchableOpacity>
            <View style={styles.line}></View>
            <TouchableOpacity onPress={onPress}>
                <Text style={[styles.ButtonsText, { fontFamily: getFont('sfProTextRegular') }]}>Sobre</Text>
            </TouchableOpacity>
            <View style={styles.line}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    ButtonsContainer: {
        top: 50
    },
    line: {
        backgroundColor: '#FAFAFA',
        height: 1,
        width: '100%',
    },
    ButtonsText: {
        fontSize: 17,
        color: '#A3A3A3',
        marginVertical: 20,
        marginLeft: 25
    }
});