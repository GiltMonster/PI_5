import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CriarExercicio from "../pages/CriarExercicio";
import Home from "../pages/Home";
import Ionicons from 'react-native-vector-icons/Ionicons';


const { Screen, Navigator } = createBottomTabNavigator();

/**
 *  BASICAMENTE o mapeamento de stacks (paginas ou telas como queira chamar :v)
 *
 * @export Um contexto de rotas
 * @return {Navigator} 
 */
export default function TabRoutesLayout() {
    return (
        <Navigator initialRouteName='Home' screenOptions={
            ({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    size = 35;

                    if (route.name === 'home') {
                        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                    } else if (route.name === 'criarExecícios') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#28A3CC',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: styles.tab,
                headerStyle: {
                    backgroundColor: '#28A3CC',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            })}>
            <Screen name="home" component={Home} options={{
                headerTitle: 'FitTrack'
            }}/>
            <Screen name="criarExecícios" component={CriarExercicio} />
        </Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C1C1E',
    },
    tab: {
      backgroundColor: '#232325',
    }
  });
  
