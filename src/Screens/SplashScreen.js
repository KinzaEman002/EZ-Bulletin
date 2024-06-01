import { View, Text ,ImageBackground,StyleSheet} from 'react-native'
import React from 'react'
const image = {uri: 'https://thumbs.dreamstime.com/b/newspaper-icon-isolated-glassy-purple-round-button-abstract-illustration-newspaper-icon-glassy-purple-round-button-100203487.jpg'};
import {NavigationContainer} from '@react-navigation/native';
export default function SplashScreen({navigation}) {

setTimeout(()=>{
    navigation.navigate('Landing')
},3000)

  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
    </ImageBackground>
  </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
     
     width: 370,
      justifyContent: 'center',
    },

  });
  