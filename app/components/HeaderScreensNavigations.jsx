import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-elements/dist/helpers';
import { colors } from 'react-native-elements';

const HeaderScreensNavigations = ({ title, onSavePress, onAddPress }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back" size={28} padding={9} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.header}>{title}</Text>
            <View style={styles.rightButtons}>
                {onSavePress && (
                    <TouchableOpacity style={styles.button} onPress={onSavePress}>
                        <Text style={{ color: '#6EDEFD', fontSize: 17 }}>Salvar</Text>
                    </TouchableOpacity>
                )}
                {onAddPress && (
                    <TouchableOpacity style={styles.button} onPress={onAddPress}>
                        <MaterialIcons name="add" size={30} color="#6EDEFD" padding={10} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = {
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 55,
    },
    header: {
        fontWeight: 'bold',
        padding: 10,
        fontSize: 18,
        color: '#fff',
    },
};

export default HeaderScreensNavigations;
