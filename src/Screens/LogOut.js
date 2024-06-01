import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import  {useState, useEffect} from 'react';
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import TabRoutes from '../Navigation/TabRoutes'
import { NavigationContainer } from '@react-navigation/native'
import navigationStrings from '../constants/navigationStrings'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { signOut } from 'firebase/auth';
import {auth} from '../../firebase';
import {View, StyleSheet,Image} from 'react-native';
const Drawer = createDrawerNavigator();


export default function LogOut({ navigation }) {
 
const logout=()=>{
  signOut(auth).then(()=>{
navigation.replace("Landing")
  })
  .catch((error)=>{

  })
}
   
  
  return (
    <Background>
      <Logo />
      <Header>Are you Sure to exit?</Header>
      <Paragraph>
      Wherever News Breaks, Whatever It Takes
      </Paragraph>
      <Button
        mode="contained"
        onPress={logout}
        style={{marginTop: 10,width: '35%'}}>
       Logout
      </Button>
    </Background>
  )}

