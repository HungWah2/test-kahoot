import { Component } from '@angular/core';

@Component({
  selector: 'app-player-screen',
  templateUrl: './player-screen.component.html',
  styleUrls: ['./player-screen.component.scss']
})
export class PlayerScreenComponent {
  // const socket = useSelector((state) => state.socket.socket)

  // const dispatch = useDispatch()
  // const { playerResult } = useSelector((state) => state.playerResults)
  // const [result, setResult] = useState(playerResult?.answers[0])

  isQuestionAnswered = false;
  isPreviewScreen = false;
  isQuestionScreen = false;
  isResultScreen = false;
  timer = 5;
  answerTime = 0;
  showText = false;
  isAnswerClicked = false;

  answerCorrect = true;

  // const [questionIndex, setQuestionIndex] = useState(0)
  // const [questionData, setQuestionData] = useState()
  // const [correctAnswerCount, setCorrectAnswerCount] = useState(1)

  // const [answer, setAnswer] = useState({
  //   questionIndex: 0,
  //   answers: [],
  //   time: 0,
  // })

  ngOnInit():void{
    this.isPreviewScreen=true;
    this.isResultScreen=false;
    this.startPreviewCountdown(5)

      //   socket.on("host-start-preview", () => {
  //     setIsPreviewScreen(true)
  //     setIsResultScreen(false)
  //     startPreviewCountdown(5)
  //   })
  //   socket.on("host-start-question-timer", (time, question) => {
  //     setQuestionData(question.answerList)
  //     startQuestionCountdown(time)
  //     setAnswer((prevstate) => ({
  //       ...prevstate,
  //       questionIndex: question.questionIndex,
  //       answers: [],
  //       time: 0,
  //     }))
  //     setCorrectAnswerCount(question.correctAnswersCount)
  //   })
  }

  onAnswerCheckChange() {
    if(this.isAnswerClicked){
      this.isQuestionScreen=false;
      this.isQuestionAnswered=true;
    }
  }

  showResult(){
    this.isResultScreen=true;
    this.isQuestionAnswered=false;
  }
  startPreviewCountdown(seconds: number)  {
    let time = seconds
    let interval = setInterval(() => {
      this.timer=time
      if (time === 0) {
        clearInterval(interval)
        this.isPreviewScreen=false;
        this.isQuestionScreen=true;
      }
      time--
    }, 1000)
  }

  startQuestionCountdown(seconds: number){
    let time = seconds
    let answerSeconds = 0
    let interval = setInterval(() => {
      this.timer=time
      this.answerTime= answerSeconds
      if (time === 0) {
        clearInterval(interval)
        // setIsQuestionScreen(false)
        // setIsQuestionAnswered(false)
        // setIsResultScreen(true)
      }
      time--
      answerSeconds++
    }, 1000)
  }

  // const sendAnswer = async () => {
  //   const updatedPlayerResult = await dispatch(
  //     addAnswer(answer, playerResult._id)
  //   )
  //   console.log(
  //     updatedPlayerResult.answers[updatedPlayerResult.answers.length - 1]
  //   )
  //   setResult(
  //     updatedPlayerResult.answers[updatedPlayerResult.answers.length - 1]
  //   )
  //   let data = {
  //     questionIndex: answer.questionIndex,
  //     playerId: updatedPlayerResult.playerId,
  //     playerPoints:
  //       updatedPlayerResult.answers[answer.questionIndex - 1].points,
  //   }
  //   let score = updatedPlayerResult.score
  //   socket.emit("send-answer-to-host", data, score)
  //   dispatch(getPlayerResult(playerResult._id))
  // }

  // const checkAnswer = (name) => {
  //   let answerIndex = answer.answers.findIndex((obj) => obj === name)
  //   if (answer.answers.includes(name)) {
  //     //remove answer
  //     setAnswer((prevstate) => ({
  //       ...prevstate,
  //       answers: [
  //         ...prevstate.answers.slice(0, answerIndex),
  //         ...prevstate.answers.slice(answerIndex + 1, prevstate.answers.length),
  //       ],
  //     }))
  //   } else {
  //     //add answer
  //     setAnswer((prevstate) => ({
  //       ...prevstate,
  //       answers: [...prevstate.answers, name],
  //     }))
  //   }
  //   setAnswer((prevstate) => ({
  //     ...prevstate,
  //     time: answerTime,
  //   }))
  // }

  // useEffect(() => {
  //   if (
  //     answer?.answers.length > 0 &&
  //     answer?.answers.length === correctAnswerCount
  //   ) {
  //     setIsQuestionScreen(false)
  //     setIsQuestionAnswered(true)
  //     sendAnswer()
  //   } else {
  //     setIsQuestionAnswered(false)
  //   }
  // }, [answer?.answers.length, correctAnswerCount, answer, socket])

}
