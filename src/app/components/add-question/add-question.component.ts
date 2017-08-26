import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  @Output() questionAdded = new EventEmitter<Question>();
  q: string;
  a: string;

  constructor() { }

  ngOnInit() {
  }

  addQuestion() {
    this.questionAdded.emit({q: this.q, a: this.a, hide: true});
    this.q = null;
    this.a = null;
  }

}
