import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question';
import { DataService } from '../../services/data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],  styles: [

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
export class QuestionComponent implements OnInit {
  @Input('question') question: Question;

  growState: string;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.growState = 'small';
  }

  removeQuestion(question: Question) {
    this.dataService.removeQuestion(question);
  }

  animateGrow() {
    this.growState = (this.growState === 'small' ? 'large' : 'small');
  }
}
