import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import Home from './app/pages/Home';
import {useEffect} from 'react';
import { initDatabase } from "./app/services/initDB";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CriarExercicio from './app/pages/CriarExercicio';

export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CriarExercicio" component={CriarExercicio}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
});
