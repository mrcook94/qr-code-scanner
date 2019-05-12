import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { CREATE_QRCODE_SCREEN } from '../lib/utils/screenNames'

export default class QRCodeScannerScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title='Click'
                    onPress={() => this.props.navigation.navigate(CREATE_QRCODE_SCREEN)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})