import express, { Application } from 'express'
import { router } from './controllers'

const app: Application = express()

app.use('/', router)
const PORT = 3030

app.listen(PORT, () => {
  console.log(`Server is running at port:${PORT}`)
})
