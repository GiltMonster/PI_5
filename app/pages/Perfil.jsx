import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import getFont from '../util/fonts';
import TabBar from '../components/TabBar';
import img from '../assets/images/perfil.png';

export default function Perfil({ onPress, userName, onChangeUserName, height, onChangeHeight, weight, onChangeweight }) {
    return (
        <View style={styles.perfilContainer}>
            <View style={styles.content}>
                <SafeAreaView style={styles.content}>
                    <TouchableOpacity style={styles.userImage} onPress={onPress}>
                        <Icon 
                        name={'account-circle'}  
                        color='white' 
                        size={165} 
                        />
                        <Text style={[styles.editText, { fontFamily: getFont('sfProTextRegular') }]}>Editar Foto</Text>
                    </TouchableOpacity>
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
                                value={height}
                            />
                        </View>
                        <View style={styles.lineCenter}></View>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.inputText, { fontFamily: getFont('sfProTextRegular') }]}>Peso:</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeweight}
                                value={weight}
                            />
                        </View>
                        <View style={styles.line}></View>
                    </View>
                    <Image
                        source={img}
                        style={styles.perfilImage}
                    />
                </SafeAreaView>
            </View>
            <View>
            <TabBar onPress={onPress} style={styles.tabBarStyle}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    perfilContainer: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    userImage: {
        alignItems: 'center',
        marginVertical: 50
    },
    editText: {
        color: '#007AFF',
        fontSize: 16
    },
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
    perfilImage: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    tabBarStyle: {
        justifyContent: 'flex-end'
    }
});