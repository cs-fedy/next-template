import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import { config, Morgan } from '../configs'
import { errorHandler } from '../middlewares'
import { errorTypes } from '../types'

import authRouter from './auth'
import graphqlRouter from './graphql'

const routes = [authRouter, graphqlRouter]

const middlewares = []
if (config.env !== 'test') {
  middlewares.push(Morgan.successHandler)
  middlewares.push(Morgan.errorHandler)
}

// parse cookies
middlewares.push(cookieParser())

// set security HTTP headers
middlewares.push(helmet())

// parse json request body
middlewares.push(express.json())

// parse urlencoded request body
middlewares.push(express.urlencoded({ extended: true }))

// gzip compression
middlewares.push(compression())

// enable cors
middlewares.push(cors())

const router = express.Router()
middlewares.forEach((middleware) => router.use(middleware))
routes.forEach((route) => router.use('/', route))

// send back a 404 error for any unknown api request
router.use((req, res, next) => {
  next(new errorTypes.NotFoundError())
})

// handle error
router.use(errorHandler)

export default router
