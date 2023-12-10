import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import HeaderScreensNavigations from '../components/HeaderScreensNavigations';
import TextField from '../components/TextField';
import BackgroundContainer from '../components/BackgroundContainer';


const CriarExercicio = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [series, setSeries] = useState('');
    const [repeticoes, setRepeticoes] = useState('');
    const [carga, setCarga] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSalvar = () => {
        const exercicioSalvo = {
            nome,
            series,
            repeticoes,
            carga,
            descricao,
        };
        //banco
        navigation.navigate('exercicios', { exercicioSalvo });
    };

    return (
        <BackgroundContainer>
            <View>
                <HeaderScreensNavigations navigation={navigation} title="Criar Exercício" onSavePress={() => handleSalvar()} />
            </View>
                <TextField
                    label="Nome:"
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Digite o nome do exercício"
                />
                <TextField
                    label="Séries:"
                    value={series}
                    onChangeText={setSeries}
                    placeholder="Digite a quantidade de séries"
                    keyboardType="numeric"
                />

                <TextField
                    label="Repetições:"
                    value={repeticoes}
                    onChangeText={setRepeticoes}
                    placeholder="Digite a quantidade de repetições"
                    keyboardType="numeric"
                />

                <TextField
                    label="Carga (kg):"
                    value={carga}
                    onChangeText={setCarga}
                    placeholder="Digite a carga em kg"
                    keyboardType="numeric"
                />

                <TextField
                    label="Descrição:"
                    value={descricao}
                    onChangeText={setDescricao}
                    placeholder="Digite uma descrição"
                    multiline
                />
        </BackgroundContainer>
    );
};


export default CriarExercicio;
