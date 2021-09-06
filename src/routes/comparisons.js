import { Router } from 'express'
import { comparePrices } from '../services/comparisons.js'

const router = Router()

router.post('/comparisons', (req, res) => {
  const {
    weightProduct1,
    priceProduct1,
    weightProduct2,
    priceProduct2
  } = req.body
  if (!weightProduct1) {
    return res.status(400).json({
      error: true,
      msg: 'Missing weightProduct1'
    })
  }
  if (!priceProduct1) {
    return res.status(400).json({
      error: true,
      msg: 'Missing priceProduct1'
    })
  }
  if (!weightProduct2) {
    return res.status(400).json({
      error: true,
      msg: 'Missing weightProduct2'
    })
  }
  if (!priceProduct2) {
    return res.status(400).json({
      error: true,
      msg: 'Missing priceProduct2'
    })
  }
  const response = comparePrices(weightProduct1, priceProduct1, weightProduct2, priceProduct2)
  res.json({
    error: false,
    data: response
  })
})

export default router
