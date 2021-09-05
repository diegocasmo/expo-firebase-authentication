import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { GuestWelcomeScreen } from '../features/guest-welcome/screens/GuestWelcomeScreen'
import { SignUpScreen } from '../features/sign-up/screens/SignUpScreen'

const Stack = createStackNavigator()

export const GuestAppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="GuestWelcome"
      component={GuestWelcomeScreen}
      options={{
        title: 'Welcome',
        headerShown: false,
        gestureEnabled: false,
      }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{ title: 'Create Account' }}
    />
  </Stack.Navigator>
)
