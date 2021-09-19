import React from 'react'
import PropTypes from 'prop-types'
import { VStack, Center } from 'native-base'
import { useUpdatePassword } from '../hooks/use-update-password'
import { ErrorMessage } from '../../../components/ErrorMessage'
import { UpdatePasswordForm } from '../components/UpdatePasswordForm'

export const UpdatePasswordScreen = ({ navigation }) => {
  const [updatePassword, { isLoading, error }] = useUpdatePassword()

  const handleUpdatePassword = async (values) => {
    try {
      await updatePassword(values)
      navigation.popToTop()
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Center flex={1}>
      <VStack space={4} alignItems="center" w="90%">
        <ErrorMessage error={error} />
        <UpdatePasswordForm
          onSubmit={handleUpdatePassword}
          isLoading={isLoading}
        />
      </VStack>
    </Center>
  )
}

UpdatePasswordScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}
