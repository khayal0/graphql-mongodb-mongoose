import {Schema, model} from 'mongoose'

const authorSchema = new Schema({
  name: String,
  age: Number,
  authorId: String,
})

export default model('Author', authorSchema)
