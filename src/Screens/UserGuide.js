
import {View, Text, Image, TouchableOpacity,StyleSheet,SafeAreaView,Clipboard,ScrollView} from 'react-native';
import {React,useState} from 'react';
import {useRoute} from '@react-navigation/native';

import { theme } from '../core/theme'
const UserGuide = () => {
  const [copiedText, setCopiedText] = useState('');
  const copyToClipboard = () => {
    Clipboard.setString(route.params.data.content);
  };
  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };
  const route = useRoute();

  return (
    <View>
      <ScrollView>
          <Text style={styles.Text} selectable={true}>
          {'\n'} {'\n'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}--------------------******************--------------------
      {'\n'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}--------------------******************--------------------
          <Text style={styles.titleText}>{'\n'}  	Please Signup/ Login to the application
          {'\n'} 	So at the start the Dashboard will appear 


      {'\n'} 	Three news categories will be shown.</Text>

      {'\n'}  Click anyone that you want to read
      {'\n'}  The news will appear after some time with their urls.
      {'\n'}  You can click any heading to see the details of news.
     
      
      {'\n'}{'\n'}  If you want a summary of that news copy the content of that news and paste it in the input field of summary screen
          
          {'\n'}    Click on submit button and you will get the summary of news.
            {'\n'}	If you want to save it click on save button and this will be saved in your database and you can see it in future in drawer navigation bar screen named as “Saved Summary”.
            {'\n'} 	If you want to get the audio of that news paste the same content in input field of audio screen and click on translate button then you will get the audio of news.
            {'\n'} 	The recommendation of your is on the bottom nav screen named as “For You” so you can get your recommended news.
            {'\n'} 	You can also give feedback to the admin by clicking feedback screen in drawer navigation and put your feedback and click the submit button.
            {'\n'} 	Your feedback will be saved automatically and will appear below in feedback screen.
            {'\n'} 	The responses and notifications from admin will appear in Notification Screen.
            {'\n'} 	The live chat option also available in “Support” screen by clicking on live chat button you will directed to the external chat platform and then easily talk with our admin panel.
            {'\n'}  You can sign-out on clicking sign-out button in drawer navigation bar
            {'\n'}{'\n'}{'\n'}_______________________________________________________

          </Text>
        </ScrollView>
        <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => copyToClipboard()}>
          <Text>hii</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => fetchCopiedText()}>
          <Text>View copied text</Text>
        </TouchableOpacity>

        <Text style={styles.copiedText}>{copiedText}</Text>
      </View>
    </SafeAreaView>

    </View>
  )
}

export default UserGuide
const styles = StyleSheet.create({
    rows: {
      flexDirection: 'row',
      marginTop: 4,
      marginLeft:90
    },
    Text:{
        color:"black",
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
    copiedText: {
      marginTop: 10,
      color: 'red',
    },
  
  })
  