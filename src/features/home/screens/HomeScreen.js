import React from 'react'
import { VStack, Center, Heading, Button } from 'native-base'
import { useUserContext } from '../../../context/UserContext'
import { useSignOut } from '../../../hooks/use-sign-out'

export const HomeScreen = () => {
  const { user } = useUserContext()
  const [signOut, { isLoading }] = useSignOut()

  return (
    <Center flex={1}>
      <VStack space={4} alignItems="center" w="90%">
        <Heading>Hello, {user.email}.</Heading>
        <Button onPress={signOut} isLoading={isLoading}>
          Sign out
        </Button>
      </VStack>
    </Center>
  )
}
