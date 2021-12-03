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
import { createDrawerNavigator } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import {LogBox } from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
LogBox.ignoreLogs(['Reanimated 2']);
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name="Login"
            component={LoginComponent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ImageCapture"
            component={ImageCaptureComponent}
            options={{
              title: 'ImageCapture',
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Scan"
            component={ScanComponent}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Register"
            component={RegisterComponent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BagList"
            component={BagItemListComponent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileComponent}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeComponent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ViewSheet"
            component={ViewSheetComponent}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

function Root() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerBackground: () => <LinearGradient
          style={{ flex: 1 }}
          colors={['#9324a3', '#008fc4']}
          start={{ y: 0.0, x: 1.0 }}
          end={{ x: 0.0, y: 1.0 }}
        />,
        drawerStyle: {
          justifyContent: 'flex-start'
        },
        headerTitleAlign: 'left',
        headerTitleStyle: {
          color: 'white',
          fontWeight: 'bold',
          fontSize: 18
        },
        headerTintColor: '#fff'
      }}
    >
      <Drawer.Screen name="Home" component={HomeComponent} />
      <Drawer.Screen name="Profile" component={ProfileComponent} />
    </Drawer.Navigator>
  );
}
