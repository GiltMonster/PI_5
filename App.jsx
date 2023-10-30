import Home from './app/pages/Home';
import {useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import { initDatabase } from "./app/services/initDB";


export default function App() {
  return (
    <View>
      <Text>A</Text>
      <Text>A</Text>
      <Text>A</Text>
      <Text>A</Text>
      <Text>A</Text>
      <Text>A</Text>
      <Text>A</Text>
      <Button title='AAAAAAAAAAAAAAAAAAAA' onPress={() => {initDatabase()}}/>
    </View>
  );
}