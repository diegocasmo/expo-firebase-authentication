import React from 'react'

import { Center, VStack, Alert } from 'native-base'
import { useSignIn } from '../hooks/use-sign-in'
import { EmailAndPasswordForm } from '../../../components/EmailAndPasswordForm'

export const SignInScreen = () => {
  const [signIn, { isLoading, error }] = useSignIn()

  return (
    <Center flex={1}>
      <VStack space={4} alignItems="center" w="90%">
        {error && (
          <Alert status="error">
            <Alert.Icon />
            <Alert.Title>{error.message}</Alert.Title>
          </Alert>
        )}
        <EmailAndPasswordForm
          onSubmit={signIn}
          isLoading={isLoading}
          buttonText="Sign in"
        />
      </VStack>
    </Center>
  )
}
