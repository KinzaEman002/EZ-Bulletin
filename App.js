// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import navigationStrings from './src/constants/navigationStrings';
import {StackActions} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
// // import * as React from 'react';
import {Drawers, LoginScreen} from './src/Screens';
// // import Routes from './src/Navigation/Routes'
// // import { NavigationContainer } from '@react-navigation/native';
// // const Stack = createNativeStackNavigator();
// // const App = () => {
// //   return (
// //     <><NavigationContainer><Stack.Screen
// //     name={navigationStrings.LANDING}
// //    component={LoginScreen}
// //     screenOptions={{headerShown:true}} />
// //    </NavigationContainer></>
// //   )

// // }

// // export default App
// // const styles=StyleSheet.create({
// //   container:{
// //     flex:1,
// //     justifyContent:'center',
// //     alignItems:'center',
// //     backgroundcolor:'black'
// //   }
// // })

// import React from 'react'
// import { Provider } from 'react-native-paper'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import { theme } from './src/core/theme'
// import LoginScreen from './src/Screens/LoginScreen'
// import SignUp from './src/Screens/SignUp'
// import { Home, Landing, NewsPaper } from './src/Screens'
// import LogOut from './src/Screens/LogOut'
// import ResetPasswordScreen from './src/Screens/ResetPasswordScreen'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import navigationStrings from './src/constants/navigationStrings';
// import Routes from './src/Navigation/Routes'
// const Drawer = createDrawerNavigator();
// // import {
// //   Landing,
// //   LoginScreen,
// //   SignUp,
// //   ResetPasswordScreen,
// //   Dashboard,
// // } from './src/Screens'

// const Stack = createStackNavigator()

// export default function App() {
//   return (
//     <Provider theme={theme}>

//       <NavigationContainer>

//         <Stack.Navigator
//           initialRouteName="Landing"
//           screenOptions={{
//             headerShown: false,
//           }}
//         >
//           {Routes}
//           <Stack.Screen name="Landing" component={Landing} />
//           <Stack.Screen name="LoginScreen" component={LoginScreen}/>
//           <Stack.Screen name="Home" component={Home} />
//           <Stack.Screen name="SignUp" component={SignUp} />
//           <Stack.Screen name="LogOut" component={LogOut} />
//           <Stack.Screen
//             name="ResetPasswordScreen"
//             component={ResetPasswordScreen}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   )
// }
// // import React from 'react'
// // import { Provider } from 'react-native-paper'
import navigationStrings from './src/constants/navigationStrings';
import {createStackNavigator} from '@react-navigation/stack';
// // import { theme } from './src/core/theme'
// // import LoginScreen from './src/Screens/LoginScreen'
// // import SignUp from './src/Screens/SignUp'
// // import { Landing } from './src/Screens'
// // import LogOut from './src/Screens/LogOut'
// // import ResetPasswordScreen from './src/Screens/ResetPasswordScreen'

// // import { NavigationContainer } from '@react-navigation/native'
// // import TabRoutes from './src/Navigation/TabRoutes'
// // import Routes from './src/Navigation/Routes';
// // import MainStack from './src/Navigation/MainStack';

const Stack = createStackNavigator();
// // export default function App() {
//   // return (
//   //   <Provider theme={theme}>

//   //   </Provider>
//   //           /*

//   //           >
//   //               <Drawer.Screen component={Landing} name={navigationStrings.LANDING} screenOptions={{ headerShown: false }}/>
//   //                 <Drawer.Screen component={LoginScreen} name={navigationStrings.LOGINSCREEN} />

//   //           </Drawer.Navigator> */

//   // )}
// // import navigationStrings from './src/constants/navigationStrings';
// // import { createDrawerNavigator } from '@react-navigation/drawer';
// // import 'react-native-gesture-handler';
// // import 'react-native-gesture-handler';
// // import { View, Text, StyleSheet} from 'react-native'
// // import React from 'react'
// // import TabRoutes from './src/Navigation/TabRoutes';
// // import Routes from './src/Navigation/Routes'
import {NavigationContainer} from '@react-navigation/native';
// // const Drawer = createDrawerNavigator();
// // import CustomerDrawer from './src/components/CustomerDrawer';
// // import { Home, Landing, NewsPaper } from './src/Screens';
// // const App = () => {
// //   return (
// //     <>
// //     <NavigationContainer><Drawer.Navigator screenOptions={{
// //       headerShown: true,
// //     }}
// //       drawerContent={(props) => <CustomerDrawer {...props} />}
// //     >
// //        <Drawer.Screen component={TabRoutes} name={navigationStrings.HOME} />
// //       <Drawer.Screen component={Home} name="Landing" />
// //       <Drawer.Screen component={NewsPaper} name="NewsPaper" />
// //       {/* {MainStack(Stack)}  */}
// //     </Drawer.Navigator></NavigationContainer></>
// //   )

// // }

// // export default App
// // const styles=StyleSheet.create({
// //   container:{
// //     flex:1,
// //     justifyContent:'center',
// //     alignItems:'center',
// //     backgroundcolor:'black'
// //   }
// // })
import Routes from './src/Navigation/Routes';
import {Landing} from './src/Screens';
import {LogBox} from 'react-native';
import MainStack from './src/Navigation/MainStack';
import TabRoutes from './src/Navigation/TabRoutes';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
 
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
