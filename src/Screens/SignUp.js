import React, { useState,useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { getDatabase, ref, set } from 'firebase/database';
import  {app} from "../../firebase"
import { auth } from '../../firebase'
export default function SignUp({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    console.log(user)
    if (user) {
  navigation.replace("Home")
  alert("you are registered you can enjoy our app")
  
    }
  })

  return unsubscribe
}, [])

  const handleSignUp =async () => {
   auth.createUserWithEmailAndPassword(email, password);
   const { user } = await auth.createUserWithEmailAndPassword(email, password);
   console.log(email,"email",password,"password");
   const db = getDatabase(app);
      const usersRef = ref(db, 'users/' + user.uid);
      await set(usersRef, {
        name,
        email, password
      });
      alert("Successfully created a Account")

    }

    const handlePhoneSignUp=()=>{
      navigation.replace("PhoneSignUp")
    }

  return (
    <Background>
    
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name}
        onChangeText={text => setName(text)}
       
      />
      <TextInput
        label="Email"
        // returnKeyType="next"
        value={email}
        onChangeText={text => setEmail(text)}
        // error={!!email.error}
        // errorText={email.error}
        // autoCapitalize="none"
        // autoCompleteType="email"
        // textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={text => setPassword(text)}
        // error={!!password.error}
        // errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={handleSignUp}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <Button
        mode="contained"
        onPress={handlePhoneSignUp}
        style={{ marginTop: 24 }}
      >
       Phone Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
