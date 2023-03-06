import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-question-show',
  templateUrl: './question-show.component.html',
  styleUrls: ['./question-show.component.scss']
})
export class QuestionShowComponent {
  // question, timer, host, isAnswerClicked, onClick
  // @Output() clickAnswer = new EventEmitter<any>();
  @Output() questionNext = new EventEmitter<any>();
  @Input() questionItem!: Question;
  ngOnInit(): void {
    // this.questionItem={
    //   questionType: "Quiz",
    //   point: 1,
    //   answerTime: 10,
    //   backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfPf8D6YgYZljwi2Deu72v4JRdpbpv5_fxpfs1LHHsonCBxLva3pXbIKaVz5cMZmgaAjA&usqp=CAU",
    //   title: "Câu hỏi mới",
    //   answers: [
    //     { id: "a", body: "dsfasd", isCorrect: false },
    //     { id: "b", body: "dsafas", isCorrect: false },
    //     { id: "c", body: "sdafsda", isCorrect: false },
    //     { id: "d", body: "asdf", isCorrect: false },
    //   ],
    //   questionId: 1,
    // }
  }

  timer=10;
  showText = false;
  isAnswerClicked = false;
  isNextQuestion = false;
  onAnswerCheckChange() {
    // console.log(item)
    // this.isAnswerClicked = true;
    // this.clickAnswer.emit(this.isAnswerClicked);
  }

  ngAfterViewInit():void{
    this.startPreviewCountdown(this.timer)
  }

  nextQuestion() {
    this.questionNext.emit();
  }

  skipQuestion(){
    this.timer=0;
    this.isNextQuestion = true;
    clearInterval(this.timerCountdown)
  }
  timerCountdown:any
  startPreviewCountdown(seconds:any) {
    let time = seconds
    let interval = setInterval(() => {
      this.timer=time;
      if (time === 0) {
        clearInterval(interval)
        // array.some(element => element % 2 === 0)
        this.isNextQuestion = true;
      }
      time--
    }, 1000)
    this.timerCountdown=interval;
  }
}
