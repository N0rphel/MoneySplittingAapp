import React from 'react'
import { View, StyleSheet, Image} from 'react-native'
import ExpenditureCard from '../components/ExpenditureCard';
import HeaderTop from '../components/Header';
import DebtOwnedCard from '../components/DebtOwnedCard';
import ActivityList from '../components/ActivityList';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./../assets/komi.png')}
        style={styles.komi}
      />
      <HeaderTop username='Norphel'/>
      <ExpenditureCard expense={2555}/>
      <DebtOwnedCard debt={1300} own={1800}/>
      <ActivityList/>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5FA',
    padding: 10,
  },
  komi:{
    position:'absolute',
    opacity: 0.5,
    transform: [{translateX: 70}],
    marginTop: 20,
  }
});

export default HomeScreen