import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import ReceiptCard from '../components/ReceiptCard';
import NameCard from '../components/NameCard';

function SplitScreen() {
  return (
    <View style={styles.container}>
        <Image 
          source={require('./../assets/komi.png')}
          style={styles.komi}
        />
        <ReceiptCard/>
        <NameCard personName={'Norphel'}/>
        <NameCard personName={'Jimpa'}/>
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
    transform: [{translateX: 110}],
    marginTop: 20,
  }
});

export default SplitScreen