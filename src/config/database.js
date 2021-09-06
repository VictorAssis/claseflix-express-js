import mongoose from 'mongoose'

export const connectDatabase = async () => {
  const host = process.env.DB_HOST
  const username = process.env.DB_USER
  const password = process.env.DB_PASS
  const database = process.env.DB_DATABASE
  await mongoose.connect(`mongodb+srv://${username}:${password}@${host}/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log('Database connected.')
}