import { StyleSheet, View } from 'react-native';
import TabBarButton from './TabBarButton';

export default function TabBar({ takeRouter }) {
  return (
    <View style={styles.tabBarContainer}>
      <TabBarButton onPress={() => takeRouter("home")} iconName="home" text="Inicio" />
      <TabBarButton onPress={() => takeRouter("history")} iconName="list" text="Histórico" />
      <TabBarButton onPress={() => takeRouter("criarTreino")} iconName="add-circle-outline" text="Criar Treino" />
    </View>
  );
}
const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 5,
    backgroundColor: '#121213',
    height: 85
  },
});
