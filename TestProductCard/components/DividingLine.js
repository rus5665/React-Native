import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'

const DividingLine = ({name, size, color}) => {

    const {
        dividingLine,
    } = styles

    return (
        <View style={dividingLine}>
        </View>
    )
}


const styles = StyleSheet.create({
    dividingLine: {
        height: 1,
        backgroundColor: '#e5e5e5',
    }
})


export default DividingLine
