import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import {theme} from '../core/theme';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/core';

const PhoneSignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verifricationId, SetVerificationId] = useState(null);
  // const recapcthaVerifier=useRef(null)
  const navigation = useNavigation();
const [loading,setloading]=useState(false);
 
  const [confirm, setConfirm] = useState(null);

  // Handle the button press
  const sendVerification = async () => {
    if (!phoneNumber) {
      Alert.alert('please enter phone number!');
    } else {
      console.log('number of user---', phoneNumber);
    
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setPhoneNumber('');
   
      setConfirm(confirmation);
      console.log('response from phone number----', confirmation);
      Alert.alert('OTP has been sent to your Number!');
  
    }
  };

  const confirmCode = async () => {
    if (!code) {
      Alert.alert('Please enter otp!');
    } else {
      try {
        setloading(true);
        const response = await confirm.confirm(code);
        console.log('response data----', response);
        setloading(false);
        Alert.alert('Otp Has been Verified');
        navigation.replace('Home');
      } catch (error) {
        console.log('Invalid code.');
      }
    }
  };

  return (
    <>
    { loading === true ?
      <View
        style={{
          height: '5%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          // position:"absolute",
          backgroundColor:"white"
        }}>
       
        <ActivityIndicator size={25} />
      </View>
      :null}
      <View style={style.container}>
        <TouchableOpacity

        >
          <View style={style.icon}>
   
          </View>
        </TouchableOpacity>
        <Text style={style.otpText}>Login Using Otp</Text> 
<TextInput
        placeholder="Phone Number With Country Code"
        onChangeText={text => setPhoneNumber(text)}
        keyboardType="phone-pad"
        autoCompleteType="tel" 
      />
        <Button
        mode="contained"
        onPress={() => sendVerification()}
        style={{ marginTop: 24,width:190 }}
      >
        send verifrication
      </Button> 
        <TextInput
          placeholder="Confirm Code"
          onChangeText={text => setCode(text)}
          keyboardType="number-pad"
        />
           <Button
        mode="contained"
        onPress={confirmCode}
        style={{ marginTop: 24,width:250 }}
      >
        confirm verifrication
      </Button>
      </View>
    </>
  );
};
export default PhoneSignUp;
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginTop: -170,
    marginLeft: -180,
  },
  buttonContainer1: {
    alignItems: 'center',
  },
  button1: {
    backgroundColor: 'red',
    width: '30%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    backgroundColor: 'black',
  },
  textInput: {
    backgroundColor: '#E9EBE0',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    fontSize: 20,
  },
  sendVerification: {
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    fontWeight: '900',
  },
  otpText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
