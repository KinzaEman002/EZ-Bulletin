import React from 'react';
import navigationStrings from '../constants/navigationStrings';
// import { Audios, Home, Live, NewsPaper, Profile } from '../Screens'
import TabRoutes from './TabRoutes';
import {Landing, PhoneSignUp} from '../Screens';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../Screens/LoginScreen';
// import { NavigationContainer } from '@react-navigation/native'
// import Routes from './Routes'
import {createStackNavigator} from '@react-navigation/stack';
// import DrawerNav from './DrawerNav'
import SignUp from '../Screens/SignUp';
import LatestNews from '../Screens/LatestNews';
import NewsDetails from '../Screens/NewsDetails';
import CategoryNews from '../Screens/CategoryNews';
import SplashScreen from '../Screens/SplashScreen';
import BbcNews from '../Screens/BbcNews';
import AljNews from '../Screens/AljNews';
import CnnNews from '../Screens/CnnNews';
import SearchedNews from '../Screens/SearchedNews';
import ForYou from '../Screens/ForYou';

// export default function (Stack) {
//   return (
//       <>

//           <Stack.Screen
//               name={navigationStrings.LANDING}
//               component={Landing}
//           />
//          <Routes/>

//       </>
//   )
// }
const Stack = createStackNavigator();
// Navigator, Screen, Group

function MainStack() {
  console.log(Stack);
  return (
    <Stack.Navigator
      screenOptions={{}}
      initialRouteName={navigationStrings.SPLASHSCREEN}>
      {/* <Stack.Screen
        name={navigationStrings.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={({route}) => ({
          headerTintColor: COLORS.white,
          // headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: route.params.userId,
        })}
      /> */}
      <Stack.Screen
        name={navigationStrings.SPLASHSCREEN}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.LANDING}
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.LOGINSCREEN}
        component={LoginScreen}
      />
      <Stack.Screen name={navigationStrings.SIGNUP} component={SignUp} />
      <Stack.Screen
        name={navigationStrings.PHONESIGNUP}
        component={PhoneSignUp}
      />
      <Stack.Screen
        name={navigationStrings.NEWSDETAILS}
        component={NewsDetails}
      />
      <Stack.Screen
        name={navigationStrings.CATEGORYNEWS}
        component={CategoryNews}
      />
      <Stack.Screen name={navigationStrings.FORYOU} component={ForYou} />
      <Stack.Screen
        name={navigationStrings.SEARCHEDNEWS}
        component={SearchedNews}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name={navigationStrings.HOME}
        component={TabRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.LOC}
        component={TabRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BbcNews"
        component={BbcNews}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AljNews"
        component={AljNews}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CnnNews"
        component={CnnNews}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
