import { useState } from 'react'
import { signUp } from '../../../api/user'

export const useSignUp = () => {
  const [state, setState] = useState({
    isLoading: false,
    error: null,
  })

  const handleSignUp = async (values) => {
    setState({ isLoading: true, error: null })

    try {
      await signUp(values)
      setState({ isLoading: false, error: null })
    } catch (error) {
      setState({ isLoading: false, error })
    }
  }

  return [handleSignUp, { ...state }]
}
