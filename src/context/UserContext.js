import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { onAuthStateChanged } from '../api/user'

const UserContext = createContext()

export const UserContextProvider = ({
  children,
  initialState = { user: null, isLoading: true },
}) => {
  const [state, setState] = useState(initialState)

  // Listen to Firebase authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged((firebaseUser) => {
      setState({ user: firebaseUser, isLoading: false })
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>
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
