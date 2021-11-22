import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { SvgUri, WithLocalSvg } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

export default class LoginComponent extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textSign}>Sign In</Text>
        <WithLocalSvg style={styles.svgImage}
          asset={require('../../assets/icons/sign_in.svg')}
        />
        <Text style={styles.emalLabel}>User name or e-mail address</Text>
        <TextInput
          style={styles.input}
        />
        <Text style={styles.emalLabel}>Password</Text>
        <TextInput
          style={styles.input}
        />
        <Text style={styles.forgot}>Forgot your password?</Text>
        <TouchableOpacity style={styles.wrapper}>
          <LinearGradient colors={['#008fc4', '#9324a3']} style={styles.gradient} start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
            <Text style={styles.btn}>Sign In</Text>
          </LinearGradient>
        </TouchableOpacity>

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
  textSign: {
    fontFamily: 'Raleway-Bold',
    fontSize: 29,
    color: '#008FC4',
    marginTop: 20,
    marginLeft: 10
  },
  svgImage: {
    alignSelf: 'center',
    maxWidth:"45%",
    maxHeight:"45%",
    marginTop: 35,
    marginBottom: 50
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: '#fff'
  },
  emalLabel: {
    fontSize: 11,
    paddingLeft: 11
  },
  forgot: {
    fontSize: 9,
    paddingLeft: 11,
    color: '#04BBFF'
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    height: 50,
    textAlignVertical: 'center',
    marginTop: 20
  },
  btn: {
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  }
});