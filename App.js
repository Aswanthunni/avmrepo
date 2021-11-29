import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginComponent from './src/components/login/LoginComponent';
import HomeComponent from './src/components/Home/HomeComponent';
import RegisterComponent from './src/components/Register/RegisterComponent';
import ScanComponent from './src/components/Scan/ScanComponent';
import ImageCaptureComponent from './src/components/ImageCapture/ImageCaptureComponent';
import BagItemListComponent from './src/components/List/BagItemListComponent';
import ProfileComponent from './src/components/Profile/ProfileComponent';
import ViewSheetComponent from './src/components/ViewSheet/ViewSheetComponent'; 

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeComponent}
            options={{headerShown:false}}
          />
        <Stack.Screen
            name="Profile"
            component={ProfileComponent}
            options={{headerShown:false}}
          />
        <Stack.Screen
            name="ViewSheet"
            component={ViewSheetComponent}
            options={{headerShown:false}}
          />
        <Stack.Screen
            name="BagList"
            component={BagItemListComponent}
            options={{headerShown:false}}
          />
        <Stack.Screen
            name="Register"
            component={RegisterComponent} 
            options={{headerShown:false}}
          />
        <Stack.Screen
            name="Login"
            component={LoginComponent}
            options={{headerShown:false}}
          />
        <Stack.Screen
            name="Scan"
            component={ScanComponent}
            options={{headerShown:false}}
          />




        <Stack.Screen
            name="ImageCapture"
            component={ImageCaptureComponent}
            options={{
              title: 'ImageCapture',
            }}
          />



          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;