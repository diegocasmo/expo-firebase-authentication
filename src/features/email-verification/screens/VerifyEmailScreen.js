import React from 'react'
import { VStack, Center, Heading, Text, Button } from 'native-base'
import { useReloadUser } from '../hooks/use-reload-user'
import { useSendVerification } from '../hooks/use-send-verification'
import { useSignOut } from '../../../hooks/use-sign-out'

export const VerifyEmailScreen = () => {
  const [reloadUser, { isLoading: isReloadingUser }] = useReloadUser()
  const [sendVerification, { isLoading: isResendingVerification }] =
    useSendVerification()
  const [signOut, { isLoading: isSigninOut }] = useSignOut()

  return (
    <Center flex={1}>
      <VStack space={4} alignItems="center" w="90%">
        <Heading>Check your email</Heading>
        <Text>
          We sent you an email with instructions on how to verify your email
          address. Click on the link in the email to get started.
        </Text>
        <Button onPress={reloadUser} isLoading={isReloadingUser}>
          Done
        </Button>
        <Button onPress={sendVerification} isLoading={isResendingVerification}>
          Resend
        </Button>
        <Button onPress={signOut} isLoading={isSigninOut}>
          Cancel
        </Button>
      </VStack>
    </Center>
  )
}
