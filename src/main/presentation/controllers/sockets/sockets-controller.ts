import { IserverSockets } from '../../../domain/web-sockets/server-sockets'
import { HttpRequest } from '../../protocols/http'
import { serverError, success } from '../../helpers/http-helper'
import { HttpResponse, Controller } from './sockets-protocols'

export class SocketsController implements Controller {
  constructor (private readonly iserverSockets: IserverSockets) {
    this.iserverSockets = iserverSockets
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const body = httpRequest.body

      const dataServer = await this.iserverSockets.get(body)

      return success(dataServer)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
