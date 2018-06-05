import React from 'react'
import { StyleSheet, View, Text, StatusBar, TextInput, CheckBox } from 'react-native'

import background from '../../assets/img/b.jpg'
import BackgroundComponent from '../../components/BackgroundComponent'

import RoundCheckbox from 'rn-round-checkbox'
import Icon from 'react-native-vector-icons/FontAwesome'

class RegisterScreen extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      remember: true
    }
  }

  render(){
    return (
      <View style={{ flex: 1}}>
        <StatusBar translucent backgroundColor="rgba(255, 255, 255, 0)" />    
        <BackgroundComponent source={background} />

        <View style={styles.container}>
          <Text style={styles.textTitle}>Appify</Text>
          <Text style={styles.textSubTitle}>MOBILE APPLICATION</Text>

          <View style={{ flexDirection:'column', marginTop: 30, justifyContent: 'center'}}>
            <Text style={styles.textLogin}>Create Account</Text>

            <TextInput
              style={styles.textInput}
              underlineColorAndroid='transparent'
              placeholder='E-Mail Address'
              placeholderTextColor='#fff' />

            <TextInput
              secureTextEntry={true}
              style={styles.textInput}
              underlineColorAndroid='transparent'
              placeholder='Password'
              placeholderTextColor='#fff' />              

            <TextInput
              secureTextEntry={true}
              style={styles.textInput}
              underlineColorAndroid='transparent'
              placeholder='Confirm Password'
              placeholderTextColor='#fff' />              

            <View style={styles.btnSignin}>
              <Text style={styles.textBtnSignin}>SIGN UP</Text>
            </View>
          </View>         

          <View style={{ justifyContent: 'flex-end', flex: 1, paddingBottom: 40 }}>
            <Text 
              style={styles.textBottom}
              onPress={() => this.props.navigation.navigate('SignIn')}>SIGN IN</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default RegisterScreen

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
    alignSelf:'center',
    marginTop: 30
  },
  textBtnSignin: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    elevation: 10
  },
  textWhite: {
    color: '#fff',
    fontWeight: 'bold'
  }
})