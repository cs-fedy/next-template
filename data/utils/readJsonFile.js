/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const getPath = require('./getPath')

const readJsonFile = (fileName) => {
  return new Promise((resolve, reject) => {
    const file = getPath(fileName)
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) reject(err)
      resolve(JSON.parse(data))
    })
  })
}

module.exports = readJsonFile
