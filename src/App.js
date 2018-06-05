import { createStackNavigator } from 'react-navigation'

import FirstScreen from './screens/FirstScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

export default createStackNavigator({
	Intro: {
		screen: FirstScreen
	},
	SignIn: {
		screen: LoginScreen
	},
	SignUp: {
		screen: RegisterScreen
	}
},
{
	initialRouteName: 'Intro',
	headerMode: 'none'
});