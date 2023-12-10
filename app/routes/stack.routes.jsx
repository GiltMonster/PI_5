import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserProvider } from "../context/UserContext";
import Perfil from "../pages/Perfil";
import CriarTreino from "../pages/CriarTreino";
import Exercicios from "../pages/Exercicios";
import TelaTreinos from "../pages/TelaTreino";
import Home from "../pages/Home";
import CriarExercicio from "../pages/CriarExercicio";
import History from "../pages/History";
import Settings from "../pages/Settings";
import Meta from "../pages/Meta";
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import PrivacyAndTerms from "../pages/PrivacyAndTerms";
import About from "../pages/About";

// import { Ionicons } from '@expo/vector-icons';
// para ter acesso as bibliotecas de ícones, entrar no link: https://icons.expo.fyi/Index
//<Ionicons name="home" size={24} color={color} />



const { Screen, Navigator } = createNativeStackNavigator();

/**
 *  BASICAMENTE o mapeamento de stacks (paginas ou telas como queira chamar :v)
 *
 * @export Um contexto de rotas
 * @return {Navigator} 
 */
export default function StackRoutesLayout() {
    return (
        <UserProvider>
            <ActionSheetProvider>
                <Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                    <Screen name="home" component={Home} />
                    <Screen name="perfil" component={Perfil} />
                    <Screen name="treinos" component={TelaTreinos} />
                    <Screen name="criarTreino" component={CriarTreino} />
                    <Screen name="exercicios" component={Exercicios} />
                    <Screen name="criarExercicio" component={CriarExercicio} />
                    <Screen name="history" component={History} />
                    <Screen name="settings" component={Settings} />
                    <Screen name="meta" component={Meta} />
                    <Screen name="privacy&terms" component={PrivacyAndTerms} />
                    <Screen name="about" component={About} />
                </Navigator>
            </ActionSheetProvider>
        </UserProvider>
    );
}
