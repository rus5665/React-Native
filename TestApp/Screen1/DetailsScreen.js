import React, {PureComponent} from 'react'
import {View, Text, Image} from 'react-native'
import {Header} from '../components'

//import Icon from 'react-native-vector-icons/FontAwesome'

class DetailsScreen extends PureComponent {

    render() {

        console.log('DetailsProps', this.props)
        const {navigation} = this.props
        const {key , updated_at} = this.props.navigation.state.params
        //const FullImg = Thumb.urls
        console.log('key ', updated_at)
        return (
            <View>
                <Header
                    title={'Back1'}
                    nameIcon={'ios-arrow-back'}
                    colorIcon={'#fff'}
                    onPress={() => navigation.goBack()}
                />
                <View>
                    <Image
                        source={{uri: null}}
                    />
                    <Text>{updated_at}</Text>

                </View>
            </View>
        )
    }

}

export default DetailsScreen