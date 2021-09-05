import React from 'react'
import PropTypes from 'prop-types'
import { VStack, Center, Button } from 'native-base'

export const GuestWelcomeScreen = ({ navigation }) => {
  const handlePressOnSignIn = () => {
    navigation.navigate('SignIn')
  }

  const handlePressOnSignUp = () => {
    navigation.navigate('SignUp')
  }

  return (
    <Center flex={1}>
      <VStack space={4} alignItems="center" w="90%">
        <Center>
          <Button onPress={handlePressOnSignIn}>Sign in</Button>
        </Center>
        <Center>
          <Button onPress={handlePressOnSignUp}>Create account</Button>
        </Center>
      </VStack>
    </Center>
  )
}

GuestWelcomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}
