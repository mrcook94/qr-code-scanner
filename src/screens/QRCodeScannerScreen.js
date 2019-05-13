import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { CREATE_QRCODE_SCREEN } from '../lib/utils/screenNames'
import { RNCamera } from 'react-native-camera';
import apis from '../lib/apis/apis'
import { API_ENDING } from '../lib/apis/apiEnding'
import { Status } from '../lib/apis/status'

export default class QRCodeScannerScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            canReadCode: true
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={{
                        flex: 1,
                        width: '100%',
                    }}
                    onGoogleVisionBarcodesDetected={this.barcodeRecognized}
                >
                </RNCamera>
            </View>
        )
    }

    barcodeRecognized = ({ barcodes }) => {
        if (this.state.canReadCode) {
            this.setTimeOutReadCode()
            const data = JSON.parse(barcodes[0].data)
            if (!!data.book_id) {
                apis.post(API_ENDING.RETURN_BOOK, data)
                    .then(res => {
                        if (res && res.ok === Status.OK) {
                            alert('Trả sách')
                        } else {
                            console.log(res, 'SOME THING WRONG')
                        }
                    })
                    .catch(err => {
                        console.log(err, 'ERROR')
                    })
                return;
            }
            if (!!data.request_id) {
                apis.post(API_ENDING.CONFIRM_REQUEST, data)
                    .then(res => {
                        if (res && res.ok === Status.OK) {
                            console.log(res, 'BBBBBBBBBBBB')
                            if (res.isContribute) {
                                this.props.navigation.navigate(CREATE_QRCODE_SCREEN, { data: {book_id: res.data.book_id} })
                                alert('Đóng góp sách')
                                return
                            }
                            alert('Đã mượn sách')
                        } else {
                            console.log(res, 'SOME WRONG')
                        }
                    })
                    .catch(err => {
                        console.log(err, 'ERROR')
                    })
            }
        } else {
            console.log('nononono')
        }
    };

    setTimeOutReadCode = () => {
        this.setState({ canReadCode: false })
        setTimeout(() => {
            this.setState({ canReadCode: true })
        }, 5000)
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})