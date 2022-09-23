import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import Slider1 from './Screens/Slider1';
import Slider2 from './Screens/Slider2';
import Slider3 from './Screens/Slider3';
import DashBoard from './Screens/DashBoard';
import Login from './Screens/Login';
import Chat from './Screens/Chat';
import Profile from './Screens/Profile';
import ChatBox from './Screens/ChatBox';
import Form from './Screens/Form';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Slider1" component={Slider1} />
        <Stack.Screen name="Slider2" component={Slider2} />
        <Stack.Screen name="Slider3" component={Slider3} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ChatBox" component={ChatBox} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({});