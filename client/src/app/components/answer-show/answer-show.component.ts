import { Component } from '@angular/core';

@Component({
  selector: 'app-answer-show',
  templateUrl: './answer-show.component.html',
  styleUrls: ['./answer-show.component.scss']
})
export class AnswerShowComponent {
  // icon, body, showText, isAnswerClicked, onClick
  showText = false;
  isAnswerClicked = true;
  onAnswerCheckChange() {
    // this.isAnswerClicked = event.target.checked;
  }
}
