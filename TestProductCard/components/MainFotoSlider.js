import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native'
import {Carousel} from "./Carousel";


const MainFotoSlider = ({data}) => {

    console.log('data ', data)

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




          <Carousel data={data}/>
                <View style={sliderNumberConteiner}>



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
