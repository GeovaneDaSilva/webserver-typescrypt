import { IserverSockets } from '../../main/domain/web-sockets/server-sockets';
export class SocketsDTO implements IserverSockets {
    async get (data: any): Promise<any> {
        
        return new Promise(resolve => resolve(
            data
        ))
    }
}