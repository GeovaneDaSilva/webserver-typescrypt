import { SocketsDTO } from "../../DTO/web-sockets/dto-sockets"
import { SocketsController } from "../presentation/controllers/sockets/sockets-controller"



export const makeSocketsController = (): SocketsController => {
  const socketsDTO = new SocketsDTO()
  const socketsController = new SocketsController(socketsDTO)
  return socketsController
}
