/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const ioredis = require('ioredis')

const clearCache = async () => {
  const redis = new ioredis({
    port: 6379,
    host: 'localhost',
  })

  console.log('🌱 clearing the redis cache 🥷')
  await redis.flushall()
  
  console.log('🌱 cache cleared 🥷')
  redis.quit()
}

if (require.main == module) {
  clearCache()
} else {
  module.exports = dropDb
}
