import './api'
import { registerRootComponent } from 'expo'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import { App } from './App'
import { UserContextProvider } from './context/UserContext'

const Root = () => (
  <NavigationContainer>
    <NativeBaseProvider>
      <UserContextProvider>
        <App />
        <StatusBar style="auto" />
      </UserContextProvider>
    </NativeBaseProvider>
  </NavigationContainer>
)

registerRootComponent(Root)
