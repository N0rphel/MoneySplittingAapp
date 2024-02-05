import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

function ProfileScreen() {
  return (
    <View style={styles.container}>
       <Image 
        source={require('./../assets/komi.png')}
        style={styles.komi}
      />
        <Text>Profile</Text>
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
    opacity: 1,
    transform: [{translateX: 140}],
    marginTop: 20,
  }
});

export default ProfileScreen