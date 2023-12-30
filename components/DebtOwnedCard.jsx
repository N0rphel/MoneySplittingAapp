import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DebtOwnedCard({ debt, own }) {
  const formattedDebt = Number(debt).toLocaleString('en-US');
  const formattedOwn = Number(own).toLocaleString('en-US');

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.signRed}></View>
        <View>
          <Text style={styles.heading}>Debt</Text>
          <Text style={styles.currency}>Nu. {formattedDebt} /-</Text>
        </View>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.signGreen}></View>
        <View>
          <Text style={styles.heading}>Own</Text>
          <Text style={styles.currency}>Nu. {formattedOwn} /-</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    backgroundColor: '#FFFFFF',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    opacity: 0.8,
  },
  subContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 16,
    color: '#62729D',
    marginLeft: 5, // Added margin for better spacing
  },
  currency: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '700',
    marginLeft: 5, // Added margin for better spacing
  },
  signRed: {
    borderRadius: 30,
    backgroundColor: '#D43737',
    height: 10,
    width: 10,
    marginRight: 10, // Added margin for better spacing
  },
  signGreen: {
    borderRadius: 30,
    backgroundColor: '#5AB763',
    height: 10,
    width: 10,
    marginRight: 10, // Added margin for better spacing
  },
});

export default DebtOwnedCard;
