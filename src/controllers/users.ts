import { Router } from 'express'
import { authorize } from 'middlewares/authorize'

export const router = Router()

router.get('', authorize, (req, res) => {
  res.status(200).json(req.user)
})
