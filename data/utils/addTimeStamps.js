/* eslint-disable no-undef */
module.exports = (object) => {
  return { ...object, createdAt: new Date().toJSON(), updatedAt: new Date().toJSON() }
}
