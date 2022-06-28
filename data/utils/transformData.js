/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const _ = require('lodash')
const { ObjectId } = require('mongodb')
const bcrypt = require('bcrypt')
const addTimeStamps = require('./addTimeStamps')

const transformObject = async (object) => {
  const transformedObject = {}
  for (const key of Object.keys(object)) {
    let value = object[key]
    if (Array.isArray(value)) value = await transformArray(value)
    else if (typeof value === 'object') value = await transformObject(value)
    else if (typeof value === 'string') value = await transformString(value)

    transformedObject[key] = value
  }

  return transformedObject
}

const transformArray = async (array) => {
  const newArray = []
  for (const element of array) {
    let value = element
    if (Array.isArray(element)) value = await transformArray(element)
    else if (typeof element === 'object') value = await transformObject(element)
    else if (typeof element === 'string') value = await transformString(element)

    newArray.push(value)
  }
  return newArray
}

const transformString = async (value) => {
  if (value.match(/^transform/)) {
    const [prefix, suffix] = value.split(':')
    if (prefix === 'transform_id') {
      return ObjectId(suffix)
    } else if (prefix === 'transform_password')
      return await bcrypt.hash(suffix, 12)
  }

  return value
}

const transformData = async (data) => {
  if (Array.isArray(data)) {
    const transformedArray = await transformArray(data)
    return transformedArray.map((element) => addTimeStamps(element))
  }

  const transformedObject = await transformObject(data)
  return addTimeStamps(transformedObject)
}

module.exports = transformData
