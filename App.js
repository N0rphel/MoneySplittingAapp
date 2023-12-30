import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeaderTop from './components/Header';
import ExpenditureCard from './components/ExpenditureCard';
import DebtOwnedCard from './components/DebtOwnedCard';
import ActivityList from './components/ActivityList';
import BotNavbar from './components/BottomNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderTop username='Norphel'/>
      <ExpenditureCard expense={2555}/>
      <DebtOwnedCard debt={1300} own={1800}/>
      <ActivityList/>
      <BotNavbar/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5FA',
    padding: 10,
    marginTop: 10,
  },
});
