import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming you have a suitable icon library installed

//This is the top header containing the username and the notification icon.

//ToDo
//notification should be clickable and display the new unread messages or receipts.



function HeaderTop({username}) {

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
    })

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.HeadingFont}>Hello, {username}</Text>
        <Text style={styles.subFont}>Today {formattedDate}</Text>
      </View>
      <View>
        <Icon name="notifications-circle-outline" size={35} color="#322EE7" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  textContainer: {
    marginRight: 20,
  },
  HeadingFont: {
    fontSize: 22,
  },
  subFont: {
    fontSize: 15,
    color: '#62729D',
  }
});

export default HeaderTop;
