import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor( private socket:Socket) { }
  playerList= [
    {
      id: 1,
      name: "Player 1",
      score: 0,
      correctAnswer: 0,
    },
    {
      id: 2,
      name: "Player 2",
      score: 0,
      correctAnswer: 0,
    },
  ];

  joinGame(data:any) {
    this.socket.emit('join-room', data);
  }
}
