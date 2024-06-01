
import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import imagePath from '../constants/imagePath';
export default function Landing({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>EZ Bulletin App</Header>
      <Paragraph>
      The Name You Know. The News You Need.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('SignUp')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
