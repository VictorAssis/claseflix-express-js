import { ItemNotFoundError } from '../errors/ItemNotFoundError.js'
import { getItems, getById, insert, update, remove } from '../repositories/items.js'

export const getAllItems = (userId) => {
  return getItems(userId)
}

export const getItem = async (id, userId) => {
  const item = await getById(id)
  if (!item || userId !== item.user) {
    throw new ItemNotFoundError()
  }
  return item
}

export const createItem = (newItem) => {
  return insert(newItem)
}

export const updateItem = async (id, editFields, userId) => {
  const oldItem = await getItem(id, userId)
  return update(oldItem, editFields)
}

export const deleteItem = async (id, userId) => {
  await getItem(id, userId)
  return remove(id)
}