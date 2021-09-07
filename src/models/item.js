import mongoose from 'mongoose'

export const ItemModel = mongoose.model('Item', {
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  observations: String,
  user: { type: String, required: true }
})
