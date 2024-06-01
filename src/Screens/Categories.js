import {View, Text, FlatList, Image, TouchableOpacity,StyleSheet,SafeAreaView,Clipboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { configureProps } from 'react-native-reanimated/lib/reanimated2/core';
import { ScrollView } from 'react-native-gesture-handler';

const Categories = () => {
  const navigation = useNavigation();
  const [news, setNews] = useState([]);
  const [copiedText, setCopiedText] = useState('');
  const copyToClipboard = () => {
    Clipboard.setString('hello world');
    
  };
  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    fetch('https://saurav.tech/NewsAPI/everything/bbc-news.json',
  {
    method:'GET'
  }  
    
    
    )
      .then(res => res.json())
      .then(output => {
        console.log(output);
      setNews(output.articles);
      // console.log(news);
      });
  };
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: '#fff',
      backgroundColor: '#000',
    }}>
    <Text
      style={{
        color: '#fff',
        fontSize: 20,
        fontWeight: '800',
        marginLeft: 20,
        marginTop: 20,
      }}>
      Categories
    </Text>
    <View style={{marginTop: 20, height: 170}}>
      <FlatList
        data={[
          {title: 'technology', image: require('./')},
          {title: 'health', image: require('./')},

          {title: 'business', image: require('./')},
        ]}
        horizontal
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                width: 200,
                height: 150,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 15,
                borderWidth: 1,
                borderColor: '#fff',
              }}
              onPress={() => {
                navigation.navigate('CategoryNews', {
                  category: item.title,
                });
              }}>
              <View style={{width: '100%', height: '100%', borderRadius: 20}}>
                <Image
                  source={item.image}
                  style={{width: '100%', height: '100%', borderRadius: 20}}
                />
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                    position: 'absolute',
                    top: 0,
                    backgroundColor: 'rgba(0,0,0,.5)',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{color: '#fff', fontSize: 20, fontWeight: '700'}}>
                    {item.title}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
    <Text
      style={{
        color: '#fff',
        fontSize: 20,
        fontWeight: '800',
        marginLeft: 20,
        marginTop: 20,
      }}>
      Headlines
    </Text>
    <View>
      <FlatList
        data={news}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                borderColor: '#fff',
                borderWidth: 1,
                width: '90%',
                height: 100,
                alignSelf: 'center',
                marginTop: 20,
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('NewsDetails', {
                  data: item,
                });
              }}>
              <Image
                source={{uri: item.urlToImage}}
                style={{
                  width: 100,
                  height: 90,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
              />
              <View style={{padding: 10}}>
                <Text
                  style={{
                    color: '#fff',
                    width: '45%',
                    fontSize: 16,
                    fontWeight: '700',
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: '#fff',
                    width: '70%',
                    fontSize: 12,
                    marginTop: 10,
                  }}>
                  {item.description.substring(0, 30) + '...'}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  </View>
  );
};

export default Categories;
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
});
