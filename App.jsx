import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import Home from './app/pages/Home';
import { initDatabase } from "./app/services/initDB";

import Routes from './app/routes';

export default function App() {
  return (
    <Routes></Routes>
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
