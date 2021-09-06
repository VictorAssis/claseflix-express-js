import { ItemNotFoundError } from '../errors/ItemNotFoundError.js'
import { getItems, getById, insert, update, remove } from '../repositories/items.js'

export const getAllItems = () => {
  return getItems()
}

export const getItem = async (id) => {
  const item = await getById(id)
  if (!item) {
    throw new ItemNotFoundError()
  }
  return item
}

export const createItem = (newItem) => {
  return insert(newItem)
}

export const updateItem = async (id, editFields) => {
  const oldItem = await getItem(id)
  return update(oldItem, editFields)
}

export const deleteItem = (id) => {
  return remove(id)
}