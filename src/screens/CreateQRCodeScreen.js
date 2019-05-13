'use strict';

import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import QRCode from 'react-native-qrcode';

export default class QRCodeScreen extends Component {
	render() {
		const data = this.props.navigation.getParam('data', '')
		return (
			<View style={styles.container} removeClippedSubviews={true}>
				<Text style={styles.textStyle}>In mã này dán vào sách</Text>
				<TouchableOpacity
					style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', marginTop: 10, }}
					onPress={() => this.props.navigation.goBack()}
				>
					<Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>IN MÃ QR</Text>
				</TouchableOpacity>
				<View
					style={styles.qrCodeView}
					overflow={'hidden'}
				>
					<QRCode
						value={JSON.stringify(data)}
						size={200}
						bgColor='black'
						fgColor='white'
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	qrCodeView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textStyle: {
		fontSize: 18,
		marginHorizontal: 30,
		fontWeight: '500',
		textAlign: 'center',
		marginTop: 50,
	}
})