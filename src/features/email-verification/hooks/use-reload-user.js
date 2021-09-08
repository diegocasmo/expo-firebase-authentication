import { useState } from 'react'
import { reload } from '../../../api/user'

export const useReloadUser = () => {
  const [state, setState] = useState({
    isLoading: false,
    error: null,
  })

  const handleReload = async () => {
    setState({ isLoading: true, error: null })

    try {
      await reload()
      setState({ isLoading: false, error: null })
    } catch (error) {
      setState({ isLoading: false, error })
    }
  }

  return [handleReload, { ...state }]
}
