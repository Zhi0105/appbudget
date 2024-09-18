import React from 'react'
import { Signin } from '@_components/Pages/Signin'
import { KeyboardAvoidingTemplate } from '@_components/Templates/KeyboardAvoidingTemplate'

export const SigninScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingTemplate>
      <Signin navigation={navigation} />
    </KeyboardAvoidingTemplate>
  )
}