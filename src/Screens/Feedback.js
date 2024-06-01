
import Button from '../components/Button'
import firebase from 'firebase/compat/app';
import { theme } from '../core/theme'
import TextInput from '../components/TextInput'
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, StyleSheet } from 'react-native'
import { ref, set, push, onValue, get, child } from "firebase/database";

import { auth } from '../../firebase';
import database from 'firebase/compat/database'
const Feedback = () => {
  const user = auth.currentUser.uid;
  const userDetails = auth.currentUser
  const userName = userDetails.displayName;
  console.log(userName, "name")
  const Useremail = userDetails.email;
  // const Username = userDetails.name
  // console.log(Username, "userdetails")
  // console.log(user,"useridd")
  const itemRef = firebase.database().ref(user + "/Feedback")
  const userRef = firebase.database().ref("users/" + user);
  get(userRef).then((snapshot) => {
    const user = snapshot.val();
    if (user) {
      console.log(user, "user details")
    } else {
      // User does not exist, handle the error or create the user
      console.log("User does not exist");
    }
  });
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [list, setList] = useState([])

  let [isUpdating, setIsUpdating] = useState(false)
  let [currentKey, setCurrentKey] = useState('')
  const [allFeedbackList, setAllFeedbackList] = useState([])

  const getFeedbackMessagesByEmail = async (email) => {
    try {
      const feedbackRef = firebase.database().ref('Feedback');

      const query = feedbackRef.orderByChild('email').equalTo(Useremail);
      query.on('value', (snapshot) => {
        const feedbackList = [];
        snapshot.forEach((childSnapshot) => {
          const feedback = childSnapshot.val();
          feedbackList.push(feedback);
        });
        console.log(feedbackList);
        setAllFeedbackList(feedbackList)
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
    getFeedbackMessagesByEmail()
    fetchData()


  }, [])

  const addFeedback = async () => {
    try {
      const feedbackRef = firebase.database().ref('Feedback');

      // Wait for the "Feedback" collection to be retrieved
      const feedbackSnapshot = await get(feedbackRef);

      // Check if the "Feedback" collection exists
      let feedbackExists = feedbackSnapshot.exists();

      if (!feedbackExists) {
        // Create the "Feedback" collection if it doesn't exist
        await set(feedbackRef, true);
      }

      // Push a new feedback object to generate a unique key
      const newFeedbackRef = push(feedbackRef);

      // Set the feedback object with the message and user reference
      await set(newFeedbackRef, {
        message: text,
        user: user,
        email: Useremail,
      });

      console.log('Feedback added successfully');
    } catch (error) {
      console.error('Error adding feedback:', error);
    }
  };


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
      setList(item)
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
    itemRef.child(key).remove()
    fetchData()
  }


  return (

    <View style={{ flex: 1, padding: 10 }}>


      {console.log(list)}

      <Text style={styles.link}>Help Us Improved!</Text>
      <Text style={styles.link1}>What do you think about this App?</Text>
      <Text style={styles.link2}>Fill the form</Text>
    
      <TextInput
        label=" Email"
        returnKeyType="next"
        value={Useremail} onChangeText={(e) => { setEmail(e); }} />
      <TextInput
        label="Your Feedback"
        returnKeyType="next"
        value={text} onChangeText={(e) => { setText(e); }} />

      <Button
        mode="contained"

        style={{
          marginTop: 24,
          width: '29%',
          marginLeft: 120
        }}
        title={isUpdating ? 'Update' : 'Add'} onPress={addFeedback}>Send</Button>
      <ScrollView>
        {allFeedbackList.map((item, index) => {
          return (
            <><View style={{ padding: 5, borderWidth: 0.34, margin: 10 }}>
            
              <Text style={{ flex: 0.90, color: "black" }}>Email:{'\t'}{'\t'} {item?.email}</Text>
              <Text style={{ title: 'Name', color: "black" }}>{'\n'}{'\n'}Feedback:{'\n'}{'\n'}  {item?.message}</Text>
            </View><View>
               
                <Button style={styles.button1} onPress={() => handleDelete(item.key)}><Text >Delete</Text></Button>
              </View></>
          );
        })}
      </ScrollView>
    </View>


  )
}

export default Feedback
const styles = StyleSheet.create({

  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  button: {
    marginTop: -10,
    marginBottom: -22
  },
  button1: {
    marginTop: 2,
    paddingTop: -230
  },
  container: {
    paddingLeft: 10,
    paddingBottom: 20,
    paddingRight: 20,
    borderRadius: 10,
    backgroundColor: "lightblue",
    marginTop: 20,
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

})