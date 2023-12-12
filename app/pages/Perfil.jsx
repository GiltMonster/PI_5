import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabBar from '../components/tabBarComponents/TabBar';
import img from '../assets/images/perfil.png';
import PhotoProfile from '../components/profileComponents/PhotoProfile';
import UserDataProfile from '../components/profileComponents/UserDataProfile';
import ToolBar from '../components/toolBarComponents/ToolBar';
import { useState } from 'react';

import imgAvatar from '../assets/images/avatares/avt03.jpeg';

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

    const onChangeUserImage = (image) => {
        setUserImage(image);
    }

    const [userName, setUserName] = useState('');
    const [userImage, setUserImage] = useState(imgAvatar);
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();

    const [user, setUser] = useState({
        name: userName,
        image: undefined,
        height: height,
        weight: weight,
    });

    const info = () => {
        navigation.navigate('settings');
    }

    return (
        <View style={styles.perfilContainer}>
            <ToolBar onPress={info} onPressBack={navigation.goBack} screenName={"Perfil"} iconName={"infocirlceo"}/>
            <View style={styles.content}>
                <SafeAreaView style={styles.content}>
                    <PhotoProfile
                        onPress={onPress}
                        userImage={user.image}
                        setUserImage={onChangeUserImage}
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