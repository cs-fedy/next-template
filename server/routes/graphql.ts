import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from '../graphql'

const authRouter = express.Router()
authRouter.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
)

// TODO: setup graphql requests logger

export default authRouter
