import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { onAuthStateChanged, reload, getUser } from '../api/user'

const UserContext = createContext()

export const UserContextProvider = ({
  children,
  initialState = { user: null, isLoading: true, error: null },
}) => {
  const [state, setState] = useState(initialState)

  // Listen to Firebase authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setState({ user, isLoading: false, error: null })
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const handleReload = async () => {
    try {
      await reload()
      const user = getUser()
      setState({ user, isLoading: false, error: null })
    } catch (error) {
      setState({ user: null, isLoading: false, error })
    }
  }

  const value = {
    ...state,
    reload: handleReload,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

UserContextProvider.propTypes = {
  children: PropTypes.node,
  initialState: PropTypes.object,
}

export const useUserContext = () => {
  const userContext = useContext(UserContext)

  if (typeof userContext === 'undefined') {
    throw new Error('useUserContext must be used within a UserContextProvider')
  }

  return userContext
}
