import './api'
import { registerRootComponent } from 'expo'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import { App } from './App'

const Root = () => (
  <NavigationContainer>
    <NativeBaseProvider>
      <App />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  </NavigationContainer>
)

registerRootComponent(Root)
