import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import IconComponent from './Icon'

const Header = ({title, onPress, nameIcon, colorIcon}) => {

    const {
        header,
        iconsHeader,
        iconsHeaderRight,
        icon
    } = styles

    return (
        <View style={header}>
            <View style={iconsHeader}>
                <View>
                    <IconComponent name={'angle-left'} size={30} color={'#60acff'}/>
                </View>
                <View style={iconsHeaderRight}>
                    <IconComponent name={'upload'} size={16} color={'#60acff'}/>
                    <IconComponent name={'heart'} size={16} color={'#60acff'} />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    iconsHeader: {
        paddingLeft: 9,
        paddingRight: 18,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconsHeaderRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})


export {Header}