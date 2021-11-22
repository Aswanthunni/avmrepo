import React, { Component, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, View, TextInput, Pressable, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import LinearGradient from 'react-native-linear-gradient';

const RegisterComponent = () => {

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
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    const onSuccess = e => {
        alert(e.data);
        setTimeout(() => {
            this.scanner.reactivate()
        }, 2000);
      };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
        padding: 10}}>
            <View style={{marginTop: 10}}>
                <Text>Exam Date</Text>
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
                <Text>Exam Series</Text>
                <TextInput style={styles.input2} value="Mid-Term Sem V" />
            </View>
            <View  style={{marginTop: 10, zIndex: 1000}}>
                <Text>Subject</Text>
                <DropDownPicker
                    zIndexInverse={1000}
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
                    shadowRadius: 2, zIndex: 1 }}
                    style={{ borderColor: 'transparent', elevation: 10, borderRadius: 0, maxWidth: '100%', shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.4, marginTop: 10,
                    shadowRadius: 2,zIndex: 1  }}
                />
            </View>
            </View>

            <CollapsibleView title={
                <View>
                <Text style={{ color: "black", fontSize: 18, marginTop: 10, marginLeft: 10 }}>Bag Information</Text>
                <Text style={{ color: '#04BBFF', marginTop: 10, marginLeft: 10  }}>10 Bags assigned</Text>
                </View>}
                    collapsibleContainerStyle = {{ backgroundColor: '#dff6ff', }} 
                    style = {{backgroundColor: '#dff6ff', borderColor: 'transparent', elevation: 10, marginTop: 15, maxWidth: '100%', shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.4,
                    shadowRadius: 2, borderRadius: 5, alignItems: 'flex-start', padding: 10}}
                    arrowStyling={{ size: 20, rounded: true, thickness: 4, color: "#04BBFF"}}
                >
      <Text style={{marginTop: 20}}>hey there!</Text>
    </CollapsibleView>

    <View style={{padding: 10}}>
                <TouchableOpacity style={styles.wrapper}>
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