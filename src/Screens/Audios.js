import {View, Text, FlatList, Image,TextInput, TouchableOpacity,StyleSheet,SafeAreaView,Clipboard} from 'react-native';
import React, { useEffect,useState } from 'react'
import Tts from "react-native-tts"
import { color } from 'react-native-reanimated';
import Button from '../components/Button'
const Audios = () => {
  const [textToSpeak, setTextToSpeak] = useState('');
  
  const speak = () => {
    Tts.speak(textToSpeak);
  };
  const _onChangeText = text => setTextToSpeak(text);
  return (
    <View style={styles.screen}>
        <View  style={styles.innerText}>
          <Text style={styles.textDisplay}>
          </Text>

          <View>
            <TextInput
            style={styles.input}
            color="black"
            backgroundColor="grey"
              placeholder="HERE"
              width="100%"
              onChangeText={_onChangeText}
            />
          </View>
          {/* <Button style={styles.button} title="TRANSLATE" onPress={speak} /> */}
          <Button
        mode="contained"

        style={{
          marginTop: 24,
          width: '60%',
          marginLeft: 70
        }}
         onPress={speak}> TRANSLATE</Button>
          {/* <Button title="SEND" /> */}
        </View>
   
    </View>
  );
};

export default Audios
const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"black",
  },
  copiedText: {
    marginTop: 10,
    color: 'red',
  },
  button:{
color:"black"
  },
  innerText:{
    color:"black"
  },
  textDisplay:{
    color:"black"
  }
});
