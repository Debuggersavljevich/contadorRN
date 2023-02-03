import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const PositionScreen = () => {
  return (
  <View style={styles.container}>
    <View style={styles.cajaMorada} />
    <View style={styles.cajaNaranja} />
    <View style={styles.cajaVerde} />
    <View style={styles.cajaRoja} />
    <View style={styles.cajaPurpura} />
  </View>
  )
}
 

const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 400,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#28c4d9'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856d6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    cajaVerde: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute'
    },
    cajaRoja: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0
    },
    cajaPurpura: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 150,
        right: 150
    }
});