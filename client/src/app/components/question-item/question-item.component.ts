import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent {
  @Input() questionItem! : Question
  @Input() indexQuestion! : number;
  @Output() questionItemSelect = new EventEmitter<Question>();
  @Output() itemIndexSelect = new EventEmitter<number>();
  ngAfterViewInit() {
    if(this.indexQuestion==1){
      this.questionItemSelect.emit(this.questionItem!)
      this.itemIndexSelect.emit(this.indexQuestion-1)
    }
  }
  // ngOnInit(): void {

  // }
  getQuestionItemSelect(){
    this.questionItemSelect.emit(this.questionItem!)
    this.itemIndexSelect.emit(this.indexQuestion-1)
    // console.log(this.questionItem)
  }
}
