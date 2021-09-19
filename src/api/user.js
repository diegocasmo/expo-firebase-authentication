import firebase from 'firebase'

export const getUser = () => firebase.auth().currentUser

export const onAuthStateChanged = (args) =>
  firebase.auth().onAuthStateChanged(args)

// Notice Firebase automatically signs user in when their account is created
export const signUp = async ({ email = '', password = '' }) => {
  await firebase.auth().createUserWithEmailAndPassword(email, password)
  sendVerification()
}

export const signIn = ({ email = '', password = '' }) =>
  firebase.auth().signInWithEmailAndPassword(email, password)

export const sendVerification = () => getUser().sendEmailVerification()

export const signOut = () => firebase.auth().signOut()

export const reload = () => getUser().reload()

export const reauthenticate = ({ email = '', password = '' }) =>
  getUser().reauthenticateWithCredential(
    firebase.auth.EmailAuthProvider.credential(email, password)
  )

export const updatePassword = ({ password = '' }) =>
  getUser().updatePassword(password)

export const sendPasswordReset = ({ email = '' }) =>
  firebase.auth().sendPasswordResetEmail(email)
