import React from 'react'

import { Center, VStack, Alert } from 'native-base'
import { useSignUp } from '../hooks/useSignUp'
import { EmailAndPasswordForm } from '../../../components/EmailAndPasswordForm'

export const SignUpScreen = () => {
  const [signUp, { isLoading, error }] = useSignUp()

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
          onSubmit={signUp}
          isLoading={isLoading}
          withPasswordConfirmation={true}
        />
      </VStack>
    </Center>
  )
}
