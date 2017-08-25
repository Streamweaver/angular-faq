import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
    this.questions = [
      {
        q: 'What is your name?',
        a: 'My name is Scott',
        hide: true
      },
      {
        q: 'What is your favorite color?',
        a: 'My favorite color is blue',
        hide: true
      },
      {
        q: 'What is your favorite programming language?',
        a: 'My favorite programming language is python or Go',
        hide: true
      }
    ];
  }

  getQuestions() {
    return this.questions;
  }

  addQuestion(question: Question) {
    this.questions.unshift(question);
  }
}
