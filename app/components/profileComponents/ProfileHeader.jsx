import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import getFont from '../../util/fonts';
import { AntDesign } from '@expo/vector-icons';

export default function ProfileHeader({ onPress }) {
    return (
        <View style={styles.profileHeaderContainer}>
            <TouchableOpacity style={styles.profileButtonBack} onPress={onPress}>
                <AntDesign name="left" size={24} color="#007AFF" style={{ marginTop: 55 }}/>
                <Text style={[styles.profileBackText, { fontFamily: getFont('sfProTextRegular') }]}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.profileTitle}>
                <Text style={[styles.profileTitleText, { fontFamily: getFont('sfProTextSemibold') }]}>Perfil</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profileHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        left: -80
    },
    profileBackText: {
        fontSize: 17,
        color: '#007AFF',
        marginTop: 55
    },
    profileTitleText: {
        fontSize: 17,
        color: '#A3A3A3',
        marginTop: 55
    },
    profileTitle: {
        alignItems: 'center',
    },
    profileButtonBack: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});