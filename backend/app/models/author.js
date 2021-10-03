import mongoose from 'mongoose'
const Schema = mongoose.Schema

const authorSchema = new Schema({
  name: String,
  age: Number,
  authorId: String,
})

export default mongoose.model('Author', authorSchema)
