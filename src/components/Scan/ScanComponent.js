import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const ScanComponent = () => {

    const onSuccess = e => {
        alert(e.data);
        setTimeout(() => {
            this.scanner.reactivate()
        }, 2000);
    };

    return (
        <SafeAreaView style={styles.container}>
            <QRCodeScanner
                onRead={onSuccess}
                ref={(node) => { this.scanner = node }}
                flashMode={RNCamera.Constants.FlashMode.auto}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBFDFF',
        height: '100%',
        padding: 10
    },
});

export default ScanComponent;