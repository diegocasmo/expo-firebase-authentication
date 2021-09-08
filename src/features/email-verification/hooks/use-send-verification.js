import { useState } from 'react'
import { sendVerification } from '../../../api/user'

export const useSendVerification = () => {
  const [state, setState] = useState({
    isLoading: false,
    error: null,
  })

  const handleSendVerification = async () => {
    setState({ isLoading: true, error: null })

    try {
      await sendVerification()
      setState({ isLoading: false, error: null })
    } catch (error) {
      setState({ isLoading: false, error })
    }
  }

  return [handleSendVerification, { ...state }]
}
