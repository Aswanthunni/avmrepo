import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, Alert, Text, Image, Dimensions, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import { Avatar, Badge, Header, withBadge } from 'react-native-elements'
import { SvgUri, WithLocalSvg } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            takingPic: false,
            shouldShow: true,
            uri: ''
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                                  {/* <Header 
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Profile', style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#9324a3', '#008fc4'],
          start:{ y: 0.0, x: 1.0 },
          end: { x: 0.0, y: 1.0 },
        }}
        containerStyle={{marginTop:Platform.OS === 'ios' ? -50 : 10}}
      /> */}
                <View style={styles.card}>
                <WithLocalSvg style={{ marginTop: '-12%'}}
                asset={require('../../assets/icons/profile.svg')}
              />
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                        <Text>John Doe</Text>
                        <Badge value="Invigilator" badgeStyle={{backgroundColor: '#9324a3', borderRadius: 6, marginLeft: 5}}/>
                    </View>
                    <View style={{marginTop: 5}}>
                        <Text>Designation</Text>
                    </View>
                    <View style={{marginTop: 5}}>
                        <Text>Identification Number</Text>
                    </View>
                    <View style={{marginTop: 10}}>
                        <QRCode
                            value="http://awesome.link.qr"
                        />
                    </View>
                    <View style={{flexDirection: 'row', backgroundColor: '#fff', marginTop: 15, marginBottom: 15, padding:6, borderRadius: 30, borderColor: '#008FC4', borderWidth: 1}}>
                    <Icon
                                name='share-alt'
                                color='#008fc4'
                                size={17}
                                activeOpacity={0.5}
                            />
                    
                        <Text style={{marginLeft: 8}}>Share</Text>
                        </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBFDFF',
        height: '100%',
    },
    card: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 15,
        backgroundColor: '#EBFDFF',
        maxWidth: '100%',
        maxHeight: '100%',
        margin: '4%',
        alignItems: 'center',
        marginTop: '18%'
    }
})
