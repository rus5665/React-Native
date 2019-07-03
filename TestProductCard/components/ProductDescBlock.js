import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import SectionTitle from "./SectionTitle";
import IconComponent from "./Icon";
import DividingLine from "./DividingLine";

const ProductDescBlock = ({desc}) => {

    const {
        DescrTextConteiner,
        DescrText,
        showAllDescButton,
        DescrConteiner,
    } = styles

    return (
        <View style={DescrConteiner}>
            <SectionTitle title={'Описание товара'}/>
            <View style={DescrTextConteiner}>
                <Text style={DescrText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </View>
                <TouchableOpacity style={showAllDescButton}>
                    <View>
                        <IconComponent name={'angle-down'} size={30} color={'#60acff'}/>
                    </View>
                </TouchableOpacity>
            <DividingLine/>

        </View>
    )
}


const styles = StyleSheet.create({
    DescrConteiner: {
        position: 'relative',
    },
    DescrTextConteiner: {
        color: '#000',
        fontSize: 10,
        paddingTop: 20,
        paddingLeft: 16,
        paddingRight: 16,
    },
    DescrText: {
        color: '#000',
    },
    showAllDescButton: {
        height: 50,
        backgroundColor: 'rgba(255,255, 255, 0.8)',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }

})


export default ProductDescBlock