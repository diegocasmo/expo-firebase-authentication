import React from 'react'
import PropTypes from 'prop-types'
import { VStack, FormControl, Input, Button } from 'native-base'
import { useFormik, getIn } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  password: Yup.string().required().min(6),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null])
    .required(),
})

export const UpdatePasswordForm = ({ isLoading, onSubmit }) => {
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        password: '',
        passwordConfirmation: '',
      },
      validationSchema,
      onSubmit,
    })

  return (
    <VStack space={4} alignItems="center" w="100%">
      <FormControl
        isRequired
        isInvalid={getIn(errors, 'password') && getIn(touched, 'password')}
      >
        <FormControl.Label>New password</FormControl.Label>
        <Input
          autoCapitalize="none"
          secureTextEntry
          autoCorrect={false}
          autoCompleteType="password"
          onBlur={handleBlur('password')}
          onChange={handleChange('password')}
          value={values.password}
        />
      </FormControl>

      <FormControl
        isRequired
        isInvalid={
          getIn(errors, 'passwordConfirmation') &&
          getIn(touched, 'passwordConfirmation')
        }
      >
        <FormControl.Label>Confirm new password</FormControl.Label>
        <Input
          autoCapitalize="none"
          secureTextEntry
          autoCorrect={false}
          autoCompleteType="password"
          onBlur={handleBlur('passwordConfirmation')}
          onChange={handleChange('passwordConfirmation')}
          value={values.passwordConfirmation}
        />
      </FormControl>

      <Button onPress={handleSubmit} isLoading={isLoading}>
        Update password
      </Button>
    </VStack>
  )
}

UpdatePasswordForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
