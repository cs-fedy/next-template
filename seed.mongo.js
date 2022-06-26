/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const MongoClient = require('mongodb').MongoClient
const seedRolesData = require('./data/roles.seed')
const seedAuthData = require('./data/auth.seed')
const seedPlatformContent = require('./data/content.seed')
const relationsSeed = require('./data/relation.seed')

const connectDb = async () => {
  const uri = 'mongodb://admin:admin@localhost:27017/'
  const client = new MongoClient(uri)
  return await client.connect()
}

const seedDb = (...seeders) => {
  connectDb().then(async (mongo) => {
    console.log('connected to Mongodb 🥭 -- seeding db')

    for (const seed of seeders) {
      await seed(mongo)
    }

    await mongo.close()
  })
}

if (require.main == module) {
  seedDb(seedRolesData, seedAuthData, seedPlatformContent, relationsSeed)
} else {
  module.exports = seedDb
}

// TODO: add resources to students and their checking logics
// TODO: as well for the instructors
