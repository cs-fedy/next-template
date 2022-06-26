import express from 'express'

const router = express.Router()

router.get('/', (req, res) => res.end('hello world'))

const authRouter = express.Router()
authRouter.use('/auth', router)
export default authRouter
