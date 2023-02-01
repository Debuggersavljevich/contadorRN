import {useState} from 'react'
import { Fab } from '../components/Fab'
import { View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native'

export const ContadorScreen = () => {
  
    const [contador, setContador] = useState(10)

  return (
    <View style={style.container}>
    <Text style={style.title}>
            Contador: {contador}
    </Text>
    
    
    
    <Fab 
        title='+1'
        onPress={()=>setContador(contador+1)}
    />


    <Fab 
        title='-1'
        onPress={()=>setContador(contador-1)}
    />

    {/* <TouchableOpacity
    onPress={()=> setContador(contador-1)}
    style={style.fabLocationBL}
    >
    <View style={style.fab}>
        <Text style={style.fabChildren}>
            -1
        </Text>
    </View>
    </TouchableOpacity> */}
    
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -15
    },
    fabLocationBR: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 25,
        left: 25
    },
    fab: {
        backgroundColor: '#5856d6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fabChildren: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})

