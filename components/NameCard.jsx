import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function NameCard({personName}) {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pfp} />
      <Text>{personName}</Text>
      <TouchableOpacity style={styles.checkboxOutside} onPress={toggleCheckbox}>
        <View style={[styles.checkbox, checked && styles.checked]}>
          {checked && <View style={styles.checkedInner} />}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    backgroundColor: '#FFF',
    opacity: 0.8,
    marginTop: 10,
    width: '50%',
  },
  pfp: {
    backgroundColor: '#37E428',
    borderRadius: 7,
    width: 35,
    height: 35,
  },
  checkboxOutside: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#FFF',
  },
  checkedInner: {
    width: 15,
    height: 15,
    borderRadius: 20,
    backgroundColor: '#000',
  },
});

export default NameCard;
