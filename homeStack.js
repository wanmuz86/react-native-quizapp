import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './components/Home'
import Quiz from './components/Quiz'
const screens = {
    Home: {
        screen:Home
    },
    Quiz: {
        screen:Quiz
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);