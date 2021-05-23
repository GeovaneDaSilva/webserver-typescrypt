import app from '../config/app'
import * as http from 'http'
import WebSocket from 'ws'

const port = 8889
class App {
  public appExpress

  constructor () {
    this.startServer()
  }

  private startServer () {
    this.appExpress = app

    const server = http.createServer(this.appExpress)

    const wss = new WebSocket.Server({ server })

    wss.on('connection', function connection (ws: WebSocket) {
      ws.on('message', function incoming (msg: WebSocket.Data) {
        console.log(msg)
      })
      ws.send('connected')
    })

    server.listen(port, () => {
      console.log(`'Express server port: \x1b[32m${port}\x1b[0m`)
    })
  }
}

export default new App().appExpress
