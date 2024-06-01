import {
  View,
  Button,
  Text,
  FlatList,
  Image,
  Clipboard,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {configureProps} from 'react-native-reanimated/lib/reanimated2/core';
import {ScrollView} from 'react-native-gesture-handler';
import Background from '../components/Background';
import Geolocation from '@react-native-community/geolocation';
import imagePath from '../constants/imagePath';
import TextInput from '../components/TextInput';
import firebase from 'firebase/compat/app';
import gaza from '../../src/assests/images/gaza.jpg';
import back from '../../src/assests/images/arrow_back.png';
const BbcNews = ({navigation, route}) => {
  const [news, setNews] = useState([]);
  const [copiedText, setCopiedText] = useState('');
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [newData, setNewsData] = useState([
    {
      title:
        "All eyes on Rafah': Israel pounds southern Gaza city amid global outrage and ICJ ruling — All you need to know",
      img: gaza,
    },
    {
      title:
        'Vilas Transcore IPO oversubscribed by 27 times on day 2 so far; Check latest subscription, GMP',
      img: gaza,
    },
    {
      title:
        'GSM Foils IPO subscribed over 257 times on day 3 so far led by retail investors; check GMP, subscription status, more',
      img: gaza,
    },
    {
      title:
        'Explained: When Gurmeet Ram Rahim was convicted in ex-Dera manager Ranjit Singh murder case',
      img: gaza,
    },
    {
      title: 'Economists should reskill themselves for the age of AI',
      img: gaza,
    },
    {
      title:
        '‘Nakedness’: Meghan Markle’s choice of clothes in Nigeria trip under scanner; First Lady says, ‘This is not Met Gala’',
      img: gaza,
    },
    {
      title:
        'HAL stock in focus after India, France begin talks for ₹50,000-crore Rafale Marine fighter jet deal',
      img: gaza,
    },
  ]);
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
      },
      error => console.error(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  useEffect(() => {
    if (location) {
      const apiKey = 'AIzaSyBY-SlCevDhuFKOPUmruHR1hPUIZByFmM4';
      const {latitude, longitude} = location;
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const city = data.results[0].address_components.find(component =>
            component.types.includes('locality'),
          ).long_name;
          const country = data.results[0].address_components.find(component =>
            component.types.includes('country'),
          ).long_name;
          console.log('Coordinates:', location, 'Location:', city, country);
          setCity(city);
          setCountry(country);
          handleSendData();
        })
        .catch(error => console.error(error));
    }
  }, [location]);

  //Sending Location

  //Getting News

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    const apiUrl =
      'https://c269-154-192-46-55.ngrok-free.app/location_based_bbc';
    const requestData = {location};

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({lat: '30.375321', lon: '69.345116'}),
    })
      .then(res => res.json())
      .then(output => {
        console.log(output.TrendingHeadings, 'LIST OF HEADINGS');
        setNews(output.LocationBased);
        // console.log(news);
      });
  };

  const handleback = () => {
    navigation.replace('SearchedNews');
  };
  const _handleBackPage = () => {
    navigation.replace('SearchedNews');
  };
  function handleSubmit(data) {
    console.log(data, 'Trending news');
    navigation.navigate('NewsDetails', {data});
    setNews(data.LocationBased);
  }
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{flexDirection: 'row', backgroundColor: '#fff', padding: 10}}>
          <TouchableOpacity onPress={_handleBackPage}>
            <Image
              source={back}
              alt=""
              style={{width: 30, height: 30, marginTop: 3}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '500',
              color: '#000',
              marginLeft: 20,
            }}>
            BBC News
          </Text>
        </View>

        {/* new flatlist is here */}

        <View style={{marginHorizontal: 10, marginTop: 20}}>
          {newData?.map((e, idx) => {
            return (
              <View
                key={idx}
                style={{
                  backgroundColor: '#fff',
                  marginBottom: 20,
                  padding: 10,
                  flexDirection: 'row',
                }}>
                <View style={{width: '75%'}}>
                  <Text
                    style={{color: '#000', fontSize: 14, fontWeight: '500'}}>
                    {e.title}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 12}}>6 min &nbsp;||</Text>

                    <Text style={{fontSize: 12}}>&nbsp; 28 May 2024</Text>
                  </View>
                </View>
                <View style={{width: '25%'}}>
                  <Image
                    source={e.img}
                    alt=""
                    style={{width: 80, height: 80, marginLeft: 'auto'}}
                  />
                </View>
              </View>
            );
          })}
          {/* <FlatList
        data={newData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.newsItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      /> */}
        </View>

        <View
          style={{
            backgroundColor: 'green',
          }}>
          {/* <Text
        style={{
          borderColor: '#6F3D6C',
          borderRadius: 10,
          borderWidth: 4,
          color: '#6F3D6C',
          fontSize: 30,
          fontWeight: '900',
          marginTop: 40,
          marginBottom: 20,
          paddingLeft: 10,
        }}>
        Headlines
      </Text> */}
          <ScrollView>
            <View>
              {news.length > 0 && news !== undefined ? (
                <FlatList
                  data={news}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        style={{
                          padding: 5,
                          borderColor: '#000',
                          borderWidth: 1,
                          color: '#fff',
                          borderColor: '#000',
                          fontSize: 18,
                          borderRadius: 10,
                          backgroundColor: '#6F3D6C',
                          fontWeight: '700',
                        }}
                        onPress={() => {
                          Clipboard.setString(item.Urls1);
                          handleSubmit(item.Urls1);
                        }}>
                        <View style={{padding: 10}}>
                          <Text
                            style={{
                              selectable: 'true',
                              color: '#000',

                              fontSize: 18,
                              fontWeight: '700',
                            }}>
                            {item.Urls1}
                            {item.Heading1}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              ) : (
                ''
                // <View style={styles.container}>

                //   <View style={{flex: 1}}>
                //     <WebView
                //       style={styles.webview}
                //       source={{uri: 'https://www.livemint.com/mostpopular/'}}
                //       startInLoadingState={false}
                //       scalesPageToFit={true}
                //     />
                //   </View>
                // </View>
              )}
            </View>

            {/* <View style={{paddingTop: 40}}>
          <FlatList
            data={news}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 5,
                    borderColor: '#000',
                    borderWidth: 1,
                    color: '#fff',
                    borderColor: '#000',
                    fontSize: 18,
                    borderRadius: 10,
                    backgroundColor: '#6F3D6C',
                    fontWeight: '700',
                  }}
                  onPress={() => {
                    Clipboard.setString(item.Urls2); // copy the text of item.Urls1 to clipboard
                    handleSubmit(item.Urls2);
                  }}>
                  <View style={{padding: 10}}>
                    <Text
                      style={{
                        selectable: 'true',
                        color: '#000',
                        // width: '45%',
                        fontSize: 18,
                        fontWeight: '700',
                      }}>
                      {item.Urls2}
                      {item.Heading2}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={{paddingTop: 40}}>
          <FlatList
            data={news}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 5,
                    borderColor: '#000',
                    borderWidth: 1,
                    color: '#fff',
                    borderColor: '#000',
                    fontSize: 18,
                    borderRadius: 10,
                    backgroundColor: '#6F3D6C',
                    fontWeight: '700',
                  }}
                  onPress={() => {
                    Clipboard.setString(item.Urls3); // copy the text of item.Urls1 to clipboard
                    handleSubmit(item.Urls3);
                  }}>
                  <View style={{padding: 10}}>
                    <Text
                      style={{
                        selectable: 'true',
                        color: '#000',
                        // width: '45%',
                        fontSize: 18,
                        fontWeight: '700',
                      }}>
                      {item.Urls3}
                      {item.Heading3}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={{paddingTop: 40}}>
          <FlatList
            data={news}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 5,
                    borderColor: '#000',
                    borderWidth: 1,
                    color: '#fff',
                    borderColor: '#000',
                    fontSize: 18,
                    borderRadius: 10,
                    backgroundColor: '#6F3D6C',
                    fontWeight: '700',
                  }}
                  onPress={() => {
                    Clipboard.setString(item.Urls4); // copy the text of item.Urls1 to clipboard
                    handleSubmit(item.Urls4);
                  }}>
                  <View style={{padding: 10}}>
                    <Text
                      style={{
                        selectable: 'true',
                        color: '#000',
                        // width: '45%',
                        fontSize: 18,
                        fontWeight: '700',
                      }}>
                      {item.Urls4}
                      {item.Heading4}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={{paddingTop: 40}}>
          <FlatList
            data={news}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 5,
                    borderColor: '#000',
                    borderWidth: 1,
                    color: '#fff',
                    borderColor: '#000',
                    fontSize: 18,
                    borderRadius: 10,
                    backgroundColor: '#6F3D6C',
                    fontWeight: '700',
                  }}
                  onPress={() => {
                    Clipboard.setString(item.Urls5); // copy the text of item.Urls1 to clipboard
                    handleSubmit(item.Urls5);
                  }}>
                  <View style={{padding: 10}}>
                    <Text
                      style={{
                        selectable: 'true',
                        color: '#000',
                        // width: '45%',
                        fontSize: 18,
                        fontWeight: '700',
                      }}>
                      {item.Urls5}
                      {item.Heading5}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={{paddingTop: 40}}>
          <FlatList
            data={news}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 5,
                    borderColor: '#000',
                    borderWidth: 1,
                    color: '#fff',
                    borderColor: '#000',
                    fontSize: 18,
                    borderRadius: 10,
                    backgroundColor: '#6F3D6C',
                    fontWeight: '700',
                  }}
                  onPress={() => {
                    Clipboard.setString(item.Urls6); // copy the text of item.Urls1 to clipboard
                    handleSubmit(item.Urls6);
                  }}>
                  <View style={{padding: 10}}>
                    <Text
                      style={{
                        selectable: 'true',
                        color: '#000',
                        // width: '45%',
                        fontSize: 18,
                        fontWeight: '700',
                      }}>
                      {item.Urls6}
                      {item.Heading6}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={{paddingTop: 40}}>
          <FlatList
            data={news}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 5,
                    borderColor: '#000',
                    borderWidth: 1,
                    color: '#fff',
                    borderColor: '#000',
                    fontSize: 18,
                    borderRadius: 10,
                    backgroundColor: '#6F3D6C',
                    fontWeight: '700',
                  }}
                  onPress={() => {
                    Clipboard.setString(item.Urls7); // copy the text of item.Urls1 to clipboard
                    handleSubmit(item.Urls7);
                  }}>
                  <View style={{padding: 10}}>
                    <Text
                      style={{
                        selectable: 'true',
                        color: '#000',
                        // width: '45%',
                        fontSize: 18,
                        fontWeight: '700',
                      }}>
                      {item.Urls7}
                      {item.Heading7}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={{paddingTop: 40}}>
          <FlatList
            data={news}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 5,
                    borderColor: '#000',
                    borderWidth: 1,
                    color: '#fff',
                    borderColor: '#000',
                    fontSize: 18,
                    borderRadius: 10,
                    backgroundColor: '#6F3D6C',
                    fontWeight: '700',
                  }}
                  onPress={() => {
                    Clipboard.setString(item.Urls8); // copy the text of item.Urls1 to clipboard
                    handleSubmit(item.Urls8);
                  }}>
                  <View style={{padding: 10}}>
                    <Text
                      style={{
                        selectable: 'true',
                        color: '#000',
                        // width: '45%',
                        fontSize: 18,
                        fontWeight: '700',
                      }}>
                      {item.Urls8}
                      {item.Heading8}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={{paddingTop: 40}}>
          <FlatList
            data={news}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 5,
                    borderColor: '#000',
                    borderWidth: 1,
                    color: '#fff',
                    borderColor: '#000',
                    fontSize: 18,
                    borderRadius: 10,
                    backgroundColor: '#6F3D6C',
                    fontWeight: '700',
                  }}
                  onPress={() => {
                    Clipboard.setString(item.Urls9); // copy the text of item.Urls1 to clipboard
                    handleSubmit(item.Urls9);
                  }}>
                  <View style={{padding: 10}}>
                    <Text
                      style={{
                        selectable: 'true',
                        color: '#000',
                        // width: '45%',
                        fontSize: 18,
                        fontWeight: '700',
                      }}>
                      {item.Urls19}
                      {item.Heading9}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={{paddingTop: 40}}>
          <FlatList
            data={news}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 5,
                    borderColor: '#000',
                    borderWidth: 1,
                    color: '#fff',
                    borderColor: '#000',
                    fontSize: 18,
                    borderRadius: 10,
                    backgroundColor: '#6F3D6C',
                    fontWeight: '700',
                  }}
                  onPress={() => {
                    Clipboard.setString(item.Urls10); // copy the text of item.Urls1 to clipboard
                    handleSubmit(item.Urls10);
                  }}>
                  <View style={{padding: 10}}>
                    <Text
                      style={{
                        selectable: 'true',
                        color: '#000',
                        // width: '45%',
                        fontSize: 18,
                        fontWeight: '700',
                      }}>
                      {item.Urls10}
                      {item.Heading10}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={{paddingTop: 40}}>
          <FlatList
            data={news}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 5,
                    borderColor: '#000',
                    borderWidth: 1,
                    color: '#fff',
                    borderColor: '#000',
                    fontSize: 18,
                    borderRadius: 10,
                    backgroundColor: '#6F3D6C',
                    fontWeight: '700',
                  }}
                  onPress={() => {
                    Clipboard.setString(item.Urls11); // copy the text of item.Urls1 to clipboard
                    handleSubmit(item.Urls11);
                  }}>
                  <View style={{padding: 10}}>
                    <Text
                      style={{
                        selectable: 'true',
                        color: '#000',
                        // width: '45%',
                        fontSize: 18,
                        fontWeight: '700',
                      }}>
                      {item.Urls11}
                      {item.Heading11}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={{paddingTop: 40}}>
          <FlatList
            data={news}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 5,
                    borderColor: '#000',
                    borderWidth: 1,
                    color: '#fff',
                    borderColor: '#000',
                    fontSize: 18,
                    borderRadius: 10,
                    backgroundColor: '#6F3D6C',
                    fontWeight: '700',
                  }}
                  onPress={() => {
                    Clipboard.setString(item.Urls12); // copy the text of item.Urls1 to clipboard
                    handleSubmit(item.Urls12);
                  }}>
                  <View style={{padding: 10}}>
                    <Text
                      style={{
                        color: '#000',
                        // width: '45%',
                        fontSize: 18,
                        fontWeight: '700',
                      }}>
                      {item.Urls12}
                      {item.Heading12}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View> */}
          </ScrollView>
        </View>

        {/* <TouchableOpacity
        mode="contained"
        onPress={handleback}
        style={styles.button1}>
        <Text style={styles.link}>Back</Text>
      </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
    // <Background>
    //   <Text style={{color: '#000'}}>hello</Text>
    //   <View
    //     style={
    //       {
    //         // flex: 1,
    //         // backgroundColor: '#fff',
    //         //  backgroundColor: '#CEC0CD',
    //       }
    //     }>
    //     <Text
    //       style={{
    //         borderColor: '#6F3D6C',
    //         borderRadius: 10,
    //         borderWidth: 4,
    //         color: '#6F3D6C',
    //         fontSize: 30,
    //         fontWeight: '900',
    //         marginLeft: 5,
    //         marginTop: 40,
    //         marginBottom: 20,
    //         paddingLeft: 10,
    //       }}>
    //       Headlines
    //     </Text>
    //     <ScrollView>
    //       <View>
    //         <FlatList
    //           data={news}
    //           renderItem={({item, index}) => {
    //             return (
    //               <TouchableOpacity
    //                 style={{
    //                   selectable: true,
    //                   padding: 5,
    //                   borderColor: '#000',
    //                   borderWidth: 1,
    //                   color: '#fff',
    //                   borderColor: '#000',
    //                   fontSize: 18,
    //                   borderRadius: 10,
    //                   backgroundColor: '#6F3D6C',
    //                   fontWeight: '700',
    //                 }}
    //                 // onPress={()=>handleSubmit(item.Urls1)
    //                 onPress={() => {
    //                   Clipboard.setString(item.Urls1); // copy the text of item.Urls1 to clipboard
    //                   handleSubmit(item.Urls1);
    //                 }}>
    //                 <View style={{padding: 10}}>
    //                   <Text
    //                     selectable={true}
    //                     style={{
    //                       selectable: 'true',
    //                       color: '#000',
    //                       // width: '45%',
    //                       fontSize: 18,
    //                       fontWeight: '700',
    //                     }}>
    //                     {item.Urls1}
    //                     {item.Heading1}
    //                   </Text>
    //                 </View>
    //               </TouchableOpacity>
    //             );
    //           }}
    //         />
    //       </View>

    //       <View style={{paddingTop: 40}}>
    //         <FlatList
    //           data={news}
    //           renderItem={({item, index}) => {
    //             return (
    //               <TouchableOpacity
    //                 style={{
    //                   padding: 5,
    //                   borderColor: '#000',
    //                   borderWidth: 1,
    //                   color: '#fff',
    //                   borderColor: '#000',
    //                   fontSize: 18,
    //                   borderRadius: 10,
    //                   backgroundColor: '#6F3D6C',
    //                   fontWeight: '700',
    //                 }}
    //                 onPress={() => handleSubmit(item.Urls1)}>
    //                 <View style={{padding: 10}}>
    //                   <Text
    //                     style={{
    //                       selectable: 'true',
    //                       color: '#000',
    //                       // width: '45%',
    //                       fontSize: 18,
    //                       fontWeight: '700',
    //                     }}>
    //                     {item.Urls1}
    //                     {item.Heading1}
    //                   </Text>
    //                 </View>
    //               </TouchableOpacity>
    //             );
    //           }}
    //         />
    //       </View>

    //       <View style={{paddingTop: 40}}>
    //         <FlatList
    //           data={news}
    //           renderItem={({item, index}) => {
    //             return (
    //               <TouchableOpacity
    //                 style={{
    //                   padding: 5,
    //                   borderColor: '#000',
    //                   borderWidth: 1,
    //                   color: '#fff',
    //                   borderColor: '#000',
    //                   fontSize: 18,
    //                   borderRadius: 10,
    //                   backgroundColor: '#6F3D6C',
    //                   fontWeight: '700',
    //                 }}
    //                 onPress={() => handleSubmit(item.Urls2)}>
    //                 <View style={{padding: 10}}>
    //                   <Text
    //                     style={{
    //                       selectable: 'true',
    //                       color: '#000',
    //                       // width: '45%',
    //                       fontSize: 18,
    //                       fontWeight: '700',
    //                     }}>
    //                     {item.Urls2}
    //                     {item.Heading2}
    //                   </Text>
    //                 </View>
    //               </TouchableOpacity>
    //             );
    //           }}
    //         />
    //       </View>

    //       <View style={{paddingTop: 40}}>
    //         <FlatList
    //           data={news}
    //           renderItem={({item, index}) => {
    //             return (
    //               <TouchableOpacity
    //                 style={{
    //                   padding: 5,
    //                   borderColor: '#000',
    //                   borderWidth: 1,
    //                   color: '#fff',
    //                   borderColor: '#000',
    //                   fontSize: 18,
    //                   borderRadius: 10,
    //                   backgroundColor: '#6F3D6C',
    //                   fontWeight: '700',
    //                 }}
    //                 onPress={() => handleSubmit(item.Urls3)}>
    //                 <View style={{padding: 10}}>
    //                   <Text
    //                     style={{
    //                       selectable: 'true',
    //                       color: '#000',
    //                       // width: '45%',
    //                       fontSize: 18,
    //                       fontWeight: '700',
    //                     }}>
    //                     {item.Urls3}
    //                     {item.Heading3}
    //                   </Text>
    //                 </View>
    //               </TouchableOpacity>
    //             );
    //           }}
    //         />
    //       </View>

    //       <View style={{paddingTop: 40}}>
    //         <FlatList
    //           data={news}
    //           renderItem={({item, index}) => {
    //             return (
    //               <TouchableOpacity
    //                 style={{
    //                   padding: 5,
    //                   borderColor: '#000',
    //                   borderWidth: 1,
    //                   color: '#fff',
    //                   borderColor: '#000',
    //                   fontSize: 18,
    //                   borderRadius: 10,
    //                   backgroundColor: '#6F3D6C',
    //                   fontWeight: '700',
    //                 }}
    //                 onPress={() => handleSubmit(item.Urls4)}>
    //                 <View style={{padding: 10}}>
    //                   <Text
    //                     selectable={true}
    //                     style={{
    //                       selectable: 'true',
    //                       color: '#000',
    //                       // width: '45%',
    //                       fontSize: 18,
    //                       fontWeight: '700',
    //                     }}>
    //                     {item.Urls4}
    //                     {item.Heading4}
    //                   </Text>
    //                 </View>
    //               </TouchableOpacity>
    //             );
    //           }}
    //         />
    //       </View>

    //       <View style={{paddingTop: 40}}>
    //         <FlatList
    //           data={news}
    //           renderItem={({item, index}) => {
    //             return (
    //               <TouchableOpacity
    //                 style={{
    //                   padding: 5,
    //                   borderColor: '#000',
    //                   borderWidth: 1,
    //                   color: '#fff',
    //                   borderColor: '#000',
    //                   fontSize: 18,
    //                   borderRadius: 10,
    //                   backgroundColor: '#6F3D6C',
    //                   fontWeight: '700',
    //                 }}
    //                 onPress={() => handleSubmit(item.Urls5)}>
    //                 <View style={{padding: 10}}>
    //                   <Text
    //                     style={{
    //                       selectable: 'true',
    //                       color: '#000',
    //                       // width: '45%',
    //                       fontSize: 18,
    //                       fontWeight: '700',
    //                     }}>
    //                     {item.Urls5}
    //                     {item.Heading5}
    //                   </Text>
    //                 </View>
    //               </TouchableOpacity>
    //             );
    //           }}
    //         />
    //       </View>

    //       <View style={{paddingTop: 40}}>
    //         <FlatList
    //           data={news}
    //           renderItem={({item, index}) => {
    //             return (
    //               <TouchableOpacity
    //                 style={{
    //                   padding: 5,
    //                   borderColor: '#000',
    //                   borderWidth: 1,
    //                   color: '#fff',
    //                   borderColor: '#000',
    //                   fontSize: 18,
    //                   borderRadius: 10,
    //                   backgroundColor: '#6F3D6C',
    //                   fontWeight: '700',
    //                 }}
    //                 onPress={() => handleSubmit(item.Urls6)}>
    //                 <View style={{padding: 10}}>
    //                   <Text
    //                     style={{
    //                       selectable: 'true',
    //                       color: '#000',
    //                       // width: '45%',
    //                       fontSize: 18,
    //                       fontWeight: '700',
    //                     }}>
    //                     {item.Urls6}
    //                     {item.Heading6}
    //                   </Text>
    //                 </View>
    //               </TouchableOpacity>
    //             );
    //           }}
    //         />
    //       </View>

    //       <View style={{paddingTop: 40}}>
    //         <FlatList
    //           data={news}
    //           renderItem={({item, index}) => {
    //             return (
    //               <TouchableOpacity
    //                 style={{
    //                   padding: 5,
    //                   borderColor: '#000',
    //                   borderWidth: 1,
    //                   color: '#fff',
    //                   borderColor: '#000',
    //                   fontSize: 18,
    //                   borderRadius: 10,
    //                   backgroundColor: '#6F3D6C',
    //                   fontWeight: '700',
    //                 }}
    //                 onPress={() => handleSubmit(item.Urls7)}>
    //                 <View style={{padding: 10}}>
    //                   <Text
    //                     style={{
    //                       selectable: 'true',
    //                       color: '#000',
    //                       // width: '45%',
    //                       fontSize: 18,
    //                       fontWeight: '700',
    //                     }}>
    //                     {item.Urls7}
    //                     {item.Heading7}
    //                   </Text>
    //                 </View>
    //               </TouchableOpacity>
    //             );
    //           }}
    //         />
    //       </View>

    //       <View style={{paddingTop: 40}}>
    //         <FlatList
    //           data={news}
    //           renderItem={({item, index}) => {
    //             return (
    //               <TouchableOpacity
    //                 style={{
    //                   padding: 5,
    //                   borderColor: '#000',
    //                   borderWidth: 1,
    //                   color: '#fff',
    //                   borderColor: '#000',
    //                   fontSize: 18,
    //                   borderRadius: 10,
    //                   backgroundColor: '#6F3D6C',
    //                   fontWeight: '700',
    //                 }}
    //                 onPress={() => handleSubmit(item.Urls8)}>
    //                 <View style={{padding: 10}}>
    //                   <Text
    //                     style={{
    //                       selectable: 'true',
    //                       color: '#000',
    //                       // width: '45%',
    //                       fontSize: 18,
    //                       fontWeight: '700',
    //                     }}>
    //                     {item.Urls18}
    //                     {item.Heading8}
    //                   </Text>
    //                 </View>
    //               </TouchableOpacity>
    //             );
    //           }}
    //         />
    //       </View>

    //       <View style={{paddingTop: 40}}>
    //         <FlatList
    //           data={news}
    //           renderItem={({item, index}) => {
    //             return (
    //               <TouchableOpacity
    //                 style={{
    //                   padding: 5,
    //                   borderColor: '#000',
    //                   borderWidth: 1,
    //                   color: '#fff',
    //                   borderColor: '#000',
    //                   fontSize: 18,
    //                   borderRadius: 10,
    //                   backgroundColor: '#6F3D6C',
    //                   fontWeight: '700',
    //                 }}
    //                 onPress={() => handleSubmit(item.Urls9)}>
    //                 <View style={{padding: 10}}>
    //                   <Text
    //                     style={{
    //                       selectable: 'true',
    //                       color: '#000',
    //                       // width: '45%',
    //                       fontSize: 18,
    //                       fontWeight: '700',
    //                     }}>
    //                     {item.Urls9}
    //                     {item.Heading9}
    //                   </Text>
    //                 </View>
    //               </TouchableOpacity>
    //             );
    //           }}
    //         />
    //       </View>

    //       <View style={{paddingTop: 40}}>
    //         <FlatList
    //           data={news}
    //           renderItem={({item, index}) => {
    //             return (
    //               <TouchableOpacity
    //                 style={{
    //                   padding: 5,
    //                   borderColor: '#000',
    //                   borderWidth: 1,
    //                   color: '#fff',
    //                   borderColor: '#000',
    //                   fontSize: 18,
    //                   borderRadius: 10,
    //                   backgroundColor: '#6F3D6C',
    //                   fontWeight: '700',
    //                 }}
    //                 onPress={() => handleSubmit(item.Urls10)}>
    //                 <View style={{padding: 10}}>
    //                   <Text
    //                     style={{
    //                       selectable: 'true',
    //                       color: '#000',
    //                       // width: '45%',
    //                       fontSize: 18,
    //                       fontWeight: '700',
    //                     }}>
    //                     {item.Urls10}
    //                     {item.Heading10}
    //                   </Text>
    //                 </View>
    //               </TouchableOpacity>
    //             );
    //           }}
    //         />
    //       </View>

    //       <View style={{paddingTop: 40}}>
    //         <FlatList
    //           data={news}
    //           renderItem={({item, index}) => {
    //             return (
    //               <TouchableOpacity
    //                 style={{
    //                   padding: 5,
    //                   borderColor: '#000',
    //                   borderWidth: 1,
    //                   color: '#fff',
    //                   borderColor: '#000',
    //                   fontSize: 18,
    //                   borderRadius: 10,
    //                   backgroundColor: '#6F3D6C',
    //                   fontWeight: '700',
    //                 }}
    //                 onPress={() => handleSubmit(item.Urls11)}>
    //                 <View style={{padding: 10}}>
    //                   <Text
    //                     style={{
    //                       color: '#000',
    //                       // width: '45%',
    //                       fontSize: 18,
    //                       fontWeight: '700',
    //                     }}>
    //                     {item.Urls11}
    //                     {item.Heading11}
    //                   </Text>
    //                 </View>
    //               </TouchableOpacity>
    //             );
    //           }}
    //         />
    //       </View>
    //     </ScrollView>
    //   </View>

    //   <TouchableOpacity
    //     mode="contained"
    //     onPress={handleback}
    //     style={styles.button1}>
    //     <Text style={styles.link}>Back</Text>
    //   </TouchableOpacity>
    // </Background>
  );
};
export default BbcNews;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'purple',
    width: '25%',
    padding: 2,
    borderRadius: 60,
    alignItems: 'center',
    marginLeft: 130,
  },

  button1: {
    backgroundColor: 'purple',
    width: '25%',

    borderRadius: 60,
    alignItems: 'center',
    padding: 15,
    marginBottom: 55,
  },
});
