import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Audios, Live, NewsPaper, Profile, Summary} from '../Screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import imagePath from '../constants/imagePath';
import DrawerNav from './DrawerNav';
import LatestNews from '../Screens/LatestNews';
import TrendingNews from '../Screens/TrendingNews';
import SearchedNews from '../Screens/SearchedNews';
import Loc from '../Screens/Locs';
import ForYou from '../Screens/ForYou';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DrawerNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TrendingNews"
        component={TrendingNews}
        options={{headerShown: false}}

        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />
      <Stack.Screen
        name="SearchedNews"
        component={SearchedNews}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
      <Stack.Screen
        name="LatestNews"
        component={LatestNews}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default function TabRoutes() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          presentation: 'card',
          tabBarActiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Tab.Screen
          name={navigationStrings.HOME}
          component={HomeStacks}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={{
                    tintColor: focused ? 'purple' : '#924FF2',
                  }}
                  source={imagePath.icHome}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={navigationStrings.SUMMARY}
          component={Summary}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={{
                    tintColor: focused ? 'purple' : '#924FF2',
                  }}
                  source={imagePath.icSummary}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="ForYou"
          component={ForYou}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={{
                    tintColor: focused ? 'purple' : '#924FF2',
                  }}
                  source={imagePath.cat}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={navigationStrings.AUDIOS}
          component={Audios}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={{
                    // width:60,
                    // height:
                    tintColor: focused ? 'purple' : '#924FF2',
                  }}
                  source={imagePath.icAudio}
                />
              );
            },
          }}
        />
        {/* <Tab.Screen name={navigationStrings.SUMMARY} component={HomeStack} options={{ tabBarIcon:({focused}) => {
    return (
    <Image
    style={{
        tintColor:focused ? 'blue': 'gray'
    }}
    source={imagePath.icSummary} />
    )} }}/> */}
      </Tab.Navigator>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundcolor: 'black',
  },
});
