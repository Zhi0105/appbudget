import React from 'react'
import { Routes } from '@_navigation/Routes';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message'


export const Providers = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <React.Fragment>
      <NavigationContainer ref={navigationRef}>
          <Routes />
          <FlashMessage position="top" floating={false} />
      </NavigationContainer>
    </React.Fragment>
  )
}
