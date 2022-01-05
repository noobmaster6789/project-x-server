declare namespace Express {
  type User = {
    name: string
    email: string
  }
  interface Request {
    user?: User | undefined
  }
}
