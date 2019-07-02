import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native'

const MainFotoSlider = () => {

    const {
        sliderConteiner,
        sliderImageConteiner,
        sliderNumberBox,
        sliderNumberConteiner,
        sliderNumberText,
    } = styles

    return (
        <View style={sliderConteiner}>
            <View style={sliderImageConteiner}>
                <TouchableOpacity>
                    <Image
                        source={require('../img/default-img.png')}
                    />
                </TouchableOpacity>
                <View style={sliderNumberConteiner}>
                <View style={sliderNumberBox}>
                    <Text style={sliderNumberText}>1/10</Text>
                </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sliderConteiner: {
        alignItems: 'center',
        padding: 15,
    },
    sliderImageConteiner: {
        borderRadius: 5,
        overflow: 'hidden',
        position: 'relative',
        justifyContent: 'center',

    },
    sliderNumberConteiner: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 20,
        alignItems: 'center',
    },
    sliderNumberBox: {
        paddingLeft: 11,
        paddingRight: 11,
        paddingBottom: 4,
        paddingTop: 4,
        borderRadius: 8,
        backgroundColor: '#e0e0e0',
    },
    sliderNumberText: {
        fontSize: 8,
        color: '#939393'
    },
})


export {MainFotoSlider}
