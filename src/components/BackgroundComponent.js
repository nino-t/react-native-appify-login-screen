import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class BackgroundComponent extends React.Component {
	render() {
		const { source, children } = this.props
		return (
			<Image style={styles.picture} source={source} />
		)
	}
}

const styles = StyleSheet.create({
	picture: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover',
	}
})