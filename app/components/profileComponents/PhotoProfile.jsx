import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import getFont from '../../util/fonts';

export default function PhotoProfile({ onPress, userImage }) {
    const avatar = userImage !== undefined ? true : false;

    return (
        <View>
            {!avatar && (
                <TouchableOpacity style={styles.userImageContainer} onPress={onPress}>
                    <FontAwesome name="user-circle" size={120} color="white" style={styles.userImage}/>
                    <Text style={[styles.editText, { fontFamily: getFont('sfProTextRegular') }]}>Editar Foto</Text>
                </TouchableOpacity>
            )}
            {avatar && (
                <TouchableOpacity style={styles.userImageContainer} onPress={onPress}>
                    <Image
                        source={userImage}
                        style={styles.avatar}
                    />
                    <Text style={[styles.editText, { fontFamily: getFont('sfProTextRegular') }]}>Editar Foto</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    userImageContainer: {
        alignItems: 'center',
        marginBottom: 45
    },
    userImage: {
        marginBottom: 15
    },
    editText: {
        color: '#6EDEFD',
        fontSize: 15
    },
    avatar: {
        height: 120,
        width: 120,
        borderRadius: 150/2,
        marginBottom: 15
    },
});