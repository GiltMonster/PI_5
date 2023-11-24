import { View, StyleSheet, Text } from 'react-native';
import getFont from '../../util/fonts';

export default function SettingsTitle() {
    return (
        <View style={styles.settingsTitle}>
            <Text style={[styles.settingsTitleText, { fontFamily: getFont('sfProTextSemibold') }]}>Configurações</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    settingsTitle: {
        alignItems: 'center',
    },
    settingsTitleText: {
        fontSize: 20,
        color: '#A3A3A3',
        top: 50
    },
});