import firebase from 'firebase'

// Notice Firebase automatically signs user in when their account is created
export const signUp = async ({ email = '', password = '' }) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}
