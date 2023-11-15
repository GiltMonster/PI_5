import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Perfil from "../pages/Perfil";
import CriarTreino from "../pages/CriarTreino";
import Exercicios from "../pages/Execicíos";
import Treinos from "../pages/Treinos";

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
        <Navigator>
            <Screen name="perfil" component={Perfil} />
            <Screen name="treinos" component={Treinos} />
            <Screen name="criarTreino" component={CriarTreino} />
            <Screen name="exercicios" component={Exercicios} />
        </Navigator>
    );
}
