import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { Platform } from 'react-native'
// import SplashScreen from 'react-native-splash-screen'

import { RootScreen } from '@_screens/RootScreen'
import { SigninScreen } from '@_screens/SigninScreen'
import { SignupScreen } from '@_screens/SignupScreen'

// import { DrawerNavigator } from './DrawerNavigator'

// import useUserStore from '@_stores/auth';


export const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    // const { user } = useUserStore((state) => ({
    //   user: state.user,
    // }));

    // useEffect(() => {
    //   if(Platform.OS === 'android') { SplashScreen.hide() }
    // }, [])

    // if(user) {
    //   return (
    //     <Stack.Navigator
    //       initialRouteName="Account"
    //       screenOptions={{ headerShown: false }}  
    //     >
    //       <Stack.Screen  
    //         name="Account" component={DrawerNavigator} 
    //         options={{
    //           animation:'slide_from_right'
    //       }}
    //       />
    //     </Stack.Navigator>
    //   )
    // } 

    // if(!user) {
      return (
        <Stack.Navigator
            initialRouteName="Root"
            screenOptions={{ headerShown: false }}  
            
          >
            <Stack.Screen  
              name="Root" component={RootScreen} 
              options={{
                animation:'slide_from_right'
            }}
            />
            <Stack.Screen  
              name="Signin" component={SigninScreen} 
              options={{
                animation:'slide_from_right'
            }}
            />
            <Stack.Screen  
              name="Signup" component={SignupScreen} 
              options={{
                animation:'slide_from_right'
            }}
            />
            {/* <Stack.Screen  
              name="Register" component={RegisterScreen}
              options={{
                animation:'slide_from_right'
            }}
            />
            <Stack.Screen  
              name="Account" component={DrawerNavigator} 
              options={{
                animation:'slide_from_right'
            }}
            /> */}
        </Stack.Navigator>
      )
    }
// }