import React, {Component} from 'react'
import {StyleSheet, View, ScrollView, SafeAreaView} from 'react-native'
import {Header, ImageCard} from './components/'
import {heightScreen, widthScreen} from './components/constants'

const url = 'http://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'


export default class App extends Component {

  state = {
    title: 'Unsplash',
    data: []
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({data})
    } catch (e) {
      throw e
    }
  }

  render() {
    const {title, data} = this.state
    console.log('data', this.state.data)
    console.log('h ', heightScreen, ' w ', widthScreen)

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
              <ImageCard data={item} key={item.id}/>
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

  imageFullContainer:{
    flex: 1,
    alignItems: 'center',
  }
})
