import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/player.model';
import { AdminHostService } from 'src/app/services/admin-host.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-watting-game',
  templateUrl: './watting-game.component.html',
  styleUrls: ['./watting-game.component.scss']
})
export class WattingGameComponent {
  playerList:Player[]=this.playerService.playerList;
  pinGame = "";
  player$!: Observable<any>;
  constructor(private playerService:PlayerService,
    private adminHostService:AdminHostService) { }
  ngOnInit():void{
    // socket.on("player-added", (player) => {
    //   setPlayerList([...playerList, player])
    // })
    this.pinGame=Date.now().toString().slice(7, 13)
    this.getPlayers()
    this.createRoom()
  }

  startGame() {
    // socket.emit("start-game", playerList)
  }


  // useEffect(() => {
  //   socket.on("player-added", (player) => {
  //     setPlayerList([...playerList, player])
  //   })
  // }, [playerList, socket])

  getPlayers() {
    // console.log('Already joined in :', roomId);
    this.player$= this.adminHostService.getPlayersByRoomId();
    this.player$.subscribe((player:any) => {
      this.playerService.playerList.push(player)
    });
  }

  createRoom() {
    this.adminHostService.createRoom(this.pinGame);
  }

  // sendMessage(newMessage: string) {
  //   let newMessageData:ChatModel = {
  //     roomId: this.roomId,
  //     msg: newMessage,
  //     date: Date.now(),
  //     from: this.userName,
  //   };
  //   this.chatService.sendMessageByRoom(newMessageData);
  //   this.newMessage = '';
  // }

}
