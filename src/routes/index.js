import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ msg: 'Api running!' })
})

export default router
