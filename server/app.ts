import express, { Application, Router } from 'express'
import next from 'next'
import { config } from './configs'
import router from './routes'

interface IExpressConfig {
  apiPath: string
  router: Router
}

const configExpressApp = (expressConfig: IExpressConfig): Application => {
  const app: Application = express()

  // setup next app
  const dev = config.env !== 'production'
  const nextApp = next({ dev })
  const handle = nextApp.getRequestHandler()

  app.use(expressConfig.apiPath, expressConfig.router)

  nextApp.prepare().then(() => {
    app.all('*', (req, res) => {
      return handle(req, res)
    })
  })

  return app
}

const expressConfig: IExpressConfig = {
  router,
  apiPath: '/api',
}

const expressApp = configExpressApp(expressConfig)
export default expressApp
