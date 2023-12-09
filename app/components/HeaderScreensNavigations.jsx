import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const HeaderScreensNavigations = ({ navigation, title, onSavePress }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} padding={9} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.header}>{title}</Text>
      {onSavePress && (
        <TouchableOpacity style={{ backgroundColor: '#1C1C1E', borderRadius: 5 }} onPress={onSavePress}>
          <Text style={{ color: '#6EDEFD', fontSize: 17 }}>Salvar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = {
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 45,
    marginTop: 60,
  },
  header: {
    fontWeight: 'bold',
    padding: 10,
    fontSize: 18,
    color: '#fff',
  },
};

export default HeaderScreensNavigations;
