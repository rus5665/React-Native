import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import ButtonIconText from "./ButtonIconText";

const ButtonIconTextBlock = ({}) => {

    const {
        ButtonIconTextBlockStyle,
    } = styles

    return (
        <View style={ButtonIconTextBlockStyle}>
            <ButtonIconText name={'comment'} size={30} color={'#208bff'} buttonText={'Написать продавщу'} />
            <ButtonIconText name={'exclamation-circle'} size={30} color={'#208bff'} buttonText={'Пожаловаться'} />
        </View>
    )
}


const styles = StyleSheet.create({
    ButtonIconTextBlockStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 16,
        paddingRight: 16,
    },
})


export default ButtonIconTextBlock