import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabBar from '../components/TabBar';
import img from '../assets/images/perfil.png';
import PhotoProfile from '../components/profileComponents/PhotoProfile';
import UserDataProfile from '../components/profileComponents/UserDataProfile';
import ProfileHeader from '../components/profileComponents/ProfileHeader';
import { useState } from 'react';

import imgAvatar from '../assets/images/avatar.jpg';

export default function Perfil({ navigation, onPress, takeRouter }) {

    const onChangeUserName = (name) => {
        setUserName(name);
    }

    const onChangeHeight = (height) => {
        setHeight(height);
    }

    const onChangeWeight = (weight) => {
        setWeight(weight);
    }

    const [userName, setUserName] = useState('Lukinhas');
    const [userImage, setUserImage] = useState(imgAvatar);
    const [height, setHeight] = useState(1.69);
    const [weight, setWeight] = useState(85.00);

    const [user, setUser] = useState({
        name: userName,
        image: undefined,
        height: height,
        weight: weight,
    });

    return (
        <View style={styles.perfilContainer}>
            <ProfileHeader onPress={navigation.goBack}/>
            <View style={styles.content}>
                <SafeAreaView style={styles.content}>
                    <PhotoProfile
                        onPress={onPress}
                        userImage={user.image}
                    />
                    <UserDataProfile
                        userName={user.name}
                        onChangeUserName={onChangeUserName}
                        height={user.height}
                        onChangeHeight={onChangeHeight}
                        weight={user.weight}
                        onChangeWeight={onChangeWeight}
                    />
                    <Image
                        source={img}
                        style={styles.perfilImage}
                    />
                </SafeAreaView>
            </View>
            <TabBar takeRouter={takeRouter} style={styles.tabBarStyle} />
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
    },
});