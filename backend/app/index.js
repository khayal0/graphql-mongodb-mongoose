import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import schema from 'app/schema'

const app = express()
app.use('/graphql', graphqlHTTP({schema, graphiql: true}))

app.get('/users', (req, res, next) => res.json({users: ['lol']}).status(200))

app.listen(4000, () => {
  console.log('Listening port 4000')
})
