import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
// para ter acesso as bibliotecas de ícones, entrar no link: https://icons.expo.fyi/Index

export default function TabRoutesLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false}}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({size, color}) => <Ionicons name="home" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({size, color}) => <EvilIcons name="user" size={34} color={color} />
                }}
            />
        </Tabs>
    )
}
