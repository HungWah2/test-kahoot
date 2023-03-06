import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AnswerInputComponent } from "../components/answer-input/answer-input.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { QuestionItemComponent } from "../components/question-item/question-item.component"
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { QuestionShowComponent } from "../components/question-show/question-show.component";
import { AnswerShowComponent } from "../components/answer-show/answer-show.component";
@NgModule({
  declarations: [
    NavbarComponent,
    AnswerInputComponent,
    QuestionItemComponent,
    QuestionShowComponent,
    AnswerShowComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    NavbarComponent,
    AnswerInputComponent,
    QuestionItemComponent,
    FormsModule,
    CommonModule,
    MatProgressSpinnerModule,
    QuestionShowComponent,
    AnswerShowComponent,
  ]
})
export class SharedModule { }
