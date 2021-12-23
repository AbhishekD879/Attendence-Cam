
import React from 'react'

import Login from './components/LoginInterface/Login'
import ClassInfo from './components/ClassInfo/ClassInfo'
import TakePicture from './components/TakePicture/TakePicture'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraModule from './components/CameraModule/CameraModule';
const Stack=createNativeStackNavigator()
export default function App() {
 return(
  <NavigationContainer>
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen  name="Login" component={Login} />
    <Stack.Screen  name="ClassInfo" component={ClassInfo} />
    <Stack.Screen  name="TakePicture" component={TakePicture} />
    <Stack.Screen  name="CameraModule" component={CameraModule} />
  </Stack.Navigator>
  
</NavigationContainer>
  )
}