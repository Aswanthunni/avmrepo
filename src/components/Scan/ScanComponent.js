import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const ScanComponent = ({navigation}) => {

    const onSuccess = e => {
      onReg();
        setTimeout(() => {
            this.scanner.reactivate()
        }, 2000);
    };

    function goBack ()  {
      navigation.goBack(null);
    }

    function onReg() {
      navigation.navigate('ImageCapture');
    }

    return (
        <SafeAreaView style={styles.container}>
                  <Header 
        placement="left"
        leftComponent={{ icon: 'chevron-left', color: '#fff', size: 40, onPress:() => goBack()}}
        centerComponent={{ text: 'Scan Bag', style: { color: '#fff', fontWeight: 'bold', fontSize: 18, marginTop: '2.5%' } }}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#9324a3', '#008fc4'],
          start:{ y: 0.0, x: 1.0 },
          end: { x: 0.0, y: 1.0 },
        }}
        containerStyle={{marginTop:Platform.OS === 'ios' ? -50 : 10}}
      />
      
      <View style={{height: '65%'}}>
      <QRCodeScanner
                onRead={onSuccess}
                ref={(node) => { this.scanner = node }}
                flashMode={RNCamera.Constants.FlashMode.auto}
                showMarker= {true}
                cameraStyle={{height: '100%'}}
            />
      </View>
      <View style={styles.card}>
      <Text style={{marginLeft: 12}}>Enter Manually</Text>
        <TextInput onBlur={onReg}
          style={styles.input}
        />
      </View>
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
    card: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 15,
        backgroundColor: '#EBFDFF',
        maxWidth: '100%',
        minHeight: '100%',
        borderColor: '#fff',
        borderWidth: 5,
        margin: 5,
        padding: 10
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 0,
        padding: 10,
        backgroundColor: '#fff'
      },
});

export default ScanComponent;