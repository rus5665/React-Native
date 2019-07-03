import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View, ScrollView, Image} from 'react-native'
import widthScreen from './constans'


const Carousel = ({data}) => {


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


                <ScrollView
                    horizontal
                    paddingEnabled
                >
                    {data.map((item, index) => (
                        <View key={item.id}>
                            <Image
                                style={{width: 300, height: 50}}
                                source={{uri: item.urls.small}}
                            />
                            {() => {}}
                        </View>
                    ))
                    }
                </ScrollView>


                <View style={sliderNumberConteiner}>
                    <View style={sliderNumberConteiner}>
                        <View style={sliderNumberBox}>
                            <Text style={sliderNumberText}>1/10</Text>
                        </View>
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
        justifyContent: 'center',
        height: 50,
        width: 300,

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

export {Carousel}




