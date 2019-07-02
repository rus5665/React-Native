import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import AdditionalInformation from "../AdditionalInformation";
import PriceAdvert from "./PriceAdvert";

const PriceAndQuantity = ({price, currency, number, unit }) => {

    const {
        PriceQuantConteiner,
    } = styles

    return (
        <View style={PriceQuantConteiner}>
            <PriceAdvert price={1300} currency={'р'}/>
            <AdditionalInformation number={3} unit={'шт'}/>
        </View>
    )
}


const styles = StyleSheet.create({
    PriceQuantConteiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
    }
})


export default PriceAndQuantity