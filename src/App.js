import React from 'react'

import { Center, Spinner } from 'native-base'
import { ErrorMessage } from './components/ErrorMessage'
import { useUserContext } from './context/UserContext'
import { GuestAppNavigator } from './navigation/GuestAppNavigator'
import { UnverifiedAppNavigator } from './navigation/UnverifiedAppNavigator'
import { VerifiedAppNavigator } from './navigation/VerifiedAppNavigator'

export const App = () => {
  const { user, isLoading, error } = useUserContext()

  if (error)
    return (
      <Center flex={1}>
        <ErrorMessage error={error} />
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
