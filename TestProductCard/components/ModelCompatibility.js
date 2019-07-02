import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Icon from './Icon'

const ModelCompatibility = () => {

    const {
        modelCompText,
        modelCompConteiner,
        modelIcon
    } = styles

    return (
        <TouchableOpacity>
            <View style={modelCompConteiner}>
                <Text style={modelCompText}>Совместимость с моделями</Text>
                <View style={modelIcon}>
                    <Icon name={'angle-right'} size={20} color={'#ccc'}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    modelCompConteiner: {
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10,
    },
    modelCompText: {
        color: '#000',
        fontSize: 17,
    },
    modelIcon: {},

})


export default ModelCompatibility