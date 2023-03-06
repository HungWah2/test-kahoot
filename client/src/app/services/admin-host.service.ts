import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class AdminHostService {

  constructor(private socket:Socket) { }

  createRoom(roomId:any) {
    this.socket.emit('create-room', roomId);
  }

  getPlayersByRoomId() {
    // const channel = 'message-' + roomId;
    return this.socket.fromEvent("add-player");
  }

}
