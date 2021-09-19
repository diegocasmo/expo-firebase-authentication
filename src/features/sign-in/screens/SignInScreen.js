import React from 'react'
import PropTypes from 'prop-types'
import { Center, VStack, Button } from 'native-base'
import { useSignIn } from '../hooks/use-sign-in'
import { ErrorMessage } from '../../../components/ErrorMessage'
import { EmailAndPasswordForm } from '../../../components/EmailAndPasswordForm'

export const SignInScreen = ({ navigation }) => {
  const [signIn, { isLoading, error }] = useSignIn()

  const handlePressOnForgotPassword = () => {
    navigation.navigate('ForgotPassword')
  }

  return (
    <Center flex={1}>
      <VStack space={4} alignItems="center" w="90%">
        <ErrorMessage error={error} />
        <EmailAndPasswordForm
          onSubmit={signIn}
          isLoading={isLoading}
          buttonText="Sign in"
        />
        <Button onPress={handlePressOnForgotPassword}>Forgot password</Button>
      </VStack>
    </Center>
  )
}

SignInScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}
