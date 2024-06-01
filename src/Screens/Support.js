import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { Linking } from 'react-native';
import Button from '../components/Button';
import {theme} from '../core/theme';
export default function Support(){
  return(
    <View style={{flex:1, justifyContent:"center"}}>
      <Text style={styles.link}>For Live Chat with Admin Click below button</Text>
      <Button
    style={{width: '43%',marginLeft:100}}  
        mode="contained"
        onPress={() => Linking.openURL('https://tawk.to/chat/63ecd134c2f1ac1e20336955/1gpah2e9q')}>
      
      Live Chat
      </Button>
    </View>
    )
}const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});