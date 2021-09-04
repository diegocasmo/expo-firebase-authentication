import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { GuestWelcomeScreen } from '../features/guest-welcome/screens/GuestWelcomeScreen'

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
  </Stack.Navigator>
)
