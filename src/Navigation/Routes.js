// import { View, Text,StyleSheet } from 'react-native'
// import React from 'react'
// import {Live, Profile} from '../Screens';
// import { Home } from '../Screens';
// import { Explore} from '../Screens';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import navigationStrings from '../constants/navigationStrings';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MainStack from './MainStack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import {Landing} from '../Screens';
// const Drawer = createDrawerNavigator();
//  const Stack = createNativeStackNavigator();
// export default function Routes() {
//   return (
//     <NavigationContainer>
//        {MainStack(Stack)} 
//       <Drawer.Navigator 
//       screenOptions={{headerShown:false}}
//       >
// <Drawer.Screen component={Landing} name={navigationStrings.LANDING}/>
         
//       </Drawer.Navigator>
      
//   </NavigationContainer>
//   )
// }
// const styles=StyleSheet.create({
//     container:{
//       flex:1,
//       justifyContent:'center',
//       alignItems:'center',
//       backgroundcolor:'black'
//     }
//   })
import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from '../core/theme'
import LoginScreen from '../Screens/LoginScreen'
import SignUp from '../Screens/SignUp'
import { Landing, Profile } from '../Screens'
import Home from '../Screens/Home'
import TabRoutes from './TabRoutes'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createStackNavigator()
import MainStack from './MainStack'
import DrawerContent from '../components/CustomerDrawer'
const Drawer = createDrawerNavigator();
import navigationStrings from '../constants/navigationStrings';
import CustomerDrawer from '../components/CustomerDrawer'

function Routes() {
  return (
    
          <TabRoutes/>
    
     
  )
}

export default Routes
