import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View , TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from 'react-native-elements';
import { SpeedDial } from 'react-native-elements';

export default class BagItemListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    goBack ()  {
        this.props.navigation.goBack(null);
      }
  
    onScan() {
        this.props.navigation.navigate('Scan');
    }

    onCapture() {
        this.props.navigation.navigate('ImageCapture');
    }

    onImageClick() {
        this.props.navigation.navigate('ViewSheet');
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
                <View style={{ flexDirection: 'row', flexWrap:'wrap'}}>
                {initialArr.map((data) => {
         return (
            <TouchableOpacity style={{alignItems: 'center', flexBasis: '25%', marginTop: 10 }} key={data.id} onPress={() =>  this.onImageClick()}>
            <Image source={require('../../assets/icons/Image7.png')} />
        </TouchableOpacity>
         );
      })}
                </View>
                <SpeedDial
  isOpen={this.state.open}
  icon={{ name: 'add', color: '#fff' }}
  openIcon={{ name: 'close', color: '#fff' }}
  onOpen={() => this.setState({ open: true })}
  onClose={() => this.setState({ open: false })}
  ViewComponent={LinearGradient}
  linearGradientProps={{
    colors: ['#9324a3', '#008fc4'],
    start: { y: 0.0, x: 1.0 },
    end: { x: 0.0, y: 1.0 },
}}
>
  <SpeedDial.Action
    title="Capture Facing Sheet"
    onPress={() => this.onCapture()}
    icon={{ name: 'add', color: '#fff' }}
    ViewComponent={LinearGradient}
    linearGradientProps={{
      colors: ['#9324a3', '#008fc4'],
      start: { y: 0.0, x: 1.0 },
      end: { x: 0.0, y: 1.0 },
  }}
    
  />
  <SpeedDial.Action
    title="Scan Bag"
    onPress={() => this.onScan()}
    icon={{ name: 'add', color: '#fff' }}
    ViewComponent={LinearGradient}
    linearGradientProps={{
      colors: ['#9324a3', '#008fc4'],
      start: { y: 0.0, x: 1.0 },
      end: { x: 0.0, y: 1.0 },
  }}
  />
</SpeedDial>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBFDFF',
        height: '100%'
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
    }
});