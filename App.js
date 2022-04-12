
import React from 'react'

import Login from './components/LoginInterface/Login'
import ClassInfo from './components/ClassInfo/ClassInfo'
import TakePicture from './components/TakePicture/TakePicture'
import Atteendence_Pdf from './components/Attendence_Cam_PDF/Atteendence_Pdf'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraModule from './components/CameraModule/CameraModule';
import store from './store'
import {Provider} from "react-redux"

// store.subscribe()
// import NewIntegratedCamera from './components/NewIntegratedCamera/NewIntegratedCamera'
const Stack=createNativeStackNavigator()
export default function App() {
 return(
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen  name="Login" component={Login} />
      <Stack.Screen  name="ClassInfo" component={ClassInfo} />
      <Stack.Screen  name="TakePicture" component={TakePicture} />
      {/* <Stack.Screen name="NewIntegratedCamera" component={NewIntegratedCamera}/> */}
      {/* <Stack.Screen  name="CameraModule" component={CameraModule} /> */}
      <Stack.Screen name='Attendence_Pdf' component={Atteendence_Pdf}/>
      </Stack.Navigator>
   </NavigationContainer>
</Provider>
 
  )
}