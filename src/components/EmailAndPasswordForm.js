import React from 'react'
import PropTypes from 'prop-types'
import { VStack, FormControl, Input, Button } from 'native-base'
import { useFormik, getIn } from 'formik'
import * as Yup from 'yup'

const buildValidationSchema = (withPasswordConfirmation) =>
  Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6),
    // Optionally require password confirmation
    ...(withPasswordConfirmation && {
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null])
        .required(),
    }),
  })

export const EmailAndPasswordForm = ({
  buttonText = 'Create account',
  isLoading,
  onSubmit,
  withPasswordConfirmation = false,
}) => {
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
        ...(withPasswordConfirmation && { passwordConfirmation: '' }),
      },
      validationSchema: buildValidationSchema(withPasswordConfirmation),
      onSubmit,
    })

  return (
    <VStack space={4} alignItems="center" w="100%">
      <FormControl
        isRequired
        isInvalid={getIn(errors, 'email') && getIn(touched, 'email')}
      >
        <FormControl.Label>Email</FormControl.Label>
        <Input
          autoCapitalize="none"
          keyboardType="email-address"
          onBlur={handleBlur('email')}
          onChange={handleChange('email')}
          value={values.email}
        />
      </FormControl>

      <FormControl
        isRequired
        isInvalid={getIn(errors, 'password') && getIn(touched, 'password')}
      >
        <FormControl.Label>Password</FormControl.Label>
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

      {withPasswordConfirmation && (
        <FormControl
          isRequired
          isInvalid={
            getIn(errors, 'passwordConfirmation') &&
            getIn(touched, 'passwordConfirmation')
          }
        >
          <FormControl.Label>Confirm password</FormControl.Label>
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
      )}

      <Button onPress={handleSubmit} isLoading={isLoading}>
        {buttonText}
      </Button>
    </VStack>
  )
}

EmailAndPasswordForm.propTypes = {
  buttonText: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  withPasswordConfirmation: PropTypes.bool,
}
