import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import ProductCharacteristic from "./ProductCharacteristic";

const ProductCharacteristicsBlock = ({characteristic, characteristicValue}) => {

    const {
        characteristicBlockStyle,
    } = styles

    return (
        <View style={characteristicBlockStyle}>
            <ProductCharacteristic characteristic={'характеристика'} characteristicValue={'значение'}/>
            <ProductCharacteristic characteristic={'характеристика'} characteristicValue={'значение'}/>
            <ProductCharacteristic characteristic={'характеристика'} characteristicValue={'значение'}/>
            <ProductCharacteristic characteristic={'характеристика'} characteristicValue={'значение'}/>
            <ProductCharacteristic characteristic={'характеристика'} characteristicValue={'значение'}/>
            <ProductCharacteristic characteristic={'характеристика'} characteristicValue={'значение'}/>
        </View>
    )
}


const styles = StyleSheet.create({
    characteristicBlockStyle: {
        color: '#208bff',
        fontSize: 10,
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 16,
        paddingRight: 16,
    },
})


export default ProductCharacteristicsBlock