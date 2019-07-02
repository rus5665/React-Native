import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import IconComponent from "../Icon";

const ButtonIconText = ({name, size, color, buttonText}) => {

    const {
        buttonIconTextConteiner,
        buttonIconText,
    } = styles

    return (
        <View style={buttonIconTextConteiner}>
            <IconComponent name={name} size={size} color={color}/>
            <Text style={buttonIconText}>{buttonText}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonIconTextConteiner: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonIconText: {
        paddingRight: 5,
        paddingLeft: 5,
        color: '#8b9098',
        fontSize: 8,
        fontWeight: '900',
    }

})


export default ButtonIconText