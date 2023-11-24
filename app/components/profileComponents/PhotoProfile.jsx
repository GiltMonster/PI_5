import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import getFont from '../../util/fonts';

export default function PhotoProfile({ onPress, userImage }) {
    const avatar = userImage !== undefined ? true : false;

    return (
        <View>
            {!avatar && (
                <TouchableOpacity style={styles.userImage} onPress={onPress}>
                    <Icon 
                        name={'account-circle'}  
                        color='white' 
                        size={165} 
                    />
                    <Text style={[styles.editText, { fontFamily: getFont('sfProTextRegular') }]}>Editar Foto</Text>
                </TouchableOpacity>
            )}
            {avatar && (
                <TouchableOpacity style={styles.userImage} onPress={onPress}>
                    <Image
                        // source={{uri: userImage}}
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
    userImage: {
        alignItems: 'center',
        marginVertical: 50
    },
    editText: {
        color: '#007AFF',
        fontSize: 16
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 150/2,
        marginBottom: 15
    },
});