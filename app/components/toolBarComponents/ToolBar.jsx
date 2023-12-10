import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import getFont from '../../util/fonts';
import { AntDesign } from '@expo/vector-icons';

export default function ToolBar({ onPress, onPressBack, screenName, rightText, iconName }) {

    return (
        <View style={styles.toolBarContainer}>
            <TouchableOpacity style={styles.backButton} onPress={onPressBack}>
                <AntDesign name="left" size={24} color="#FAFAFA" style={{ marginTop: 55 }}/>
                <Text style={[styles.backText, { fontFamily: getFont('sfProTextRegular') }]}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.centerContainer}>
                <Text style={[styles.titleText, { fontFamily: getFont('sfProTextSemibold') }]}>{screenName}</Text>
            </View>
            <View>
                {rightText !== undefined && (
                    <TouchableOpacity onPress={onPress}>
                        <Text style={[styles.backText, { fontFamily: getFont('sfProTextRegular') }]}>{rightText}</Text>
                    </TouchableOpacity>
                )}
                {rightText === undefined && (
                    <TouchableOpacity onPress={onPress}>
                        <AntDesign name={iconName} size={24} color="#6EDEFD" style={{marginTop: 57}}/>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    toolBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    centerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
    },
    backButton: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
    },
    backText: {
        fontSize: 22,
        color: '#FAFAFA',
        marginTop: 55
    },
    titleText: {
        fontSize: 22,
        color: '#FAFAFA',
        marginTop: 55,
    },
});