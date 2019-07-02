import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const TitleAdvert = ({title}) => {

    const {
        titleAd,
        titleAdConteiner,
    } = styles

    return (
        <View style={titleAdConteiner}>
            <Text style={titleAd}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    titleAdConteiner: {
      paddingLeft: 10,
      paddingRight: 10,
    },
    titleAd: {
        color: '#000',
        fontSize: 17,
    }

})


export default TitleAdvert