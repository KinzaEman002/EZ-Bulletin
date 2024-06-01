import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

const CategoryNews = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    fetch(
      'http://c796-175-107-255-74.ngrok.io/TrendingNewsHndL' +
        route.params.category +
        '/in.json',
    )
      .then(res => res.json())
      .then(output => {
        console.log(output);
        setNews(output.TreandingHeadings);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: '#fff',
        // backgroundColor: '#000',
      }}>
      <Text
        style={{
          color: '#000',
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
                  borderColor: '#000',
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
                      color: '#000',
                      width: '60%',
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    {item.title ? item.title.substring(0, 30) + '...' : '...'}
                  </Text>
                  <Text
                    style={{
                      color: '#000',
                      width: '40%',
                      fontSize: 12,
                      marginTop: 10,
                    }}>
                    {item.description
                      ? item.description.substring(0, 30) + '...'
                      : '...'}
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

export default CategoryNews;
