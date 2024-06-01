import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import navigationStrings from '../constants/navigationStrings';
import NewsPaper from './NewsPaper';
import DrawerNav from '../Navigation/DrawerNav';
const Drawer = createDrawerNavigator();
const  Drawers=()=>{
    return(
      <NavigationContainer>
      <Drawer.Navigator   screenOptions={{ headerShown: false }}>
      {/* {MainStack(Stack)} */}
      
      {/* <Drawer.Screen component={Landing} name={navigationStrings.LANDING} screenOptions={{ headerShown: false }}/> */}
                 <Drawer.Screen component={DrawerNav} name={navigationStrings.NEWSPAPER}  /> 
                 {/* <Drawer.Screen component={LogOut} name={navigationStrings.LOGOUT}  />  */}
      </Drawer.Navigator>
       </NavigationContainer>
   
    )
  
}
export default Drawers