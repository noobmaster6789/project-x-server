import { NextFunction, Request, Response } from 'express'

export const authorize = (req: Request, res: Response, next: NextFunction) => {
  req.user = {
    name: 'user_authorized',
    email: 'tuannt@example.com',
  }
  return next()
}
