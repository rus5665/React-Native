import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const SectionTitle = ({title}) => {

    const {
        sectionTitleConteiner,
        sectionTitle,
    } = styles

    return (
        <View style={sectionTitleConteiner}>
           <Text style={sectionTitle}>{title.toUpperCase()}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    sectionTitleConteiner: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 11,
        paddingTop: 23,
        backgroundColor: '#f4f4f5'
    },
    sectionTitle:{
color: '#7a7a7b',
    }

})


export default SectionTitle