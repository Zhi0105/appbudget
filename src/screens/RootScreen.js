import React from 'react'
import { Root } from '@_components/Pages/Root'
import { KeyboardAvoidingTemplate } from '@_components/Templates/KeyboardAvoidingTemplate'

export const RootScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingTemplate>
      <Root navigation={navigation} />
    </KeyboardAvoidingTemplate>
  )
}