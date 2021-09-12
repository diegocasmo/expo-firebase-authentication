import React from 'react'

import { Center, VStack } from 'native-base'
import { useSignUp } from '../hooks/use-sign-up'
import { ErrorMessage } from '../../../components/ErrorMessage'
import { EmailAndPasswordForm } from '../../../components/EmailAndPasswordForm'

export const SignUpScreen = () => {
  const [signUp, { isLoading, error }] = useSignUp()

  return (
    <Center flex={1}>
      <VStack space={4} alignItems="center" w="90%">
        <ErrorMessage error={error} />
        <EmailAndPasswordForm
          onSubmit={signUp}
          isLoading={isLoading}
          withPasswordConfirmation={true}
        />
      </VStack>
    </Center>
  )
}
