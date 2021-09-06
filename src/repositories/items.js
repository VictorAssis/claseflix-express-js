import { ItemModel } from "../models/item.js"

export const getItems = () => {
  return ItemModel.find()
}

export const getById = async (id) => {
  try {
    const item = await ItemModel.findById(id)
    return item
  } catch {
    return null
  }
}

export const insert = async (newItem) => {
  const item = new ItemModel(newItem)
  await item.save()
  return item
}

export const update = async (oldItem, editFields) => {
  oldItem.name = editFields.name
  oldItem.quantity = editFields.quantity
  oldItem.unit = editFields.unit
  oldItem.observations = editFields.observations
  await oldItem.save()
  return oldItem
}

export const remove = (id) => {
  return ItemModel.deleteOne({ _id: id })
}
