import React, { useEffect,useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { auth } from '../../firebase'
import { sendPasswordResetEmail } from 'firebase/auth'

export default function LoginScreen({ navigation }) {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone,setphone]=useState('')
 
  const [showPassword, setShowPassword] = useState(true);
console.log(auth)


  useEffect(() => {
    // Subscribe to changes in the user authentication state
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // Navigate to the Home screen if the user is already authenticated
        navigation.replace("Home");
      }
    });

    // Unsubscribe from the listener when the component unmounts
    return unsubscribe;
  }, [navigation]);
  
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;

        console.log('Logged in with:', user.email);
        alert("you are Logged in")
      })
      
      .catch(error => alert(error.message))
  }
 const ResetPassword=()=>{
if(email!=null){
  sendPasswordResetEmail(auth,email)
  .then(()=>{
    alert("link sent")
  })
  .catch((error)=>{
    const errorCode=error.code
    const errorMessage=error.message
    alert("please enter just email")
  }
  )
  
}
else{
  alert("please eter valid email")
}
 }
  return (
    <Background>
    
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={text => setEmail(text)}
        // error={!!email.error}
        // errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      
      <TextInput
            style={styles.input}
            placeholder="Password"
            // autoComplete='current-password'
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={showPassword ? true : false}
          />
    
        <TouchableOpacity style={styles.button3} onPress={() => setShowPassword(!showPassword)}>
        <Text style={styles.buttonText}>{showPassword ? 'Show Password' : 'Hide Password'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={ResetPassword}
        >
          <Text style={styles.forgot}>Forgot your password? click here</Text>
        </TouchableOpacity>
      <View style={styles.forgotPassword}>

      </View>
      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
      <Button
        mode="contained"
        //onPress={handlePhoneSignUp}
        style={{ marginTop: 24 }}
      >
       Phone Sign In
      </Button>
      {/* <Button mode="contained" onPress={onLoginPressed}>
        Login with Phone Number
      </Button> */}
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})

