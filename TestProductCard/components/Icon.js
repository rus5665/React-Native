import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const IconComponent = ({name, size, color}) => {

    const {
        icon,
    } = styles

    return (
        <View>
            <TouchableOpacity >
                <Icon name={name} size={size} color={color} style={icon}/>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    icon: {

    }
})


export default IconComponent
