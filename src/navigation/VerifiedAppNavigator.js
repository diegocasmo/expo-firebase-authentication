import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from '../features/home/screens/HomeScreen'

const Stack = createStackNavigator()

export const VerifiedAppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'Home' }}
    />
  </Stack.Navigator>
)
