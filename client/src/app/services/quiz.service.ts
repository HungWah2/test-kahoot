import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private questionSevice: QuestionService,

    ) { }
  quiz :Quiz= {
    quizName: "Quiz mới",
    quizDescription: "Mô tả quiz mới",
    quizImage: "",
    creatorId: "1",
    isPublic: false,
    questions: this.questionSevice.questions,
    quizId: 1,
  }

  updataQuiz(quiz:Quiz){
    this.quiz = quiz;
  }

  saveQuiz(){
    let data=this.quiz
    console.log(data)
  }


}
