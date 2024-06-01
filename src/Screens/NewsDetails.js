
import { View, Button, TextInput, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView, Clipboard } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';


const NewsDetails = (props) => {

  const [inputData, setInputData] = useState('');
  const [news, setNews] = useState([]);
  const [copiedText, setCopiedText] = useState('');
  const { params } = props.route;

  useEffect(() => {

    // const { url } = route.params;
    if (params) {
      const { data } = params
      console.log(params, "Route params 2nd")
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Url: data }),
      };

      fetch("https://a987-154-192-46-55.ngrok-free.app/paragraph",
       requestOptions)
       .then((res)=>res.json())
       .then((val)=>{
        console.log(val,"SUCCESS RESPONSE")
        setNews(val?.Paragraph)
       }).catch((err)=>{
        console.log(err,"FAILED RESPONSE")
       })

        // console.log(data.Paragraph, "API RESPONSE");
        // setNews(data.Paragraph);
        // // Do something with the response data
    }


  }, [params])


  const handleSubmit = (props) => {


  };


  return (
    <ScrollView>
    <View style={{flex:1, padding:10}}>
      <Text style={{fontSize:18, color:'black'}}>
        {news}
      </Text>
  
    </View></ScrollView>
  );
};

export default NewsDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black",
  },
  copiedText: {
    marginTop: 10,
    color: 'red',
  },
});

