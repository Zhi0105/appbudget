import React from 'react'
import { Signup } from '@_components/Pages/Signup'
import { KeyboardAvoidingTemplate } from '@_components/Templates/KeyboardAvoidingTemplate'

export const SignupScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingTemplate>
      <Signup navigation={navigation} />
    </KeyboardAvoidingTemplate>
  )
}