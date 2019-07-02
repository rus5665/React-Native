import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native'
import {Header} from "./components/Header"
import {MainFotoSlider} from "./components/MainFotoSlider"
import DateAdvertAndViews from "./components/DateAdvertAndViews/DateAdvertAndViews";
import TitleAdvert from "./components/TitleAdvert"
import PriceAndQuantity from "./components/PriceAndQuantity/PriceAndQuantity";
import ModelCompatibility from "./components/ModelCompatibility";
import DividingLine from "./components/DividingLine";
import ProductCharacteristicsBlock from "./components/ProductCharacteristicsBlock";
import SectionTitle from "./components/SectionTitle";
import ProductDescBlock from "./components/ProductDescBlock";
import ButtonIconTextBlock from "./components/ButtonIconTextBlock/ButtonIconTextBlock";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

const onPress = () => {
}

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <DividingLine/>
                <ScrollView>
                <MainFotoSlider/>
                <DateAdvertAndViews/>
                <TitleAdvert title={'Воздушный фильтр Filtron 250 мм'}/>
                <PriceAndQuantity />
                <DividingLine/>
                <ModelCompatibility/>
                <DividingLine/>
                <ProductCharacteristicsBlock/>
                <ProductDescBlock />
                <ButtonIconTextBlock/>
                <Text style={styles.welcome}>22Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
//<PriceAndQuantity />