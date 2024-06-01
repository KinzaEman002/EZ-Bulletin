import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'
import Background from '../components/Background'

import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
const NewsPaper  = () => {
 
  return (
    <Background>
          
    <TextInput
        label="Name"
        returnKeyType="next" />
         <TextInput
        label="Email"
        returnKeyType="next" />
  <TextInput
        label="Your Feedback"
        returnKeyType="next" />

          <Button
        mode="contained"
        // onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
    Submit
      </Button>
       </Background>

    

       

  )
}

export default NewsPaper
const styles = StyleSheet.create({
  Text: {
    color: 'blue',
      fontSize:20,
      fontWeight:'bold',
      backgroundColor:"black"
    },
    container:{
      flex:1,
      backgroundColor:"#567DB7"
    },
    button: {
      backgroundColor: '#D982E6',
      width: '40%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
       marginLeft:100,
       marginTop:40
       
    },
    inputContainer: {
      width: '80%',
      marginLeft:40,
   
    },
    input1: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
      marginLeft:-10
    },
    input2: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 20,
      marginLeft:-8
    },
  
  })