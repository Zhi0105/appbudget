import React, { useState, useContext }  from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, TouchableHighlight  } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import FastImage from 'react-native-fast-image'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Signup = ({ navigation }) => {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data)
  };

  const handlePasswordVisibility = (isVisible) => {
    setisPasswordVisible(!isVisible);
  };



  return (
    <View className="signup-main min-h-screen flex justify-center items-center">
      <View className="body min-h-[90%] bg-white w-full flex justify-center items-center">
          <Image 
            source={require('@_assets/webp/envelop.webp',)}
            style={{ width: 100, height: 100 }}
          />
          <Text className="mt-4 text-3xl font-bold">Create new account</Text>

          <View className="w-3/4 py-4 space-y-4 form md:space-y-6">

            <View className="email-textfield">
              <Controller
                control={control}
                rules={{
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Email"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="email"
              />
              {errors.email && (
                  <Text className="text-sm text-red-400 indent-2">valid email is required*</Text>
              )}
            </View>

            <View className="password-field">
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern: /[\S\s]+[\S]+/,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                      <TextInput
                        className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="password"
                        secureTextEntry={!isPasswordVisible}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                      <TouchableHighlight 
                          className="absolute -inset-y-0 right-0 pointer-events-none px-4 mt-3" 
                          onPress={() => handlePasswordVisibility(isPasswordVisible)}
                      >
                          <MaterialCommunityIcons name={isPasswordVisible ? 'eye-off' : 'eye' } color="gray" size={28} /> 
                      </TouchableHighlight>
                    </View>
                  )}
                  name="password"
                />
                {errors.password && (
                    <Text className="text-sm text-red-400 indent-2">password is required*</Text>
                )}
            </View>

            <TouchableOpacity 
                className="w-full bg-green-500 flex justify-center items-center cursor-pointer hover:bg-gray-300 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onPress={handleSubmit(onSubmit)}
                // disabled={loginLoading}              
              >
                {/* <Text>{loginLoading ? "Please wait..." : "Login"}</Text> */}
                <Text className="text-white font-bold text-xl">CREATE ACCOUNT</Text>
            </TouchableOpacity> 

          </View>

      </View>

      <View className="footer min-h-[10%] w-full bg-[#D9D9D9] flex justify-center items-center p-5">
        <Text className="text-lg font-bold">Already have an account? <Text onPress={() => navigation.navigate('Signin')} className="text-[#2f3d8a] font-extrabold">LOG IN</Text></Text>
      </View>
    </View>
  )
}
