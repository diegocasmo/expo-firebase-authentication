import { useState } from 'react'
import { signOut } from '../api/user'

export const useSignOut = () => {
  const [state, setState] = useState({
    isLoading: false,
    error: null,
  })

  const handleSignOut = async () => {
    setState({ isLoading: true, error: null })

    try {
      await signOut()
      setState({ isLoading: false, error: null })
    } catch (error) {
      setState({ isLoading: false, error })
    }
  }

  return [handleSignOut, { ...state }]
}
