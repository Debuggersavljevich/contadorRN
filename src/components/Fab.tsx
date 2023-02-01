import {useState} from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native'


interface Props {
    title: string,
    position?: 'bl' | 'br'
    onPress: () => void,
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {

    

    const [contador, setContador] = useState(0)

    return (
    <>
    
   <View 
    style={(
        position === 'bl' 
        ? style.fabLocationBR
        : style.fabLocationBL
    )}
   >
     <TouchableNativeFeedback
    onPress={onPress}
    >
    <View style={style.fab}>
        <Text style={style.fabChildren}>
            {title}
        </Text>
    </View>
    </TouchableNativeFeedback>
    
    </View> 

    </>
  )
}

const style = StyleSheet.create({
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
        justifyContent: 'center',
        shadowColor: '#000',
        textShadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8
    },
    fabChildren: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        shadowColor: '#000',
        textShadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8
    }
})
