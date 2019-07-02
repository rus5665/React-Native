import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const PriceAdvert = ({price, currency}) => {

    const {
        priceAdConteiner,
        priceAd,
    } = styles

    return (
        <View style={priceAdConteiner}>
            <Text style={priceAd}>{price} {currency}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    priceAdConteiner: {
        
    },
    priceAd: {
        color: '#000',
        fontSize: 17,
        fontWeight: '900',
    }

})


export default PriceAdvert