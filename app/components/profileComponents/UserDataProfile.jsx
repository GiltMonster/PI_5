import { View, StyleSheet, Text, TextInput } from 'react-native';
import getFont from '../../util/fonts';
import replace from '../../util/replace';

export default function UserDataProfile({ userName, onChangeUserName, height, onChangeHeight, weight, onChangeWeight }) {
    const profileHeight = height === 0 || height === undefined ? '' : replace(String(height))
    const profileWeight = weight === 0 || weight === undefined ? '' : replace(String(weight))

    return (
        <View>
            <View style={styles.line}></View>
            <View style={styles.inputContainer}>
                <Text style={[styles.inputText, { fontFamily: getFont('sfProTextRegular') }]}>Nome:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUserName}
                    value={userName}
                />
            </View>
            <View style={styles.lineCenter}></View>
            <View style={styles.inputContainer}>
                <Text style={[styles.inputText, { fontFamily: getFont('sfProTextRegular') }]}>Altura:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeHeight}
                    value={profileHeight}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.lineCenter}></View>
            <View style={styles.inputContainer}>
                <Text style={[styles.inputText, { fontFamily: getFont('sfProTextRegular') }]}>Peso:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeWeight}
                    value={profileWeight}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.line}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        backgroundColor: '#A3A3A3',
        height: 1,
        width: '100%',
    },
    lineCenter: {
        backgroundColor: '#A3A3A3',
        height: 1,
        width: '73%',
        alignSelf: 'flex-end'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputText: {
        color: '#A3A3A3',
        fontSize: 17,
        marginLeft: 20,
    },
    input: {
        height: 40,
        width: '70%',
        margin: 12,
        padding: 10,
        color: '#A3A3A3',
        fontSize: 20,
        // borderWidth: 1
    },
});