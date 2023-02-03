import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Hola!
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 100,
    paddingVertical: 50,
    margin: 10,
    textAlign: 'center',
    // fontStyle: 'italic',
    fontWeight: 'bold',
    // width: 150,
    borderWidth: 10
    // backgroundColor: 'red'
  }
})