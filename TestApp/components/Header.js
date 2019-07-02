import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-ionicons'


const Header = ({title, onPress, nameIcon, colorIcon}) => {

    const {
        header,
        logo,
        logoImg,
        logoText,
        logoTextTitle,
        titleHeader,
    } = styles

    return (
        <View style={header}>
            <View style={logo}>
                <View>
                    <Image style={logoImg}
                           source={require('../img/logo.png')}
                    />
                </View>
                <View style={logoText}>

                    <TouchableOpacity onPress={onPress}>
                        <View style={titleHeader}>
                            <Icon name={nameIcon} size={35} color={colorIcon}/>
                            <Text style={logoTextTitle}>{title}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        backgroundColor: '#000',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 2},
        elevation: 5,
        position: 'relative',
    },

    logo: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        padding: 10,
    },

    logoImg: {
        width: 40,
        height: 40,
    },

    logoText: {
        alignItems: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
    },

    logoTextTitle: {
        color: '#fff',
        fontSize: 22,
    },

    logoTextSecond: {
        color: '#fff',
        fontSize: 10,
    },

    titleHeader: {
        flexDirection: 'row',

    }
})

export {Header}
