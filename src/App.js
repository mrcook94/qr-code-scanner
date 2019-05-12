import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import AppContainer from './navigators/mainStack'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AppContainer />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1 }
})