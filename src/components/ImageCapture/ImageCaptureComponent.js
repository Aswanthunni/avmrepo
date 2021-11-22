import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, Alert } from 'react-native'
import { RNCamera } from 'react-native-camera'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ImageCaptureComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            takingPic: false,
        };
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
                Alert.alert('Success', JSON.stringify(data));
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
      }
})
