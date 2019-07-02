import {createStackNavigator} from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailsScreen from "./DetailsScreen"
import {
  UNSPLASH_HOME,
  UNSPLASH_DETAILS
} from '../routes'


export default createStackNavigator (
  {
    [UNSPLASH_HOME]: HomeScreen,
    [UNSPLASH_DETAILS]: DetailsScreen,
  },
  {
    headerMode: 'none'
  }
)
