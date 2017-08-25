import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  questions: Object[];

  constructor() {
    this.questions = [
      {
        q: 'What is your name?',
        a: 'My name is Scott'
      },
      {
        q: 'What is your favorite color?',
        a: 'My favorite color is blue'
      },
      {
        q: 'What is your favorite programming language?',
        a: 'My favorite programming language is python or Go'
      }
    ];
  }

  ngOnInit() {
  }

}
