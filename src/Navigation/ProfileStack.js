import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constants/navigationStrings";
import { Audios, EditProfile, Home, ProductDetails, Profile } from "../Screens";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name={navigationStrings.AUDIOS} component={Audios}/> */}

      </Stack.Navigator>
    );
  }