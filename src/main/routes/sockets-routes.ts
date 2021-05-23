import { Router } from 'express'
import { makeSocketsController } from '../factories/sockets'
import { AdaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/sockets', AdaptRoute(makeSocketsController()))
}
