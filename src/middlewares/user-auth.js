import { UserUnauthorizedError } from "../errors/UserUnauthorizedError.js"

export const userAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    throw new UserUnauthorizedError()
  }
  req.user = req.headers.authorization
  next()
}