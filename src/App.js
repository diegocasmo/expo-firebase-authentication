import React from 'react'

import { Center, Spinner, Alert } from 'native-base'
import { useUserContext } from './context/UserContext'
import { GuestAppNavigator } from './navigation/GuestAppNavigator'
import { UnverifiedAppNavigator } from './navigation/UnverifiedAppNavigator'
import { VerifiedAppNavigator } from './navigation/VerifiedAppNavigator'

export const App = () => {
  const { user, isLoading, error } = useUserContext()

  if (error)
    return (
      <Center flex={1}>
        <Alert status="error">
          <Alert.Icon />
          <Alert.Title>{error.message}</Alert.Title>
        </Alert>
      </Center>
    )

  if (isLoading)
    return (
      <Center flex={1} accessibilityLabel="Loading user profile...">
        <Spinner />
      </Center>
    )

  if (user && user.emailVerified) return <VerifiedAppNavigator />

  if (user) return <UnverifiedAppNavigator />

  return <GuestAppNavigator />
}
