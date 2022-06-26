/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const transformData = require('./utils/transformData')
const readJsonFile = require('./utils/readJsonFile')

module.exports = async (mongo) => {
  const resourcesCollection = mongo.db('test').collection('resources')
  const rolesCollection = mongo.db('test').collection('roles')

  //* seeding resources collection
  console.log('🌱 Seeding resources collection 🍀')
  const resources = await readJsonFile('resources.json')
  const transformedResources = await transformData(resources)
  await resourcesCollection.insertMany(transformedResources)

  //* seeding roles collection
  console.log('🌱 Seeding roles collection 🍀')
  const roles = await readJsonFile('roles.json')
  const transformedRoles = await transformData(roles)
  await rolesCollection.insertMany(transformedRoles)
}
