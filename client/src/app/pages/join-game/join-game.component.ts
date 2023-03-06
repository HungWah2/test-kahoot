import { Component } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';


@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.scss']
})
export class JoinGameComponent {
  constructor(private playerService:PlayerService) { }
  // const user = JSON.parse(localStorage.getItem("profile"))
  isPlayerAdded = false
  pin: string = ""
  namePlayer: string = ""
  // const pinRef = useRef("")
  // const history = useHistory()
  // const socket = useSelector((state) => state.socket.socket)

  // useEffect(()=>{
  //   socket?.on("move-to-game-page", (gameId) => {
  //     dispatch(
  //       createPlayerResult({
  //         playerId: user.result._id,
  //         gameId: gameId,
  //         score: 0,
  //         answers: [],
  //       })
  //     )
  //     history.push(`/games/player/${gameId}`)
  //   })
  // }, [socket, dispatch, history, user.result._id])

  // const result = (message, playerId, gameId) => {
  //   if (message === "correct") {
  //     dispatch(addPlayer(gameId, playerId))
  //     setIsPlayerAdded(true)
  //   } else {
  //     alert("Podałeś zły pin lub gra nie istnieje")
  //   }
  // }

  joinGame() {
    if(isNaN(Number(this.pin)) || this.namePlayer.length === 0){
      alert("Please enter correct pin and name")
      return
    }
    let infoPlayer = {
      room: this.pin,
      id:3,
      name: this.namePlayer,
      score: 0,
      correctAnswer: 0,
    }
    this.playerService.joinGame(infoPlayer);
    this.isPlayerAdded = !this.isPlayerAdded
  }

  // joinRoom(roomId: string) {
  //   if(roomId || this.userName) {
  //     console.log('Already joined in :', roomId);
  //     this.player$= this.playerService.getMessagesByRoomId(roomId);
  //     this.player$.subscribe((player:any) => {this.playerService.playerList.push(player)});
  //   }else{
  //     alert('Please fill in the room id and your name');
  //   }
  // }

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
