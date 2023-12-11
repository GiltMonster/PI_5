import { View, StyleSheet, Text, TextInput } from 'react-native';
import getFont from '../../util/fonts';
import replace from '../../util/replace';

export default function UserDataProfile({ userName, onChangeUserName, height, onChangeHeight, weight, onChangeWeight }) {
    const profileHeight = height === 0 || height === undefined ? '' : replace(String(height))
    const profileWeight = weight === 0 || weight === undefined ? '' : replace(String(weight))

    return (
        <View style={styles.dataProfileContainer}>
            <View style={styles.inputContainer}>
                <Text style={[styles.inputText, { fontFamily: getFont('sfProTextSemibold') }]}>Nome:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUserName}
                    value={userName}
                    placeholder='Digite seu nome'
                    placeholderTextColor={'gray'}
                />
            </View>
            <View style={styles.line}></View>
            <View style={styles.inputContainer}>
                <Text style={[styles.inputText, { fontFamily: getFont('sfProTextSemibold') }]}>Altura:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeHeight}
                    value={profileHeight}
                    keyboardType="numeric"
                    placeholder='Digite sua altura'
                    placeholderTextColor={'gray'}
                />
            </View>
            <View style={styles.line}></View>
            <View style={styles.inputContainer}>
                <Text style={[styles.inputText, { fontFamily: getFont('sfProTextSemibold') }]}>Peso:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeWeight}
                    value={profileWeight}
                    keyboardType="numeric"
                    placeholder='Digite seu peso'
                    placeholderTextColor={'gray'}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dataProfileContainer: {
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#FAFAFA',
        marginHorizontal: 10
    },
    line: {
        backgroundColor: '#FAFAFA',
        height: 2,
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputText: {
        color: '#FAFAFA',
        fontSize: 17,
        marginLeft: 20,
    },
    input: {
        height: 35,
        width: '75%',
        margin: 12,
        padding: 10,
        color: '#FAFAFA',
        fontSize: 17,
        // borderWidth: 1
    },
});