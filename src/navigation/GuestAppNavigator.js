import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { GuestWelcomeScreen } from '../features/guest-welcome/screens/GuestWelcomeScreen'
import { SignInScreen } from '../features/sign-in/screens/SignInScreen'
import { SignUpScreen } from '../features/sign-up/screens/SignUpScreen'
import { ForgotPasswordScreen } from '../features/forgot-password/screens/ForgotPasswordScreen'

const Stack = createStackNavigator()

export const GuestAppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="GuestWelcome"
      component={GuestWelcomeScreen}
      options={{ title: 'Welcome' }}
    />
    <Stack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{ title: 'Sign In' }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{ title: 'Create Account' }}
    />
    <Stack.Screen
      name="ForgotPassword"
      component={ForgotPasswordScreen}
      options={{ title: 'Forgot Password' }}
    />
  </Stack.Navigator>
)
