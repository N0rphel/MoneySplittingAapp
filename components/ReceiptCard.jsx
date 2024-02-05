import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button, TouchableOpacity } from 'react-native'

const Separator = () => <View style={styles.separator} />;

function ReceiptCard() {

    const [name, onNameChange] = useState('');
    const [cost, onCostChange] = useState('');

    const handleCostChange = (text) => {
        const numericRegex = /^[0-9]*$/;

        if (numericRegex.test(text) || text == ''){
            onCostChange(text);
        }
    }

  return (
   <View style={styles.container}>
        <Text 
            style={styles.text}
        >Split Reciept</Text>
        <Separator/>
        <TextInput 
            style={styles.input}
            placeholder='Name'
            value={name}
            onChangeText={onNameChange}
        />
        <TextInput
            style={styles.input}
            placeholder='Cost'
            keyboardType='numeric'
            value={cost}
            onChangeText={handleCostChange}
        />

        <View style={styles.buttonContainer}>
           <View style={styles.button}>
                <TouchableOpacity>
                    <Text>Send</Text>
                </TouchableOpacity>
           </View>
           <View style={[styles.button, {borderColor:'#D43737',}]}>
                <TouchableOpacity>
                    <Text>Cancel</Text>
                </TouchableOpacity>
           </View>
        </View>
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: 20,
      width: '70%',
      backgroundColor:'#fff',
      borderRadius: 15,
      opacity: 0.8,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
        
    },
    button: {
        width:70,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 7,
        borderColor: '#5AB763',
        flexDirection:'row',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        fontSize: 18,
    },
    input: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderRadius: 7,
      color: '#62729D',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
  });

export default ReceiptCard