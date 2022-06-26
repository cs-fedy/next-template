import { makeExecutableSchema } from '@graphql-tools/schema'
import schema from './schema'
import resolvers from './resolvers'

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
})
