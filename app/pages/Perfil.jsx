import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PhotoProfile from '../components/profileComponents/PhotoProfile';
import ToolBar from '../components/toolBarComponents/ToolBar';
import { cadastroUsuario, getUser } from '../services/UserDB';
import { useEffect, useState } from 'react';
import getFont from '../util/fonts';
import replace from '../util/replace';


export default function Perfil({ navigation, onPress, takeRouter }) {

    const [userName, setUserName] = useState('');
    const [userImage, setUserImage] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        getUser().then((res) => {
            if (!res) {
                console.log("deuRuim");
            }else{

                setUser(res[0]);
                
                setUserName(res[0].nomeUsuario);
                setHeight(String(res[0].alturaUsuario));
                setWeight(String(res[0].pesoUsuario));
                
                if (res[0].avatarUsuario) {
                    onChangeUserImage(res[0].avatarUsuario);
                }
            }
        });

        
    }, []);


    const onSaveUserData = () => {
        const novoUsuario = {
            nome: userName,
            avatar: userImage,
            sexo: "m",
            peso: height,
            altura: weight,
            objetivo: "lka"
        };

        cadastroUsuario(novoUsuario).then((res) => {
            if (!res) {
                Alert.alert('Alguma coisa deu errado', 'Usuario não criado', ['ok']);
            } else {
                Alert.alert('Sucesso', "Usuario criado com sucesso", ['ok']);

            }
        });

    }


    const onChangeUserImage = (image) => {
        setUserImage(image);
        setUser((prevUser) => ({
            ...prevUser,
            image: image,
        }));
    }

    const info = () => {
        navigation.navigate('settings');
    }

    return (
        <View style={styles.perfilContainer}>
            <ToolBar onPress={info} onPressBack={navigation.goBack} screenName={"Perfil"} iconName={"infocirlceo"} />
            <View style={styles.content}>
                <SafeAreaView style={styles.content}>
                    <PhotoProfile
                        onPress={onPress}
                        userImage={user?.image}
                        setUserImage={onChangeUserImage}
                    />
                    <View>
                        <View style={styles.dataProfileContainer}>
                            <View style={styles.inputContainer}>
                                <Text style={[styles.inputText, { fontFamily: getFont('sfProTextSemibold') }]}>Nome:</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(text) => setUserName(text)}
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
                                    onChangeText={(text) => setHeight(text)}
                                    value={height}
                                    keyboardType="decimal-pad"
                                    placeholder='Digite sua altura'
                                    placeholderTextColor={'gray'}
                                />
                            </View>
                            <View style={styles.line}></View>
                            <View style={styles.inputContainer}>
                                <Text style={[styles.inputText, { fontFamily: getFont('sfProTextSemibold') }]}>Peso:</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(text) => setWeight(text)}
                                    value={weight}
                                    keyboardType="decimal-pad"
                                    placeholder='Digite seu peso'
                                    placeholderTextColor={'gray'}
                                />
                            </View>
                        </View>
                        {/* Botão de Salvar */}
                        <TouchableOpacity onPress={onSaveUserData} style={styles.saveButton}>
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <Image
                        source={img}
                        style={styles.perfilImage}
                    /> */}
                </SafeAreaView>
            </View>
            {/* <TabBar takeRouter={takeRouter} style={styles.tabBarStyle} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    perfilContainer: {
        flex: 1,
        backgroundColor: '#1C1C1E',
    },
    content: {
        flex: 1,
        backgroundColor: '#1C1C1E',
    },
    perfilImage: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    tabBarStyle: {
        justifyContent: 'flex-end'
    }, dataProfileContainer: {
        borderWidth: 2,
        borderRadius: 12,
        borderColor: '#FAFAFA',
        marginHorizontal: 10,
    },
    line: {
        backgroundColor: '#FAFAFA',
        height: 2,
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
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
        // borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    saveButton: {
        alignItems: 'center',
        marginTop: 25,
    },
    buttonText: {
        color: '#6EDEFD',
        fontSize: 17,
    },
});