export const errorsFirebase = code => {
  switch (code) {
    case 'auth/email-already-in-use':
      return {
        code: 'email',
        message: 'User already exists',
      }
    case 'auth/invalid-email':
      return {
        code: 'email',
        message: 'Email format is invalid',
      }
    case 'auth/user-not-found':
      return {
        code: 'email',
        message: 'User not found',
      }
    case 'auth/wrong-password':
      return {
        code: 'password',
        message: 'Wrong password',
      }
    default:
      return {
        code: 'email',
        message: 'Some error in server',
      }
  }
}
