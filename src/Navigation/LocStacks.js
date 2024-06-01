import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constants/navigationStrings";
import { EditProfile, Home, NewsPaper, ProductDetails, Profile,LoginScreen } from "../Screens";
import LatestNews from "../Screens/LatestNews";
import SearchedNews from "../Screens/SearchedNews";
import Loc from "../Screens/Locs";
import BbcNews from "../Screens/BbcNews";
import CnnNews from "../Screens/CnnNews";

const Stack = createNativeStackNavigator();

export default function LocStacks() {
    return (
      <Stack.Navigator >
    <Stack.Screen component={Loc} name="Loc" />
    {/* <Stack.Screen name={navigationStrings.LATESTNEWS} component={SearchedNews} /> */}
      </Stack.Navigator>
    );
  }