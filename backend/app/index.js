import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import mongoose from 'mongoose'
import {config} from 'dotenv'
config()

import schema from 'app/schema'

const app = express()
const {MONGODB_URI, PORT} = process.env

mongoose.connect(MONGODB_URI)
mongoose.connection.once('open', () => {
  console.log('connected to db')
})

app.use('/graphql', graphqlHTTP({schema, graphiql: true}))

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`)
  console.log('pending connection to db...')
})
