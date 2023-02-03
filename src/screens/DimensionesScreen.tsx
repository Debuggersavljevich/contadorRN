import React from 'react'
import { View, Text, StyleSheet, Dimensions} from 'react-native'

export const DimensionesScreen = () => {
  
    const {width, height} = Dimensions.get('window')

  return (
  <View style={styles.container}>
    {/* <Text style={styles.title}>
        Hola desde Dimensiones!
    </Text> */}
    <View>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
    </View>
    
    <Text>
        W: {width},
        H: {height}
    </Text>

  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5856d6'
    },
    cajaMorada: {
        backgroundColor: '#5856d6',
        height: 500
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        height: 400
    }
});
