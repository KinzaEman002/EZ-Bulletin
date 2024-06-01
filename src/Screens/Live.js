import { View, Text,StyleSheet ,Image,TouchableOpacity,StatusBar} from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Swiper from 'react-native-swiper'
import { theme } from '../core/theme'
import Background from '../components/Background'
import { NavigationHelpersContext } from '@react-navigation/native'
import Drawers from './Drawers'
import SearchedVideo from './SearchedVideo'
import LatestVideo from './LatestVideo'
import TrendingVideo from './TrendingVideo'
const Live = ({navigation}) => {
  const LatestVideo = () => {
    navigation.replace('LatestVideo');
  };
  const TrendingVideo = () => {
    navigation.replace('TrendingVideo');
  };
  const SearchedVideo = () => {
    navigation.replace('SearchedVideo');
  };
  return (
    
    <View style={styles.container}>
     <Background>

      <StatusBar style="auto" />
      <Button
        mode="contained"
        onPress={TrendingVideo}
        style={{marginTop: 10}}>
     Trending
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
        mode="contained"
        onPress={SearchedVideo}
        style={{marginTop: 10}}>
     Searched News
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
        mode="contained"
        onPress={LatestVideo}
        style={{marginTop: 10}}>
     Latest News
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

export default Live
const styles=StyleSheet.create({
  container:{
    flex:3,
    backgroundColor:"#10232A",
    // alignItems:"center",
    // justifyContent:"center"
    },

     tab1:{
      backgroundColor:"red",
     },
    
  
    text:{
      fontSize:20,
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
    container2:{
      flex:2,
      backgroundColor:"#10232A",
      alignItems:"center",
      justifyContent:"center"
      },
      container1:{
        flex:3,
        backgroundColor:"#10232A",
        alignItems:"center",
        justifyContent:"center"
        },
    // container1:{
    //   flex:1,
    //   // marginBottom:160
    //   // backgroundColor:"#fff",
    //   // alignItems:"center",
    //   // justifyContent:"center",
    
    //   },
    image:{
      // flex:1,
      // justifyContent:"center",
      // alignItems:"center",
      width:360,
      marginLeft:1,
      height:120,
     
      
    }
})