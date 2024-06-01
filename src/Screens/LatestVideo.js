import { View, Text,Image,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath';
import Button from '../components/Button';


const LatestVideo = ({navigation, route}) => {
    const handleback=()=>{
  
        navigation.replace("Live")
      }
  return (
    <><View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Latest news Details Screen</Text>
          <Text>{route.params?.title}</Text>

      </View>
      
      <Button
          mode="contained"
          onPress={handleback}
          style={ styles.button}>
             back
          </Button></>)
}
export default LatestVideo
const styles = StyleSheet.create({
    button: {
      backgroundColor: 'purple',
      width: '25%',
      padding: 2,
      borderRadius: 60,
      alignItems: 'center',
      marginLeft:130
  
    },})
