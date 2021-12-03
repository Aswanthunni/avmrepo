import React, { Component, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, View, TextInput, Pressable, TouchableOpacity, Image } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import LinearGradient from 'react-native-linear-gradient';
import { Header } from 'react-native-elements';

const RegisterComponent = ({navigation}) => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Maths', value: 'maths' },
        { label: 'Science', value: 'science' }
    ]);

      const initialArr = [
        {
          id: 1,
          color: "blue",
          text: "text1"
        },
        {
          id: 2,
          color: "red",
          text: "text2"
        },
        {
          id: 3,
          color: "red",
          text: "text2"
        },
        {
          id: 4,
          color: "red",
          text: "text2"
        },
        {
          id: 5,
          color: "red",
          text: "text2"
        },
        {
          id: 6,
          color: "red",
          text: "text2"
        },
        {
            id: 7,
            color: "red",
            text: "text2"
          }
      ];

      function goBack ()  {
        navigation.goBack(null);
      }

      function onReg() {
        navigation.navigate('Scan');
      }

      function itemonReg() {
        navigation.navigate('BagList');
    }

    return (
        <SafeAreaView style={styles.container}>
                  <Header 
        placement="left"
        leftComponent={{ icon: 'chevron-left', color: '#fff', onPress:() => goBack() }}
        centerComponent={{ text: 'Answer Script Registration', style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#9324a3', '#008fc4'],
          start:{ y: 0.0, x: 1.0 },
          end: { x: 0.0, y: 1.0 },
        }}
        containerStyle={{marginTop:Platform.OS === 'ios' ? -50 : 10}}
      />
            <View style={{
        padding: 10}}>
            <View style={{marginTop: 10}}>
                <Text style={{color: '#000'}}>Exam Date</Text>
                <Pressable onPress={showDatePicker}  style={{marginTop: 10}}>
                    <View pointerEvents="none" style={styles.passwordContainer}>
                        <TextInput style={styles.input} value="12-30-2190" />
                        <Icon
                            name='calendar'
                            color='#008fc4'
                            size={20}
                            style={styles.iconDate}
                        />
                    </View>
                </Pressable>
            </View>
            <View  style={{marginTop: 10}}>
                <Text style={{color: '#000'}}>Exam Series</Text>
                <TextInput style={styles.input2} value="Mid-Term Sem V" />
            </View>
            <View  style={{marginTop: 10, zIndex: 99999999999}}>
                <Text style={{color: '#000'}}>Subject</Text>
                <DropDownPicker
                    dropDownDirection = "TOP"
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Select an item"
                    textStyle={{ color: '#04BBFF' }}
                    arrowIconStyle={{ tintColor: '#04BBFF' }}
                    dropDownContainerStyle={{ borderColor: 'transparent', elevation: 10, marginTop: 15, maxWidth: '100%', shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.4,
                    shadowRadius: 2}}
                    style={{ borderColor: 'transparent', elevation: 10, borderRadius: 0, maxWidth: '100%', shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.4, marginTop: 10,
                    shadowRadius: 2 }}
                />
            </View>
            </View>

            <CollapsibleView title={
                <View>
                <Text style={{ color: "black", fontSize: 15, marginTop: 10, marginLeft: 10 }}>Bag Information</Text>
                <Text style={{ color: '#04BBFF', marginTop: 6, marginLeft: 10, fontSize: 12  }}>10 Bags assigned</Text>
                </View>}
                    collapsibleContainerStyle = {{ backgroundColor: '#dff6ff', }} 
                    style = {{backgroundColor: '#dff6ff', borderColor: 'transparent', elevation: 10, marginTop: 15, maxWidth: '100%', shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.4,
                    shadowRadius: 2, borderRadius: 5, alignItems: 'flex-start', padding: 10}}
                    arrowStyling={{ size: 20, rounded: true, thickness: 4, color: "#04BBFF"}}
                >
                    <View  style={{ flexDirection: 'row', flexWrap:'wrap', marginTop: 10}}>

                    {initialArr.map((data) => {
                        return (
                            <>
                            <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', flexBasis: '45%', paddingLeft: 10, paddingTop: 5, paddingBottom: 5, borderRadius: 10, marginTop: 10}} onPress={itemonReg}>
                            <View>
                            <Image source={require('../../assets/icons/qrsample.png')} style={{height: 40, width: 40}} />
                            </View>
                            <View style={{marginLeft: 10, marginTop:Platform.OS === 'ios' ? 5 : 0}}>
                            <Text style={{color: '#000'}}>10987643</Text>
                        <Text style={{fontSize: 10, marginTop: 2, color: '#000'}}>50 Sheets</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{flexBasis: '5%'}}></View>
                            </>

                        );
                    })}
                    </View>
    </CollapsibleView>

    <View style={{padding: 10}}>
                <TouchableOpacity style={styles.wrapper} onPress={onReg}>
          <LinearGradient colors={['#008fc4', '#9324a3']} style={styles.gradient} start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
            <Text style={styles.btn}>Start Registration</Text>
          </LinearGradient>
        </TouchableOpacity>
                </View>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBFDFF',
        height: '100%'
    },
    input: {
        height: 50,
        borderWidth: 0,
        backgroundColor: '#dff6ff',
        flex: 1,
        color: '#04bbff',
        paddingLeft: 10
    },

    passwordContainer: {
        flexDirection: 'row',
    },

    iconDate: {
        position: 'absolute',
        left: 'auto',
        right: 10,
        top: '30%'
    },
    input2: {
        height: 50,
        borderWidth: 0,
        backgroundColor: '#dff6ff',
        color: '#04bbff',
        paddingLeft: 10,
        marginTop: 10
    },
    gradient: {
        flex: 1,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      wrapper: {
        width: '100%',
        height: 50,
        textAlignVertical: 'center',
        marginTop: 20,
      },
      btn: {
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
      }
});

export default RegisterComponent;