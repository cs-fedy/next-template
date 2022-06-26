/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const getPath = (fileName) => {
  return path.join(__dirname, '../', 'content', fileName)
}

module.exports = getPath
