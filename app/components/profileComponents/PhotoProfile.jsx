import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import getFont from '../../util/fonts';

export default function PhotoProfile({ onPress }) {
    return (
        <TouchableOpacity style={styles.userImage} onPress={onPress}>
            <Icon 
                name={'account-circle'}  
                color='white' 
                size={165} 
            />
            <Text style={[styles.editText, { fontFamily: getFont('sfProTextRegular') }]}>Editar Foto</Text>
        </TouchableOpacity>
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
});