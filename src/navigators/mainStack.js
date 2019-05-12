import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import CreateQRCodeScreen from '../screens/CreateQRCodeScreen'
import QRCodeScannerScreen from '../screens/QRCodeScannerScreen'

import * as screenNames from '../lib/utils/screenNames'

const mainStackNavigator = createStackNavigator({
    [screenNames.QRCODE_SCANNER_SCREEN]: QRCodeScannerScreen,
    [screenNames.CREATE_QRCODE_SCREEN]: CreateQRCodeScreen,
},
    {
        headerMode: 'none'
    }
)

export default AppContainer = createAppContainer(mainStackNavigator)