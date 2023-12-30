import React from 'react';
import { View,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming Ionicons is installed

function BotNavbar() {
  return (
    <View style={styles.container}>
      <Icon name="home-outline" size={35} color="black" />
      <Icon name="home-outline" size={35} color="black" />
      <Icon name="home-outline" size={35} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 80,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: 'absolute',
        bottom: 0,
        left:0,
        right:0,
    }
})

export default BotNavbar;
