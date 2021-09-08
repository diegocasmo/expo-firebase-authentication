import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { VerifyEmailScreen } from '../features/email-verification/screens/VerifyEmailScreen'

const Stack = createStackNavigator()

export const UnverifiedAppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="VerifyEmail"
      component={VerifyEmailScreen}
      options={{ title: 'Verify Email' }}
    />
  </Stack.Navigator>
)
