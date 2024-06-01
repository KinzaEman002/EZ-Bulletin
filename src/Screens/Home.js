import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import Swiper from 'react-native-swiper';
import {theme} from '../core/theme';
import Background from '../components/Background';
import {NavigationHelpersContext} from '@react-navigation/native';
import Drawers from './Drawers';
import firebase from 'firebase/compat/app';
import {ref, set, push, onValue, get, child} from 'firebase/database';

import {useState} from 'react';
const Home = ({navigation}) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [lastClicked, setLastClicked] = useState('');
  const handleButtonClick = () => {};

  const LatestNews = async () => {
    try {
      // const LatestDataRef = firebase.database().ref('LatestData');
      // const currentTime = new Date().getTime();
      // // Set the clicks and current time for the new document
      // const newLatestData = {
      //   clicks: 1, // Initial clicks value
      //   time: currentTime, // Current server timestamp
      // };
      // // Generate a unique key for the new document
      // const newDocumentRef = push(LatestDataRef);
      // // Set the new document with the data
      // await set(newDocumentRef, newLatestData);
      console.log('Latest news added.');
      navigation.replace('LatestNews');
    } catch (error) {
      console.error('Error adding latest news:', error);
    }
  };

  const TrendingNews = async () => {
    console.log('vtb is ckicjed');
    try {
      // const TrendingDataRef = firebase.database().ref('TrendingData');
      // const currentTime = new Date().getTime();
      // // Set the clicks and current time for the new document
      // const newTrendingData = {
      //   clicks: 1, // Initial clicks value
      //   time: currentTime, // Current server timestamp
      // };
      // // Generate a unique key for the new document
      // const newDocumentRef = push(TrendingDataRef);
      // // Set the new document with the data
      // await set(newDocumentRef, newTrendingData);
      // console.log('Latest news added.');
      navigation.replace('TrendingNews');
    } catch (error) {
      console.log('wweewewewe====');

      console.error('Error adding latest news:', error);
    }
  };

  const SearchedNews = async () => {
    try {
      // const SearchedDataRef = firebase.database().ref('SearchedData');
      // const currentTime = new Date().getTime();
      // // Set the clicks and current time for the new document
      // const newSearchedData = {
      //   clicks: 1, // Initial clicks value
      //   time: currentTime, // Current server timestamp
      // };
      // // Generate a unique key for the new document
      // const newDocumentRef = push(SearchedDataRef);
      // // Set the new document with the data
      // await set(newDocumentRef, newSearchedData);
      console.log('Searched news click added.');
      navigation.replace('SearchedNews');
    } catch (error) {
      console.error('Error adding searched news click:', error);
    }
  };
  // const LatestNews = () => {
  //   setCount(count + 1);
  //    firebase.database().ref('Latest').push({
  //     count: count + 1,
  //     timestamp: Date.now()
  //   });
  // };
  // const TrendingNews = () => {
  //   setCount2(count + 1);
  //   firebase.database().ref('Trending').push({
  //    count2: count2 + 1,
  //    timestamp: Date.now()
  //  });
  //   navigation.replace('TrendingNews');
  // };
  // const SearchedNews = () => {
  //   setCount1(count + 1);
  //   firebase.database().ref('Searched').push({
  //    count1: count1 + 1,
  //    timestamp: Date.now()
  //  });
  //   navigation.replace('SearchedNews');
  // };
  return (
    <View style={styles.container}>
      <Background>
        <StatusBar style="auto" />
        <Button
          title={`Clicked ${count2} times`}
          onPress={TrendingNews}
          mode="contained"
          style={{marginTop: 10}}>
          Trending News
        </Button>
        <Swiper loop autoplay>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMij4U5yopHHemvHV5D-xxuvAoIu8lSwXwgg&usqp=CAU',
            }}
            resizeMode="cover"
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYIEOcOKa7-vKM4CPV_c-kBioDcHcdA-0NoMT6OZPVWCDATXgpJK6hfA4LIZPFy9qHfDY&usqp=CAU',
            }}
            resizeMode="cover"
            style={styles.image}
          />
        </Swiper>
        <Button
          title={`Clicked ${count1} times`}
          onPress={SearchedNews}
          mode="contained"
          style={{marginTop: 10}}>
          Location Based News
        </Button>
        <Swiper loop autoplay>
          <Image
            source={{
              uri: 'https://c1.wallpaperflare.com/preview/21/93/67/news-yellow-newspaper-3d.jpg',
            }}
            resizeMode="cover"
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3IjRx5rpE5OGHpRZ7dwtEvt9B6EJRRE5pw&usqp=CAU',
            }}
            resizeMode="cover"
            style={styles.image}
          />
        </Swiper>
        <Button
          title={`Clicked ${count} times`}
          onPress={LatestNews}
          mode="contained"
          style={{marginTop: 10}}>
          Latest News
        </Button>
        <Swiper loop autoplay>
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2020/04/16/18/02/old-couple-5051770__340.jpg',
            }}
            resizeMode="cover"
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGkKRKEoaiv8A4eM_LRdwzrgvBaTU9NTiPw&usqp=CAU',
            }}
            resizeMode="cover"
            style={styles.image}
          />
        </Swiper>
      </Background>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#10232A',
    // alignItems:"center",
    // justifyContent:"center"
  },

  tab1: {
    backgroundColor: 'red',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  container2: {
    flex: 2,
    backgroundColor: '#10232A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 3,
    backgroundColor: '#10232A',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
});
