import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const AdditionalInformation = ({number, unit}) => {

    const {
        dateAd,
    } = styles

    return (
        <View>
            <Text style={dateAd}>{number} {unit}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    dateAd: {
        color: '#9ca0a7',
        fontSize: 10,
    }
})


export default AdditionalInformation