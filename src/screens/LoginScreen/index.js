import React from 'react'
import { StyleSheet, View, Text, StatusBar, TextInput } from 'react-native'

import background from '../../assets/img/c.jpg'
import BackgroundComponent from '../../components/BackgroundComponent'

import Icon from 'react-native-vector-icons/FontAwesome'

class LoginScreen extends React.Component{
	render(){
		return (
			<View style={{ flex: 1}}>
				<StatusBar translucent backgroundColor="rgba(255, 255, 255, 0)" />    
				<BackgroundComponent source={background} />

				<View style={styles.container}>
					<Text style={styles.textTitle}>Appify</Text>
					<Text style={styles.textSubTitle}>MOBILE APPLICATION</Text>

					<View style={{ flexDirection:'column', marginTop: 50, justifyContent: 'center'}}>
						<Text style={styles.textLogin}>Sign in to continue</Text>

						<TextInput
							style={styles.textInput}
							underlineColorAndroid='transparent'
							placeholder='E-Mail'
							placeholderTextColor='#fff' />

						<TextInput
							secureTextEntry={true}
							style={styles.textInput}
							underlineColorAndroid='transparent'
							placeholder='Password'
							placeholderTextColor='#fff' />							

						<View style={styles.btnSignin}>
							<Text style={styles.textBtnSignin}>SIGN IN</Text>
						</View>

					</View>					

					<View style={{ position: 'absolute', bottom: 40, width: '100%', justifyContent:'center'}}>
						<Text style={styles.textBottom}>SIGN UP</Text>
					</View>
				</View>
			</View>
		)
	}
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
  		paddingTop: 100,
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0, 
		width: '100%',
		height: '100%',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.1)',
  },
  textTitle: {
  	fontSize: 35,
  	fontWeight: 'bold',
  	color: '#fff'
  },
  textSubTitle: {
  	fontSize: 15,
  	fontWeight: 'bold',
  	color: '#fff'
  },
  btnSocial: {
  	backgroundColor: '#fff',
  	paddingVertical: 10,
  	paddingHorizontal: 25,
  	borderRadius: 50,
  	marginBottom: 20,
  	alignItems: 'center'
  },
  textFacebook: {
  	color: '#2980b9',
  	fontWeight: 'bold',
  	fontSize: 17
  },
  textGoogle: {
  	color: '#e74c3c',
  	fontWeight: 'bold',
  	fontSize: 17
  },
  textBottom: {
  	color: '#fff',
  	fontSize: 17,
  	width: '100%',
  	textAlign: 'center',
  	fontWeight: 'bold',
  },
  textInput: {
  	width: 250,
  	borderBottomColor: '#fff',
  	borderBottomWidth: 2,
  	color: '#fff',
  	textAlign: 'center',
  	marginBottom: 15,
  	fontSize: 16
  },
  textLogin: {
  	color: '#fff',
  	fontSize: 18,
  	textAlign: 'center',
  	marginBottom: 20
  },
  btnSignin: {
  	backgroundColor: '#e67e22',
  	borderRadius: 50,
  	paddingHorizontal: 40,
  	paddingVertical: 12,
  	alignSelf:'center'
  },
  textBtnSignin: {
  	color: '#fff',
  	textAlign: 'center',
  	fontWeight: 'bold',
  	fontSize: 18,
  	elevation: 10
  }
})