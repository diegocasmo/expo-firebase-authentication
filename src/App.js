import React from 'react'

import { Center, Spinner } from 'native-base'
import { useUserContext } from './context/UserContext'
import { GuestAppNavigator } from './navigation/GuestAppNavigator'
import { UnverifiedAppNavigator } from './navigation/UnverifiedAppNavigator'

export const App = () => {
  const { user, isLoading } = useUserContext()

  if (isLoading)
    return (
      <Center flex={1} accessibilityLabel="Loading user profile">
        <Spinner />
      </Center>
    )

  if (user) return <UnverifiedAppNavigator />

  return <GuestAppNavigator />
}
