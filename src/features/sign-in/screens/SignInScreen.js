import React from 'react'

import { Center, VStack } from 'native-base'
import { useSignIn } from '../hooks/use-sign-in'
import { ErrorMessage } from '../../../components/ErrorMessage'
import { EmailAndPasswordForm } from '../../../components/EmailAndPasswordForm'

export const SignInScreen = () => {
  const [signIn, { isLoading, error }] = useSignIn()

  return (
    <Center flex={1}>
      <VStack space={4} alignItems="center" w="90%">
        <ErrorMessage error={error} />
        <EmailAndPasswordForm
          onSubmit={signIn}
          isLoading={isLoading}
          buttonText="Sign in"
        />
      </VStack>
    </Center>
  )
}
