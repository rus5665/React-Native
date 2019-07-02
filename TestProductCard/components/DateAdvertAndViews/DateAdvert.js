import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const DateAdvert = ({date}) => {

    const {
        dateAd,
    } = styles

    return (
        <View>
            <Text style={dateAd}>{date}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    dateAd: {
        color: '#208bff',
        fontSize: 10,
    }
})


export default DateAdvert
