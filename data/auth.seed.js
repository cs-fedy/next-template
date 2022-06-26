/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const _ = require('lodash')
const readJsonFile = require('./utils/readJsonFile')
const transformData = require('./utils/transformData')

module.exports = async (mongo) => {
  console.log('🌱 Seeding with users data 🍀')
  const usersCollection = mongo.db('test').collection('users')
  const statsCollection = mongo.db('test').collection('statistics')
  const users = await readJsonFile('users.json')
  const transformedUsers = await transformData(users)
  const promises = transformedUsers.map((user) => {
    const { isStudent } = user
    if (isStudent) statsCollection.insertOne({ student: user._id, score: 0 })
    usersCollection.insertOne(_.omit(user, 'isStudent'))
  })

  await Promise.all(promises)
}
