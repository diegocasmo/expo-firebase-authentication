import { useState } from 'react'
import { reauthenticate } from '../../../api/user'

export const useReauthenticate = () => {
  const [state, setState] = useState({
    isLoading: false,
    error: null,
  })

  const handleReauthenticate = async (values) => {
    setState({ isLoading: true, error: null })

    try {
      await reauthenticate(values)
      setState({ isLoading: false, error: null })
    } catch (error) {
      setState({ isLoading: false, error })
      throw error
    }
  }

  return [handleReauthenticate, { ...state }]
}
