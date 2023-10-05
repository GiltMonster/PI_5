import { View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { GlobalStyles } from "../style/GlobalStyle";

import Header from "../components/Header";
interface HomeProps {
  nome: String,
  id: number
};
export default function Home({ id, nome }: HomeProps) {
  return (
    <View style={GlobalStyles.container}>
      <Header></Header>
      <View style={GlobalStyles.container}>

        <View>
          <Text>teste {id}</Text>
        </View>
        
        <View>
          <Text>Ola {nome}</Text>
          <StatusBar style="auto" />
        </View>
      </View>

    </View>
  );
}