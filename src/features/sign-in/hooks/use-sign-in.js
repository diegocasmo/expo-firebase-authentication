import { useState } from 'react'
import { signIn } from '../../../api/user'

export const useSignIn = () => {
  const [state, setState] = useState({
    isLoading: false,
    error: null,
  })

  const handleSignIn = async (values) => {
    setState({ isLoading: true, error: null })

    try {
      await signIn(values)
      setState({ isLoading: false, error: null })
    } catch (error) {
      setState({ isLoading: false, error })
    }
  }

  return [handleSignIn, { ...state }]
}
