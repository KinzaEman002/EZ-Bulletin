import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Swiper from 'react-native-swiper'
import { theme } from '../core/theme'
import Background from '../components/Background'
import { NavigationHelpersContext } from '@react-navigation/native'
import Drawers from './Drawers'
import firebase from 'firebase/compat/app';
import { ref, set, push, onValue, get, child } from "firebase/database";

import { useState } from 'react'
import CnnNews from './CnnNews'
import AljNews from './AljNews'
const Loc = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [lastClicked, setLastClicked] = useState('');
  const handleButtonClick = () => {

  };

  const CnnNews = async () => {
      navigation.replace('CnnNews');

  };

  const BbcNews = async () => {
      navigation.replace('BbcNews');

  };

  const AljNews = async () => {
  
      navigation.replace('AljNews');

  };

  return (

    <View style={styles.container}>
      <Background>

        <StatusBar style="auto" />
        <Button
          title={`Clicked ${count2} times`} onPress={BbcNews}
          mode="contained"

          style={{ marginTop: 10 }}>
      BbcNews
        </Button>
        <Swiper
          loop
          autoplay
        >

          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMij4U5yopHHemvHV5D-xxuvAoIu8lSwXwgg&usqp=CAU' }}
            resizeMode="cover"
            style={styles.image} />
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYIEOcOKa7-vKM4CPV_c-kBioDcHcdA-0NoMT6OZPVWCDATXgpJK6hfA4LIZPFy9qHfDY&usqp=CAU' }}
            resizeMode="cover"
            style={styles.image} />
        </Swiper>
        <Button
          title={`Clicked ${count1} times`} onPress={CnnNews}
          mode="contained"

          style={{ marginTop: 10 }}>
         CNN News
        </Button>
        <Swiper

          loop
          autoplay
        >

          <Image
            source={{ uri: 'https://c1.wallpaperflare.com/preview/21/93/67/news-yellow-newspaper-3d.jpg' }}
            resizeMode="cover"
            style={styles.image} />
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3IjRx5rpE5OGHpRZ7dwtEvt9B6EJRRE5pw&usqp=CAU' }}
            resizeMode="cover"
            style={styles.image} />
        </Swiper>
        <Button
          title={`Clicked ${count} times`} onPress={AljNews}
          mode="contained"

          style={{ marginTop: 10 }}>
          Aljazera News
        </Button>
        <Swiper
          loop
          autoplay
        >
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2020/04/16/18/02/old-couple-5051770__340.jpg' }}
            resizeMode="cover"
            style={styles.image} />
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGkKRKEoaiv8A4eM_LRdwzrgvBaTU9NTiPw&usqp=CAU' }}
            resizeMode="cover"
            style={styles.image} />
        </Swiper></Background>
    </View>
  )
}

export default Loc
const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#10232A",
    // alignItems:"center",
    // justifyContent:"center"
  },

  tab1: {
    backgroundColor: "red",
  },


  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  container2: {
    flex: 2,
    backgroundColor: "#10232A",
    alignItems: "center",
    justifyContent: "center"
  },
  container1: {
    flex: 3,
    backgroundColor: "#10232A",
    alignItems: "center",
    justifyContent: "center"
  },
  // container1:{
  //   flex:1,
  //   // marginBottom:160
  //   // backgroundColor:"#fff",
  //   // alignItems:"center",
  //   // justifyContent:"center",

  //   },
  image: {
    // flex:1,
    // justifyContent:"center",
    // alignItems:"center",
    width: 360,
    marginLeft: 1,
    height: 120,


  }
})