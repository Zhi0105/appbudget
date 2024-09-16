import React, { useState, useContext } from 'react'
import { Text, View, TextInput, TouchableOpacity, TouchableHighlight  } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
// import { AuthContext } from '@_context/AuthContext';
// import FastImage from 'react-native-fast-image'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Login = ({ navigation }) => {
  // const [isPasswordVisible, setisPasswordVisible] = useState(false);
  // const { login, loginLoading } = useContext(AuthContext)
  
  // const {
  //   handleSubmit,
  //   control,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  // const onSubmit = (data) => {
  //   login(data)
  // };

  // const handlePasswordVisibility = (isVisible) => {
  //   setisPasswordVisible(!isVisible);
  // };


  return (
    <View className="login-main min-h-screen flex justify-center items-center">
      <Text className="text-green-500 text-2xl font-bold">Hello from Login screen!</Text>
    </View>
  )
}