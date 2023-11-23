import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabBar from '../components/TabBar';
import img from '../assets/images/perfil.png';
import PhotoProfile from '../components/profileComponents/PhotoProfile';
import UserDataProfile from '../components/profileComponents/UserDataProfile';

export default function Perfil({ onPress, userName, onChangeUserName, height, onChangeHeight, weight, onChangeWeight }) {
    return (
        <View style={styles.perfilContainer}>
            <View style={styles.content}>
                <SafeAreaView style={styles.content}>
                    <PhotoProfile onPress={onPress}/>
                    <UserDataProfile 
                        userName={userName} 
                        onChangeUserName={onChangeUserName} 
                        height={height} 
                        onChangeHeight={onChangeHeight} 
                        weight={weight} 
                        onChangeWeight={onChangeWeight}
                    />
                    <Image
                        source={img}
                        style={styles.perfilImage}
                    />
                </SafeAreaView>
            </View>
            <TabBar onPress={onPress} style={styles.tabBarStyle}/>
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
    perfilImage: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    tabBarStyle: {
        justifyContent: 'flex-end'
    }
});