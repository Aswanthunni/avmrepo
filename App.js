import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginComponent from './src/components/login/LoginComponent';
import HomeComponent from './src/components/Home/HomeComponent';
import RegisterComponent from './src/components/Register/RegisterComponent';
import ScanComponent from './src/components/Scan/ScanComponent';
import ImageCaptureComponent from './src/components/ImageCapture/ImageCaptureComponent';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Register"
            component={RegisterComponent}
            options={{
              title: 'Register',
            }}
          />
        <Stack.Screen
            name="ImageCapture"
            component={ImageCaptureComponent}
            options={{
              title: 'ImageCapture',
            }}
          />
        <Stack.Screen
            name="Scan"
            component={ScanComponent}
            options={{
              title: 'Scan',
            }}
          />
        <Stack.Screen
            name="Home"
            component={HomeComponent}
            options={{
              title: 'intelliExams',
            }}
          />
           <Stack.Screen
            name="Login"
            component={LoginComponent}
            options={{headerShown:false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;