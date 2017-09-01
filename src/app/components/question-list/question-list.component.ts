import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Question } from '../../models/question';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
  styles: [

  ],
  animations: [
    trigger('growAnimation', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.2)'
      })),
      transition('small => large', animate('300ms ease-in'))
      ])
  ]
})
export class QuestionListComponent implements OnInit {
  questions: Question[];

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.questions = this.dataService.getQuestions();
  }

  addQuestion(question: Question) {
    this.dataService.addQuestion(question);
  }

}
