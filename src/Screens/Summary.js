
import {View, Text, FlatList, Image, TouchableOpacity,StyleSheet,SafeAreaView,Clipboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { configureProps } from 'react-native-reanimated/lib/reanimated2/core';
import { ScrollView } from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';
import Summary from './Audios';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { auth } from '../../firebase'
import firebase from 'firebase/compat/app';
function App() {
  const [inputData, setInputData] = useState('');
  const [news, setNews] = useState([]);
  const [copiedText, setCopiedText] = useState('');
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const user=auth.currentUser.uid;
  const itemRef = firebase.database().ref(user+"/Summary" ) 
  let [isUpdating, setIsUpdating] = useState(false)
  let [currentKey, setCurrentKey] = useState('')

  const handleSubmit = () => {
    fetch('https://c269-154-192-46-55.ngrok-free.app/summary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Url: inputData }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setNews(data.Summary);
      })
      .catch(error => {
        console.error(error);
      });
  };
  const route = useRoute();
  const copyToClipboard = () => {
    Clipboard.setString(Summary);
  };
  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };


  useEffect(() => {
      fetchData()
  }, [])

  function addHandle() {
      if (isUpdating) {
          itemRef.child(currentKey).update({ news});
          fetchData()
      
          setName('')
      }
      if (!isUpdating) {
          itemRef.push({ news });
          fetchData()
          
          setName('')
      }
      alert("Summary Saved")
  }

  let item = [];
 
  function fetchData() {
      itemRef.on('value', function (snap) {
          // console.log(snap)
          let a_ = snap.val();
          for (let x in a_) {
              console.log(x)
              console.log(a_[x])
              item.push({  key: x ,   name: a_[x].news})
          }
          setList(item)
      })
  }

  return (
    <><View>
      
         <TextInput
        label="Enter Link"
        returnKeyType="next"
        value={inputData}
        onChangeText={text => setInputData(text)}
      />
       <Button
        mode="contained"
       
        onPress={() => handleSubmit()}
 
        style={{marginLeft: 120,  width: '29%',}}>
        Submit
      </Button>
      
         
        </View>


    <View
      style={{
        flex: 1,
      
      }}>
     
     
      <Text
        style={{
          color: 'purple',
          fontSize: 20,
          fontWeight: '800',
          marginLeft: 20,
          marginTop: 20,
        }}>
       Summarized Content
      </Text>
      <ScrollView>
      <View>
        
        <FlatList
          data={news}
          renderItem={({item, index}) => {
            return (
              <>
              
                <Text
                selectable={true}
                  style={{
           
                    paddingLeft: 5,
                    color: 'purple',
                    fontStyle:'italic',
                    // widthLeft: '60%',
                    fontSize: 16,
                    fontWeight: '700',
                  }}>
                  {item}
                  </Text>
                  {/* <TextInput
                  // style={{margin:300}}
           
            returnKeyType="next"
            value={item} onChangeText={(e) => { setNews(e); } } />  */}
<Button
            mode="contained"

            style={{
              marginTop: 24,
              width: '50%',
              marginLeft:85
            }}
            title={isUpdating ? 'Update' : 'Add'} onPress={addHandle}>Save Summary</Button>
              <ScrollView>
            {list.map((item, index) => {
              console.log(item);
              
            })}
          </ScrollView>
             
                </>
      
           );
          }}
        />
      </View>
     

    
     
     </ScrollView>
    </View>
    </>
    


  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"black",
  },
  copiedText: {
    marginTop: 10,
    color: 'red',
  },
});
