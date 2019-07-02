import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const ProductCharacteristic = ({characteristic, characteristicValue}) => {

    const {
        characteristicStyle,
        characteristicValueStyle,
        characteristicConteiner,
    } = styles

    return (
        <View style={characteristicConteiner}>
            <Text style={characteristicStyle}>{characteristic} </Text>
            <Text style={characteristicValueStyle}>{characteristicValue}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    characteristicStyle: {
        flex: 2,
        color: '#8b9098',
        fontSize: 13,
    },
    characteristicValueStyle: {
        flex: 2,
        color: '#000',
        fontSize: 13,
    },
    characteristicConteiner: {
        flexDirection: 'row'
    },
})


export default ProductCharacteristic