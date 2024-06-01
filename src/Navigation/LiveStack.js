import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constants/navigationStrings";
import { EditProfile, Home, Live, ProductDetails } from "../Screens";
import SearchedVideo from "../Screens/SearchedVideo";
import TrendingVideo from "../Screens/TrendingVideo";
import LatestVideo from "../Screens/LatestVideo";

const Stack = createNativeStackNavigator();

export default function LiveStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={navigationStrings.LIVE} component={Live} /> 
        <Stack.Screen
  name="SearchedVideo"
  component={SearchedVideo}
  options={({route}) => ({
    title: route.params?.title,
  })}
/>
<Stack.Screen
  name="LatestVideo"
  component={LatestVideo}
  options={({route}) => ({
    title: route.params?.title,
  })}
/>
<Stack.Screen
  name="TrendingVideo"
  component={TrendingVideo}
  options={({route}) => ({
    title: route.params?.title,
  })}
/>
      </Stack.Navigator>
    );
  }