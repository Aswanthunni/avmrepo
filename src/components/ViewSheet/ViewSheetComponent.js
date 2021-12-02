import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View, Modal, TouchableOpacity, Pressable } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ViewSheetComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            modalVisible: false,
        };
    }

    showSlider(bool) {
        this.setState({ modalVisible: bool });
    };

    goBack ()  {
        this.props.navigation.goBack(null);
      }
  

    render() {
        initialArr = [
            {
              id: 1,
              color: "blue",
              text: "text1"
            },
            {
              id: 2,
              color: "red",
              text: "text2"
            }
          ];
        return (
            <SafeAreaView style={styles.container}>
                <Header
                    placement="left"
                    leftComponent={{ icon: 'chevron-left', color: '#fff', onPress:() => this.goBack() }}
                    centerComponent={{ text: 'Bag 123456', style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
                    ViewComponent={LinearGradient} // Don't forget this!
                    linearGradientProps={{
                        colors: ['#9324a3', '#008fc4'],
                        start: { y: 0.0, x: 1.0 },
                        end: { x: 0.0, y: 1.0 },
                    }}
                    containerStyle={{ marginTop: Platform.OS === 'ios' ? -50 : 10 }}
                />
                <View style={styles.card}>
                    <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 30 }}>
                        <QRCode
                            value="http://awesome.link.qr"
                        />
                    </View>
                    <View style={{ flex: 1 }}>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View >
                                <Text>Bag ID: </Text>
                            </View>
                            <View >
                                <Text numberOfLines={1}>12345</Text>
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{}}>
                                <Text>Exam Series: </Text>
                            </View>
                            <View >
                                <Text numberOfLines={1}>Mid-term Sem-V</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View >
                                <Text>Subject: </Text>
                            </View>
                            <View >
                                <Text numberOfLines={1}>Math</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View >
                                <Text>No. of Sheets: </Text>
                            </View>
                            <View >
                                <Text numberOfLines={1} style={{ marginLeft: 'auto', color: 'green' }}>50</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: '40%', width: '95%', padding: 10, backgroundColor: '#fff', marginTop: 20, marginLeft: 10}}>
                            <Image source={{ uri: 'https://img.jagranjosh.com/imported/images/E/Articles/JEE_Main_OMR_tips.jpg' }} style={styles.preview}></Image>
                            <View style={{flexDirection:'row', flexWrap:'wrap', marginTop: 10, backgroundColor: '#EBFDFF', padding: 15}}>
                            <View style={{flexBasis: '50%', alignItems: 'center', flexDirection:'row', justifyContent: 'center', borderRightColor: 'white', borderRightWidth: 3}}>
                            <Icon
                                style={{ color: 'green', marginTop: -2, textAlign: 'center' }}
                                name='refresh'
                                size={18}
                                activeOpacity={0.5}
                            />
                                <Text style={{marginLeft: 10}}>Re-Capture</Text>
                            </View>
                            <TouchableOpacity style={{flexBasis: '50%',  alignItems: 'center', flexDirection:'row', justifyContent: 'center'}}>
                            <Icon
                                style={{ color: 'red', marginTop: -2, textAlign: 'center' }}
                                name='close'
                                color='#008fc4'
                                size={19}
                                activeOpacity={0.5}
                                
                            />
                                <Text style={{textAlign: 'center', marginLeft: 10 }}>Delete</Text>
                            </TouchableOpacity>
                            </View>
                 
                 <Icon
                                style={{ position: 'absolute', right: 0, marginRight: '3%', marginTop: '5%'}}
                                name='expand'
                                size={18}
                                activeOpacity={0.5}
                                onPress={() => this.showSlider(true)}
                            />
                 </View>
                 <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.showSlider(false)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Image source={{ uri: 'https://img.jagranjosh.com/imported/images/E/Articles/JEE_Main_OMR_tips.jpg' }} style={styles.preview1}></Image>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.showSlider(false)}
              >
                  <Text>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
        width: '100%'
    },
    card: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: '#fff',
        maxWidth: '100%',
        maxHeight: '100%',
        borderColor: '#fff',
        borderWidth: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingRight: 50,
        paddingTop: 30,
        paddingBottom: 30
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    numberStyle: {
        flex: 1
    },
    textContainerStyle: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center' 
    },
    preview: {
        flex: 1,
        resizeMode: 'stretch'
    },
    preview1: {
        width: '100%',
        height: '80%',
        resizeMode: 'stretch',
    },
    centeredView: {

      },
      modalView: {
          marginTop: 50,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});