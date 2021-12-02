import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, Alert, Text, Image, Dimensions, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from 'react-native-elements';

export default class ImageCaptureComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            takingPic: false,
            shouldShow: true,
            uri: ''
        };
    }
     goBack ()  {
        this.props.navigation.goBack(null);
      }
  
    onReg() {
        this.setState({ shouldShow: true, takingPic: false })
        this.props.navigation.navigate('BagList');
    }
    takePicture = async () => {
        if (this.camera && !this.state.takingPic) {

            let options = {
                quality: 0.85,
                fixOrientation: true,
                forceUpOrientation: true,
            };

            this.setState({ takingPic: true });

            try {
                const data = await this.camera.takePictureAsync(options);
                // Alert.alert('Success', JSON.stringify(data));
                this.setState({ uri: data.uri });
                this.setState({ shouldShow: false });
            } catch (err) {
                Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
                return;
            } finally {
                this.setState({ takingPic: false });
            }
        }
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                                  <Header 
        placement="left"
        leftComponent={{ icon: 'chevron-left', color: '#fff', onPress:() => this.goBack() }}
        centerComponent={{ text: 'Capture Sheet', style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#9324a3', '#008fc4'],
          start:{ y: 0.0, x: 1.0 },
          end: { x: 0.0, y: 1.0 },
        }}
        containerStyle={{marginTop:Platform.OS === 'ios' ? -50 : 10}}
      />
                {this.state.shouldShow ?
                    (
                        <SafeAreaView style={styles.container}>
                            <RNCamera
                                style={{ flex: 1, alignItems: 'center' }}
                                ref={ref => {
                                    this.camera = ref
                                }}
                                captureAudio={false}
                            />
                            <Icon
                                name='camera'
                                color='#008fc4'
                                size={50}
                                activeOpacity={0.5}
                                style={styles.btnAlignment}
                                onPress={this.takePicture}
                            />
                        </SafeAreaView>
                    ) :
                    <View>
                        <View style={{ height: '90%', width: '100%' }}>
                            <Image source={{ uri: this.state.uri }} style={styles.preview}></Image>
                        </View>
                        <View style={{
                            flexDirection: 'row', marginTop: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Icon
                                style={{ flexBasis: '50%', textAlign: 'center' }}
                                name='check'
                                color='green'
                                size={30}
                                activeOpacity={0.5}
                                onPress={() => this.onReg()} 
                            />
                            <Icon
                                style={{ color: 'red', marginTop: -2, flexBasis: '50%', textAlign: 'center' }}
                                name='close'
                                color='#008fc4'
                                size={30}
                                activeOpacity={0.5}
                                onPress={() => this.setState({ shouldShow: true, takingPic: false })} 
                            />
                        </View>
                    </View>

                }
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
    },
    btnAlignment: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 50,
        left: '45%'
    },
    preview: {
        flex: 1,
        resizeMode: 'stretch'
    },
})
