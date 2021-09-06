import { Router } from 'express'
import { ItemNotFoundError } from '../errors/ItemNotFoundError.js'
import { getAllItems, getItem, createItem, updateItem, deleteItem } from '../services/items.js'

const router = Router()

router.get('/items', async (req, res, next) => {
  try {
    const items = await getAllItems()
    const mappedItems = items.map((item) => {
      return {
        _id: item._id,
        name: item.name,
        quantity: item.quantity,
        unit: item.unit
      }
    })
    res.json({
      error: false,
      data: mappedItems
    })
  } catch (error) {
    next(error)
  }
})

router.get('/items/:id', async (req, res, next) => {
  try {
    const item = await getItem(req.params.id)
    res.json({
      error: false,
      data: {
        _id: item._id,
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
        observations: item.observations
      }
    })
  } catch (error) {
    next(error)
  }
})

router.post('/items', async (req, res, next) => {
  try {
    const {
      name,
      quantity,
      unit,
      observations
    } = req.body
    if (!name) {
      return res.status(400).json({
        error: true,
        msg: 'Missing name'
      })
    }
    if (!quantity) {
      return res.status(400).json({
        error: true,
        msg: 'Missing quantity'
      })
    }
    if (!unit) {
      return res.status(400).json({
        error: true,
        msg: 'Missing unit'
      })
    }
    const itemInput = {
      name,
      quantity,
      unit,
      observations
    }
    const createdItem = await createItem(itemInput)
    res.json({
      error: false,
      data: {
        _id: createdItem._id,
        name: createdItem.name,
        quantity: createdItem.quantity,
        unit: createdItem.unit,
        observations: createdItem.observations
      }
    })
  } catch (error) {
    next(error)
  }
})

router.put('/items/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const {
      name,
      quantity,
      unit,
      observations
    } = req.body
    if (!name) {
      return res.status(400).json({
        error: true,
        msg: 'Missing name'
      })
    }
    if (!quantity) {
      return res.status(400).json({
        error: true,
        msg: 'Missing quantity'
      })
    }
    if (!unit) {
      return res.status(400).json({
        error: true,
        msg: 'Missing unit'
      })
    }
    const editFields = {
      name,
      quantity,
      unit,
      observations
    }
    await updateItem(id, editFields)
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

router.delete('/items/:id', async (req, res, next) => {
  try {
    await deleteItem(req.params.id)
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

export default router