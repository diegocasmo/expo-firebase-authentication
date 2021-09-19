import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from '../features/home/screens/HomeScreen'
import { ReauthenticateScreen } from '../features/update-password/screens/ReauthenticateScreen'
import { UpdatePasswordScreen } from '../features/update-password/screens/UpdatePasswordScreen'

const Stack = createStackNavigator()

export const VerifiedAppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'Home' }}
    />
    <Stack.Screen
      name="Reauthenticate"
      component={ReauthenticateScreen}
      options={{ title: 'Sign in' }}
    />
    <Stack.Screen
      name="UpdatePassword"
      component={UpdatePasswordScreen}
      options={{ title: 'Update Password' }}
    />
  </Stack.Navigator>
)
