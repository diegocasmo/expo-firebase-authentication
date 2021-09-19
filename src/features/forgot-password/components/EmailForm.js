import React from 'react'
import PropTypes from 'prop-types'
import { VStack, FormControl, Input, Button } from 'native-base'
import { useFormik, getIn } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
})

export const EmailForm = ({ isLoading, onSubmit }) => {
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: { email: '' },
      validationSchema,
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

      <Button onPress={handleSubmit} isLoading={isLoading}>
        Send email
      </Button>
    </VStack>
  )
}

EmailForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
