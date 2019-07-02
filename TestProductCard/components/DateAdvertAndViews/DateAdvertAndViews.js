import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import DateAdvert from "./DateAdvert";
import AdditionalInformation from "../AdditionalInformation";

const DateAdvertAndViews = ({views}) => {

    const {
        viewsDateConteiner,
    } = styles

    return (
        <View style={viewsDateConteiner}>
            <DateAdvert date={'17:46, 23 ферваля 2019 г.'}/>
            <AdditionalInformation number={46} unit={'просмотров'}/>
        </View>
    )
}


const styles = StyleSheet.create({
    viewsDateConteiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
    }
})


export default DateAdvertAndViews