import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/player.model';
import { Question } from 'src/app/models/question.model';
import { AdminHostService } from 'src/app/services/admin-host.service';
import { PlayerService } from 'src/app/services/player.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-host-screen',
  templateUrl: './host-screen.component.html',
  styleUrls: ['./host-screen.component.scss']
})
export class HostScreenComponent {

  isGameStarted = false;
  isPreviewScreen = false;
  isQuestionScreen = false;
  isQuestionResultScreen = false;
  isLeaderboardScreen = false;
  currentQuestionIndex = 0
  timer=0;
  questionData:Question = {
    questionType: "Quiz",
    point: 1,
    answerTime: 30,
    backgroundImage: "",
    title: "Câu hỏi mới",
    answers: [
      { id: "a", body: "", isCorrect: false },
      { id: "b", body: "", isCorrect: false },
      { id: "c", body: "", isCorrect: false },
      { id: "d", body: "", isCorrect: false },
    ],
    questionId: 1,
  }

  // const dispatch = useDispatch()
  // const { id } = useParams()
  // const { game } = useSelector((state) => state.games)
  // const { quiz } = useSelector((state) => state.quiz)
  // const { leaderboard } = useSelector((state) => state.leaderboards)
  // const isLanguageEnglish = useSelector((state) => state.language.isEnglish)
  // const [questionResult, setQuestionResult] = useState(
  //   leaderboard?.questionLeaderboard[0]
  // )
  // const [currentLeaderboard, setCurrentLeaderboard] = useState(
  //   leaderboard?.currentLeaderboard[0]
  // )


  playerList:Player[]=this.playerService.playerList;
  pinGame = "";
  player$!: Observable<any>;
  constructor(private playerService:PlayerService,
    private adminHostService:AdminHostService,
    private questionService:QuestionService) { }
  ngOnInit():void{
    this.pinGame=Date.now().toString().slice(7, 13)
    this.getPlayers()
    this.createRoom()
  }

  startGame() {
    // socket.emit("start-game", quiz)
    // socket.emit("question-preview", () => {
      // startPreviewCountdown(5, currentQuestionIndex)
    this.startPreviewCountdown(5)
    // })
    // isGameStarted((prevstate) => !prevstate)
    this.isGameStarted=true;
    this.isPreviewScreen=true;
    this.getQuestionByIndex(this.currentQuestionIndex)
  }

  getQuestionByIndex(index:number){
    this.questionData=this.questionService.questions[index]
  }

  nextQues() {
    // socket.emit("select-answer", event.target.value, () => {
    //   onAnswerCheckChange()
    // })
    this.isQuestionScreen=false;
    this.isQuestionResultScreen=true;
  }

  showNewQuestion(){
    this.currentQuestionIndex++;
    if(this.currentQuestionIndex<this.questionService.questions.length){
      this.isQuestionResultScreen=false;
      this.isPreviewScreen=true;
      this.getQuestionByIndex(this.currentQuestionIndex)
      this.startPreviewCountdown(5)
    }else{
      this.isPreviewScreen=false;
      this.isQuestionResultScreen=false;
      this.isLeaderboardScreen=true;
    }
  }

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

  reloadGame(){
    this.isLeaderboardScreen=false;
    this.isGameStarted=false;
    this.currentQuestionIndex=0;
    this.getQuestionByIndex(this.currentQuestionIndex)
  }

  // useEffect(() => {
  //   dispatch(getGame(id))
  // }, [id, dispatch])

  // useEffect(() => {
  //   if (game) {
  //     dispatch(getQuiz(game.quizId))
  //   }
  // }, [dispatch, game])

  // useEffect(() => {
  //   setTimer(5)
  // }, [])

  // useEffect(() => {
  //   socket.on("get-answer-from-player", (data, id, score, player) => {
  //     updateLeaderboard(data, id, score)
  //     let playerData = { id: data.playerId, userName: player.userName }
  //     setPlayerList((prevstate) => [...prevstate, playerData])
  //   })
  // }, [socket])

  // const updateLeaderboard = async (data, id, score) => {
  //   let question = await dispatch(updateQuestionLeaderboard(data, id))
  //   setQuestionResult(question.questionLeaderboard[data.questionIndex - 1])
  //   let leaderboardData = {
  //     questionIndex: data.questionIndex,
  //     playerId: data.playerId,
  //     playerCurrentScore: score,
  //   }
  //   let leaderboard = await dispatch(
  //     updateCurrentLeaderboard(leaderboardData, id)
  //   )
  //   setCurrentLeaderboard(
  //     leaderboard.currentLeaderboard[data.questionIndex - 1]
  //   )
  // }


  startPreviewCountdown(seconds:any,) {
    this.isLeaderboardScreen=false;
    this.isPreviewScreen=true;
    let time = seconds
    let interval = setInterval(() => {
      this.timer=time;
      if (time === 0) {
        clearInterval(interval)
        // displayQuestion(index)
        this.isPreviewScreen=false;
        this.isQuestionScreen=true;
      }
      time--
    }, 1000)
  }

  // const startQuestionCountdown = (seconds, index) => {
  //   let time = seconds
  //   let interval = setInterval(() => {
  //     setTimer(time)
  //     if (time === 0) {
  //       clearInterval(interval)
  //       displayQuestionResult(index)
  //     }
  //     time--
  //   }, 1000)
  // }
  // const displayQuestionResult = (index) => {
  //   setIsQuestionScreen(false)
  //   setIsQuestionResultScreen(true)
  //   setTimeout(() => {
  //     displayCurrentLeaderBoard(index)
  //   }, 5000)
  // }

  // const displayCurrentLeaderBoard = (index) => {
  //   setIsQuestionResultScreen(false)
  //   setIsLeaderboardScreen(true)
  //   setTimeout(() => {
  //     socket.emit("question-preview", () => {
  //       startPreviewCountdown(5, index)
  //       setPlayerList([])
  //     })
  //   }, 5000)
  // }

  // const displayQuestion = (index) => {
  //   if (index === quiz.questionList.length) {
  //     displayCurrentLeaderBoard(index)
  //   } else {
  //     setQuestionData(quiz.questionList[index])
  //     setCurrentQuestionIndex((prevstate) => prevstate + 1)
  //     let time = quiz.questionList[index].answerTime
  //     let question = {
  //       answerList: quiz.questionList[index].answerList,
  //       questionIndex: quiz.questionList[index].questionIndex,
  //       correctAnswersCount: quiz.questionList[index].answerList.filter(
  //         (answer) => answer.isCorrect === true
  //       ).length,
  //     }
  //     socket.emit("start-question-timer", time, question, () => {
  //       startQuestionCountdown(time, index + 1)
  //     })
  //   }
  // }

}
