import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabBar from '../components/TabBar';
import img from '../assets/images/perfil.png';
import SettingsTitle from '../components/settingsComponents/SettingsTitle';
import SettingsButtons from '../components/settingsComponents/SettingsButtons';

export default function Settings({ onPress }) {
    return (
        <View style={styles.settingsContainer}>
            <View style={styles.content}>
                <SettingsTitle/>
                <SafeAreaView style={styles.content}>
                    <SettingsButtons onPress={onPress}/>
                    <Image
                        source={img}
                        style={styles.settingsImage}
                    />
                </SafeAreaView>
            </View>
            <TabBar onPress={onPress} style={styles.tabBarStyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    settingsContainer: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    settingsImage: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    tabBarStyle: {
        justifyContent: 'flex-end'
    },
});