import dotenv from 'dotenv'
import Joi from 'joi'
import path from 'path'

const envFileName = `.env${process.env.NODE_ENV}`
const envPath = __dirname.indexOf('config')
  ? `../../${envFileName}`
  : `../${envFileName}`
dotenv.config({ path: path.join(__dirname, envPath) })

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid('production', 'development', 'test')
      .default('development'),
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().required().description('Mongo DB url'),
    MONGODB_USER: Joi.string().required().description('Mongo DB username'),
    MONGODB_PASS: Joi.string().required().description('Mongo DB password'),
    REDIS_PORT: Joi.string().required().description('Redis cache port'),
    REDIS_HOST: Joi.string().required().description('Redis cache host'),
  })
  .unknown()

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  baseUrl: `http://localhost:${envVars.PORT}`,
  db: {
    mongo: {
      url: envVars.MONGODB_URL + (envVars.NODE_ENV === 'test' ? '-test' : ''),
      user: envVars.MONGODB_USER,
      pass: envVars.MONGODB_PASS,
    },
    redis: {
      port: envVars.REDIS_PORT,
      host: envVars.REDIS_HOST,
    },
  },
}
