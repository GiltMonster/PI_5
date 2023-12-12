import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import getFont from '../../util/fonts';
import PhotoList from './PhotoList';
import avatarImages from '../../util/avatarImages';

export default function PhotoProfile({ onPress, userImage, setUserImage }) {
    const [showPhotoList, setShowPhotoList] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const getImageFromIndex = (index) => {
        const keys = Object.keys(avatarImages);
        const selectedKey = keys[index];
        return avatarImages[selectedKey];
    };

    const handlePhotoSelection = (index) => {
        setSelectedImage(index);
        setShowPhotoList(false);
        
        setUserImage(getImageFromIndex(index)); 
    };

    const handleAvatarPress = () => {
        setShowPhotoList(!showPhotoList);
    };

    const margin = showPhotoList ? 10 : 45;

    return (
        <View>
            {!userImage && (
                <TouchableOpacity style={[styles.userImageContainer, { marginBottom: margin }]} onPress={handleAvatarPress}>
                    <FontAwesome name="user-circle" size={120} color="white" style={styles.userImage}/>
                    <Text style={[styles.editText, { fontFamily: getFont('sfProTextRegular') }]}>Editar Foto</Text>
                </TouchableOpacity>
            )}
            {userImage && (
                <TouchableOpacity style={styles.userImageContainer} onPress={handleAvatarPress}>
                    <Image
                        source={userImage}
                        style={styles.avatar}
                    />
                    <Text style={[styles.editText, { fontFamily: getFont('sfProTextRegular') }]}>Editar Foto</Text>
                </TouchableOpacity>
            )}

            {showPhotoList && (
                <PhotoList
                    imageIndex={selectedImage} // Passando o índice da imagem selecionada
                    setImageIndex={handlePhotoSelection} // Passando a função para selecionar a imagem
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    userImageContainer: {
        alignItems: 'center',
        // marginBottom: 45
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