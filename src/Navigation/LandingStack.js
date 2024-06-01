import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constants/navigationStrings";
import { EditProfile, Home, Landing, Live, ProductDetails } from "../Screens";
import LoginScreen from "../Screens/LoginScreen";
import LogOut from "../Screens/LogOut";
import SearchedNews from "../Screens/SearchedNews";

const Stack = createNativeStackNavigator();

export default function LandingStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={navigationStrings.LANDING} component={Landing} /> 
        <Stack.Screen name={navigationStrings.LOGINSCREEN} component={LoginScreen} /> 
        <Stack.Screen name={navigationStrings.LATESTNEWS} component={SearchedNews} />
      </Stack.Navigator>
    );
  }