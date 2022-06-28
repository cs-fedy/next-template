/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const transformData = require('./utils/transformData')
const readJsonFile = require('./utils/readJsonFile')

module.exports = async (mongo) => {
  const affectsCollection = mongo.db('test').collection('affects')
  const enrolledPathsCollection = mongo.db('test').collection('enrolledpaths')
  const nodeStatusCollection = mongo.db('test').collection('nodesstatuses')

  //* seeding affects collection
  console.log('🌱 Seeding affects collection 🍀')
  const affects = await readJsonFile('affects.json')
  const transformedAffects = await transformData(affects)
  await affectsCollection.insertMany(transformedAffects)

  //* seeding enrolled paths collection
  console.log('🌱 Seeding enrolled paths collection 🍀')
  const enrolls = await readJsonFile('enrolls.json')
  const transformedEnrolls = await transformData(enrolls)
  await enrolledPathsCollection.insertMany(transformedEnrolls)

  const promises = transformedEnrolls.map((enroll) => {
    const { progressPointer: node, _id: enrolledPath, student } = enroll
    return nodeStatusCollection.insertOne({
      node,
      enrolledPath,
      student,
      isRated: true,
      score: 0,
    })
  })
  await Promise.all(promises)
}
