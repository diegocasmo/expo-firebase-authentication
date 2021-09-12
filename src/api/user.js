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
