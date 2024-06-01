import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { View, Text,StyleSheet,Image } from 'react-native'
import imagePath from '../constants/imagePath';
// import Icon from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../components/CustomerDrawer';
import TabRoutes from './TabRoutes';
import navigationStrings from '../constants/navigationStrings';
import LogOut from '../Screens/LogOut';
import { Audios, Home, Live } from '../Screens';
import SavedNews from '../Screens/SavedNews';
import Categories from '../Screens/Categories';
import Support from '../Screens/Support';
import Feedback from '../Screens/Feedback';
import Notifications from '../Screens/Notifications';
import UserGuide from '../Screens/UserGuide';
import { createStackNavigator } from '@react-navigation/stack'
import LatestNews from '../Screens/LatestNews';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function DrawerNav() {
  return (
    <><Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "white",
        drawerActiveTintColor: "black",
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name={navigationStrings.NEWSPAPER}
        component={Home}
        options={{
          headerShown: true,
          title: 'Dashboard',
          drawerIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? 'purple' : '#924FF2'
                }}
                source={imagePath.icHome} />
            );
          }
        }} />
      <Drawer.Screen
        name={navigationStrings.SAVEDNEWS}
        component={SavedNews}
        options={{
          headerShown: true,
          title: 'Saved Summary',
          drawerIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? 'purple' : '#924FF2'
                }}
                source={imagePath.icSave} />
            );
          }
        }} />
      <Drawer.Screen
        name={navigationStrings.CATEGORIES}
        component={Categories}
        options={{
          headerShown: true,
          title: 'Categories',
          drawerIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? 'purple' : '#924FF2'
                }}
                source={imagePath.icDiversity} />
            );
          }
        }} />
      <Drawer.Screen
        name={navigationStrings.SUPPORT}
        component={Support}
        options={{
          headerShown: true,
          title: 'Support',
          drawerIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? 'purple' : '#924FF2'
                }}
                source={imagePath.icCustomer} />
            );
          }
        }} />
      <Drawer.Screen
        name={navigationStrings.FEEDBACK}
        component={Feedback}
        options={{
          headerShown: true,
          title: 'Feedback',
          drawerIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? 'purple' : '#924FF2'
                }}
                source={imagePath.icUserA} />
            );
          }
        }} />
      <Drawer.Screen
        name={navigationStrings.HISTORY}
        component={Notifications}
        options={{
          headerShown: true,
          title: 'Notifications',
          drawerIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? 'purple' : '#924FF2'
                }}
                source={imagePath.icnoti} />
            );
          }
        }} />
      <Drawer.Screen
        name={navigationStrings.USERGUIDE}
        component={UserGuide}
        options={{
          headerShown: true,
          title: 'User Guide',
          drawerIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? 'purple' : '#924FF2'
                }}
                source={imagePath.icuserUserMa} />
            );
          }
        }} />
      <Drawer.Screen
        name={navigationStrings.LOGOUT}
        component={LogOut}
        options={{
          headerShown: true,
          title: 'SigOut',
          drawerIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? 'purple' : '#924FF2'
                }}
                source={imagePath.icUserA} />
            );
          }
        }} />

    </Drawer.Navigator></>
  );
}

export default DrawerNav;
