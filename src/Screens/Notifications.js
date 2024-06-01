import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native'
import { React, useEffect, useState } from 'react'
import firebase from 'firebase/compat/app';
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import Background from '../components/Background'
import Button from '../components/Button'
import { auth } from '../../firebase'

const Notifications = () => {
  const user = auth.currentUser.uid;
  const itemRef = firebase.database().ref(user + "/Feedback")
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [lists, setLists] = useState([])

  let [isUpdating, setIsUpdating] = useState(false)
  let [currentKey, setCurrentKey] = useState('')
  const [responseMessages, setResponseMessages] = useState([])

  const getFeedbackResponse = async (email) => {
    try {
      const feedbackRef = firebase.database().ref('FeedbackResponse');

      const query = feedbackRef.orderByChild('userId').equalTo(user);
      query.on('value', (snapshot) => {
        const feedbackList = [];
        snapshot.forEach((childSnapshot) => {
          const feedback = childSnapshot.val();
          const feedbackKey = childSnapshot.key;
          feedbackList.push({...feedback, id: feedbackKey});
        });
        setResponseMessages(feedbackList);
      });
      
      // Return an array of feedback messages
      //   const feedbackMessages = [];
      //   feedbackSnapshot.forEach((feedback) => {
      //     feedbackMessages.push({
      //       id: feedback.key,
      //       message: feedback.val().message,
      //       user: feedback.val().user,
      //       email: feedback.val().email,
      //     });
      //   });
      //   return feedbackMessages;
    } catch (error) {
      console.error('Error retrieving feedback messages:', error);
    }
  }


  useEffect(() => {
    getFeedbackResponse();
    fetchData()
  }, [])

  function addHandle() {
    if (isUpdating) {
      itemRef.child(currentKey).update({ name, text, email });
      fetchData()
      setText('')
      setEmail('')
      setName('')
    }
    if (!isUpdating) {
      itemRef.push({ text, email, name });
      fetchData()
      setText('')
      setEmail('')
      setName('')
    }
    alert("Feedback sent to Admin")
  }

  let item = [];

  function fetchData() {
    itemRef.on('value', function (snap) {
      // console.log(snap)
      let a_ = snap.val();
      for (let x in a_) {
        console.log(x)
        console.log(a_[x])
        item.push({ text: a_[x].text, key: x, email: a_[x].email, name: a_[x].name })
      }
      setLists(item)
    })
  }

  function handleUpdate(key, text, email, name) {
    setCurrentKey(key)
    setIsUpdating(true)
    setText(text)
    setEmail(email)
    setName(name)


  }
  function handleDelete(key) {
    const feedbackRef = firebase.database().ref('FeedbackResponse/' + key);
    feedbackRef.remove()
      .then(() => console.log('Feedback response deleted successfully'))
      .catch((error) => console.error('Error deleting feedback: ', error));
  }

  return (<Background>

    {console.log(lists)}

    <ScrollView>
      {responseMessages.map((item, index) => {
        console.log(item);
        return (
          <><View style={{ padding: 5, borderWidth: 0.34, margin: 10 }}>
            <Text style={{ title: 'Name', color: "black" }}>{'\n'}{'\n'}Feedback:{'\n'}{'\n'}  {item.response}</Text>
          </View><View>

              <Button style={styles.button1} onPress={() => handleDelete(item.id)}><Text >Delete</Text></Button>
            </View></>
        );
      })}
    </ScrollView>
  </Background>
  )
}

export default Notifications
const styles = StyleSheet.create({
  rows: {
    flexDirection: 'row',
    marginTop: 4,
    marginLeft: 90
  },
  Text: {
    color: "black",
  },
  button: {
    marginTop: -10,
    marginBottom: -22
  },
  button1: {
    marginTop: 2,
    paddingTop: -230
  },
  link: {
    fontFamily: "fantasy",
    fontWeight: "bold",
    fontSize: 17,
    color: theme.colors.primary,
    textAlign: 'center',

  },
  link1: {
    fontFamily: "fantasy",
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 13,
    color: "green",
    textAlign: 'center',

  },
  link2: {
    fontFamily: "fantasy",
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 15,
    textDecorationLine: 'underline',
    color: theme.colors.primary,
    textAlign: 'center',

  },

  Button: {

  }
})
