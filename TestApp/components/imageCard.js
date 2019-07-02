import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {widthScreen} from './constants.js'
import Image from 'react-native-scalable-image'

const ImageCard = ({data, onPress}) => {
  const {
    userContainer,
    userImageContainer,
    userImage, userTitle,
    imgMedium,
    imageContainer,
    imageLayout,
  } = styles

  const {id} = data
  const userName = data.user.name
  const userImg = data.user.profile_image.small
  const smallImg = data.urls.small



  return (
    <View style={imageContainer}>
      <View style={userContainer}>
        <View style={userImageContainer}>
          <Image style={userImage}
                 source={{uri: userImg}}
          />
        </View>
        <Text style={userTitle}>{userName}</Text>

      </View>
      <TouchableOpacity onPress={onPress}>
      <View style={imageLayout}>
        <Image style={imgMedium}
               source={{uri: smallImg}}
        />
      </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: 10
  },

  userImageContainer: {
    borderRadius: 16,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,
    overflow: 'hidden',
  },

  userImage: {
    width: 32,
    height: 32,
    padding: 2,
  },

  userTitle: {
    paddingLeft: 5,

  },

  imgMedium: {
    width: widthScreen,
  },

  imageContainer: {
    paddingTop: 13,
  },

  imageLayout: {
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    position: 'relative',
  }
})

export {ImageCard}
