export class UserUnauthorizedError extends Error {
  constructor () {
    super('User not provided.')
    this.name = 'UserUnauthorizedError'
  }
}