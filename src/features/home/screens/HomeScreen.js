import React from 'react'
import PropTypes from 'prop-types'
import { VStack, Center, Heading, Button } from 'native-base'
import { useUserContext } from '../../../context/UserContext'
import { useSignOut } from '../../../hooks/use-sign-out'

export const HomeScreen = ({ navigation }) => {
  const { user } = useUserContext()
  const [signOut, { isLoading }] = useSignOut()

  const handlePressOnUpdatePassword = () => {
    navigation.navigate('Reauthenticate')
  }

  return (
    <Center flex={1}>
      <VStack space={4} alignItems="center" w="90%">
        <Heading>Hello, {user.email}.</Heading>
        <Button onPress={handlePressOnUpdatePassword}>Update password</Button>
        <Button onPress={signOut} isLoading={isLoading}>
          Sign out
        </Button>
      </VStack>
    </Center>
  )
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}
