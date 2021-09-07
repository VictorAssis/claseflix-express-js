import express from 'express'
import indexRoutes from './routes/index.js'
import comparationsRoutes from './routes/comparisons.js'
import itemsRoutes from './routes/items.js'
import { connectDatabase } from './config/database.js'
import { ItemNotFoundError } from './errors/ItemNotFoundError.js'
import dotenv from 'dotenv'
import { UserUnauthorizedError } from './errors/UserUnauthorizedError.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(indexRoutes)
app.use(comparationsRoutes)
app.use(itemsRoutes)
app.use((error, req, res, next) => {
  if (error instanceof ItemNotFoundError) {
    return res.status(404).end()
  }
  if (error instanceof UserUnauthorizedError) {
    return res.status(401).json({ error: true, msg: error.message })
  }
  console.error(error)
  res.status(500).json({
    error: true,
    msg: error.message
  })
})

connectDatabase()
  .then(() => {
    const port = process.env.PORT || 3000
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`)
    })
  })
  .catch((err) => {
    console.error(err)
  })