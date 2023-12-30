import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

function ExpenditureCard({expense}) {

    const formattedExpense = Number(expense).toLocaleString('en-US');

  return (
    <View style={styles.container}>
        <Text style={styles.expenditureFont}>Expenditure</Text>
        <Text style={styles.currencyFont}>Nu. {formattedExpense} /-</Text>
    </View>
  )

}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'left',
        padding: 20,
        backgroundColor: '#322EE7',
        height: 141,
        opacity: 0.8,
        borderRadius: 15,
        marginTop: 10,
    },
    expenditureFont: {
        fontSize: 18,
        color: '#FFFFFF',
    },
    currencyFont: {
        fontSize: 28,
        color: '#FFFFFF',
        fontWeight: '600',
    }
  })

export default ExpenditureCard