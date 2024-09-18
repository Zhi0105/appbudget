import React from 'react'
import { Text, View, Image } from 'react-native'

export const Root = ({ navigation }) => {
  const handleLoginPage = () => {
    navigation.navigate('Signin')
  }


  return (
    <View className="root-main min-h-screen flex justify-center items-center">
      <View className="header min-h-[25%] w-full bg-[#29F8B4] flex justify-center items-center">
          <Image 
            source={require('@_assets/webp/login.webp')}
          />
      </View>
      <View className="body min-h-[55%] w-full bg-white flex justify-center items-center">
        <Text className="font-semibold text-lg">Sign up below to create a</Text>
        <Text className="font-semibold text-lg">secure account.</Text>
        <Text className="pt-8 text-lg font-bold">Already have an account? <Text onPress={handleLoginPage} className="text-[#2f3d8a] font-extrabold">LOG IN</Text></Text>
      </View>
      <View className="footer min-h-[20%] w-full bg-[#D9D9D9] flex justify-center items-center p-5">
          <Text className="font-semibold">
            By signing up or connecting with services above
          </Text>
          <Text className="font-semibold">
            you agree to our <Text className="text-[#2f3d8a] underline">Terms of Services</Text> and acknowledge
          </Text>
          <Text className="font-semibold">
            our <Text className="text-[#2f3d8a] underline">Privacy Policy</Text>.describing how we handle your
          </Text>
          <Text className="font-semibold">personal data</Text>
      </View>
    </View>
  )
}