import { View, Text, SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { GlobalStyles } from "../style/GlobalStyle";

import Header from "../components/Header";

export default function Home() {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Header></Header>
      <View style={GlobalStyles.container}>

        <View>
          <Text>teste </Text>
        </View>
        
        <View>
          <Text>Ola </Text>
          <StatusBar style="auto" />
        </View>
      </View>

    </SafeAreaView>
  );
}