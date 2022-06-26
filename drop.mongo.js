/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const MongoClient = require('mongodb').MongoClient

const connectDb = async () => {
  const uri = 'mongodb://admin:admin@localhost:27017/'
  const client = new MongoClient(uri)
  return await client.connect()
}

const dropDb = () => {
  connectDb().then(async (mongo) => {
    const resourcesCollection = mongo.db('test').collection('resources')
    const rolesCollection = mongo.db('test').collection('roles')
    const usersCollection = mongo.db('test').collection('users')
    const refreshesCollection = mongo.db('test').collection('refreshes')
    const challengesCollection = mongo.db('test').collection('challenges')
    const checkpointsCollection = mongo.db('test').collection('checkpoints')
    const pathsCollection = mongo.db('test').collection('paths')
    const projectsCollection = mongo.db('test').collection('projects')
    const quizzesCollection = mongo.db('test').collection('quizzes')
    const skillsCollection = mongo.db('test').collection('skills')
    const superSkillsCollection = mongo.db('test').collection('superskills')
    const nodesCollection = mongo.db('test').collection('nodes')
    const edgesCollection = mongo.db('test').collection('edges')
    const enrolledPathsCollection = mongo.db('test').collection('enrolledpaths')
    const affectsCollection = mongo.db('test').collection('affects')
    const nodesStatusCollection = mongo.db('test').collection('nodesstatuses')
    const vouchersCollection = mongo.db('test').collection('vouchers')
    const statisticsCollection = mongo.db('test').collection('statistics')
    const specialQuizzesCollection = mongo.db('test').collection('specialquizzes')
    const challengeStatusCollection = mongo.db('test').collection('challengesstatuses')
    const messagesCollection = mongo.db('test').collection('messages')
    const roomsCollection = mongo.db('test').collection('rooms')
    const roomsMembersCollection = mongo.db('test').collection('roommembers')

    console.log('connected to Mongodb 🥭 -- dropping db collections')

    //* dropping resources
    console.log('🌱 Dropping resources collection 🍀')
    await resourcesCollection.deleteMany()

    //* dropping roles
    console.log('🌱 Dropping roles collection 🍀')
    await rolesCollection.deleteMany()

    //* dropping user
    console.log('🌱 Dropping users collection 🍀')
    await usersCollection.deleteMany()

    //* dropping refresh tokens
    console.log('🌱 Dropping refreshes collection 🍀')
    await refreshesCollection.deleteMany()

    //* dropping challenges
    console.log('🌱 Dropping challenges collection 🍀')
    await challengesCollection.deleteMany()

    //* dropping checkpoints
    console.log('🌱 Dropping checkpoints collection 🍀')
    await checkpointsCollection.deleteMany()

    //* dropping paths
    console.log('🌱 Dropping paths collection 🍀')
    await pathsCollection.deleteMany()

    //* dropping projects
    console.log('🌱 Dropping projects collection 🍀')
    await projectsCollection.deleteMany()

    //* dropping quizzes
    console.log('🌱 Dropping quizzes collection 🍀')
    await quizzesCollection.deleteMany()

    //* dropping skills
    console.log('🌱 Dropping skills collection 🍀')
    await skillsCollection.deleteMany()

    //* dropping superSkills
    console.log('🌱 Dropping superSkills collection 🍀')
    await superSkillsCollection.deleteMany()

    //* dropping nodes
    console.log('🌱 Dropping nodes collection 🍀')
    await nodesCollection.deleteMany()

    //* dropping edges
    console.log('🌱 Dropping edges collection 🍀')
    await edgesCollection.deleteMany()

    //* dropping enrolled paths
    console.log('🌱 Dropping enrolled paths collection 🍀')
    await enrolledPathsCollection.deleteMany()

    //* dropping affects
    console.log('🌱 Dropping affects collection 🍀')
    await affectsCollection.deleteMany()

    //* dropping nodes statuses
    console.log('🌱 Dropping nodes statuses collection 🍀')
    await nodesStatusCollection.deleteMany()

    //* dropping vouchers
    console.log('🌱 Dropping vouchers collection 🍀')
    await vouchersCollection.deleteMany()

    //* dropping statistics
    console.log('🌱 Dropping statistics collection 🍀')
    await statisticsCollection.deleteMany()

    //* dropping special quizzes
    console.log('🌱 Dropping special quizzes collection 🍀')
    await specialQuizzesCollection.deleteMany()

    //* dropping challenges
    console.log('🌱 Dropping challenges collection 🍀')
    await challengeStatusCollection.deleteMany()

    //* dropping messages
    console.log('🌱 Dropping messages collection 🍀')
    await messagesCollection.deleteMany()

    //* dropping rooms
    console.log('🌱 Dropping rooms collection 🍀')
    await roomsCollection.deleteMany()

    //* dropping rooms members
    console.log('🌱 Dropping rooms members collection 🍀')
    await roomsMembersCollection.deleteMany()

    await mongo.close()
  })
}

if (require.main == module) {
  dropDb()
} else {
  module.exports = dropDb
}
