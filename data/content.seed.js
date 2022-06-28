/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// TODO: seed special quizzes
const _ = require('lodash')
const readJsonFile = require('./utils/readJsonFile')
const transformData = require('./utils/transformData')

module.exports = async (mongo) => {
  console.log('🌱 Seeding with platform content 🍀')
  const superSkillsCollection = mongo.db('test').collection('superskills')
  const skillsCollection = mongo.db('test').collection('skills')
  const quizzesCollection = mongo.db('test').collection('quizzes')
  const checkpointsCollection = mongo.db('test').collection('checkpoints')
  const projectsCollection = mongo.db('test').collection('projects')
  const challengesCollection = mongo.db('test').collection('challenges')
  const edgesCollection = mongo.db('test').collection('edges')
  const pathsCollection = mongo.db('test').collection('paths')

  //* seeding superskills collection
  console.log('🌱 Seeding superskills collection 🍀')
  await seedNodes(
    mongo,
    superSkillsCollection,
    await readJsonFile('super_skills.json'),
  )

  //* seeding skills collection
  console.log('🌱 Seeding skills collection 🍀')
  await seedNodes(mongo, skillsCollection, await readJsonFile('skills.json'))

  //* seeding quizzes collection
  console.log('🌱 Seeding quizzes collection 🍀')
  await seedNodes(mongo, quizzesCollection, await readJsonFile('quizzes.json'))

  //* seeding checkpoints collection
  console.log('🌱 Seeding checkpoints collection 🍀')
  await seedNodes(
    mongo,
    checkpointsCollection,
    await readJsonFile('checkpoints.json'),
  )

  //* seeding projects collection
  console.log('🌱 Seeding projects collection 🍀')
  await seedNodes(
    mongo,
    projectsCollection,
    await readJsonFile('projects.json'),
  )

  //* seeding edges collection
  console.log('🌱 Seeding edges collection 🍀')
  const edges = await readJsonFile('edges.json')
  const transformedEdges = await transformData(edges)
  await edgesCollection.insertMany(transformedEdges)

  //* seeding challenges collection
  console.log('🌱 Seeding challenges collection 🍀')
  const challenges = await readJsonFile('challenges.json')
  const transformedChallenges = await transformData(challenges)
  await challengesCollection.insertMany(transformedChallenges)

  //* seeding paths collection
  console.log('🌱 Seeding paths collection 🍀')
  const paths = await readJsonFile('paths.json')
  const transformedPaths = await transformData(paths)
  await pathsCollection.insertMany(transformedPaths)
}

const seedNodes = async (mongo, collection, data) => {
  const nodesCollection = mongo.db('test').collection('nodes')

  const promises = data.map(async (element) => {
    const transformedElement = await transformData(element)
    const collectionElement = _.omit(transformedElement, [
      'virtualName',
      'x',
      'y',
    ])
    const { virtualName, x, y, _id: nodeId } = transformedElement

    collection.insertOne(collectionElement)
    nodesCollection.insertOne({ virtualName, data: nodeId, x, y })
  })
  return Promise.all(promises)
}
