import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, View } from 'react-native';
import { SvgUri, WithLocalSvg } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

export default class HomeComponent extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={[styles.welcomeText, styles.mrt1]}>Hello,</Text>
        <Text style={styles.welcomeText}>John Doe!</Text>
        <Text style={styles.actionText}>Here are Suggested Actions for You</Text>
        <View style={styles.card}>
          <View style={styles.innercont}>
            <LinearGradient colors={['#dff6ff', '#fce7ff']} style={styles.gradient} start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
              <WithLocalSvg style={styles.svgImage}
                asset={require('../../assets/icons/home_2.svg')}
              />
              <Text style={styles.btn}>Answer Script Registration</Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.innercont}>
            <LinearGradient colors={['#dff6ff', '#fce7ff']} style={styles.gradient} start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
              <WithLocalSvg style={styles.svgImage}
                asset={require('../../assets/icons/home_1.svg')}
              />
              <Text style={styles.btn}>View Exam Schedule</Text>
            </LinearGradient>
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
    height: '100%'
  },
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 15,
    backgroundColor: '#000',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: '5%',
    borderColor: '#fff',
    borderWidth: 5
  },
  btn: {
    color: '#00a0fd',
    fontSize: 18,
    marginLeft: 20,
    flex: 1,
    flexWrap: 'wrap',
    fontFamily: 'Roboto-Medium',
    lineHeight: 25,
  },
  svgImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: 10,
    marginBottom: 10
  },
  gradient: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlignVertical: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 9,
  },
  welcomeText: {
    fontFamily: 'Raleway-Bold',
    fontSize: 29,
    color: '#008FC4',
    marginLeft: 10
  },
  actionText: {
    fontFamily: 'Raleway-Regular',
    color: '#6AD3FC',
    marginLeft: 10,
    marginTop: 40
  },
  mrt1: {
    marginTop: 20
  }
});