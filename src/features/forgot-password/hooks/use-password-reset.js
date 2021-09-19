import { useState } from 'react'
import { sendPasswordReset } from '../../../api/user'

export const usePasswordReset = () => {
  const [state, setState] = useState({
    isLoading: false,
    error: null,
  })

  const handlePasswordReset = async (values) => {
    setState({ isLoading: true, error: null })

    try {
      await sendPasswordReset(values)
      setState({ isLoading: false, error: null })
    } catch (error) {
      setState({ isLoading: false, error })
      throw error
    }
  }

  return [handlePasswordReset, { ...state }]
}
