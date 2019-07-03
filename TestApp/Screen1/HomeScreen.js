import React, {Component} from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import {Header, ImageCard} from '../components'
import {heightScreen, widthScreen} from '../components/constants'
import Image from "react-native-scalable-image"
import {UNSPLASH_DETAILS} from '../routes'

const url = 'https://api.unsplash.com/search/photos?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0&page=1&query=weather'


export default class HomeScreen extends Component {

  state = {
    title: 'Unsplash',
    data: []
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({data: data.results})
    } catch (e) {
      throw e
    }
  }

  render() {
    const {title, data} = this.state
    // console.log('data', this.state.data)
    // console.log('h ', heightScree
    // n, ' w ', widthScreen)
    console.log('props ', this.props)

    const {navigation} = this.props

    const {
      container,
      imageFullContainer,
    } = styles

    return (
      <View style={container}>
        <Header title={title}/>
        <ScrollView>
          <View style={imageFullContainer}>
            {data.map(item => (
              <ImageCard data={item}
                         key={item.id}
                         onPress={() => navigation.navigate(UNSPLASH_DETAILS, (item))}
              />
            ))
            }

          </View>
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },

  imageFullContainer: {
    flex: 1,
    alignItems: 'center',
  }
})


