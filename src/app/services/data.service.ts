import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable()
export class DataService {
  questions: Question[];
  private _dataFile = 'questions';

  constructor() {
    this.questions = this.getQuestions();
  }

  getQuestions() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  addQuestion(question: Question) {
    this.questions.unshift(question);
    this._storeQuestions();
  }

  removeQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question === this.questions[i]) {
        this.questions.splice(i, 1);
        this._storeQuestions();
      }
    }
  }

  private _storeQuestions() {
    // localStorage.setItem(this._dataFile, JSON.stringify(this.questions));
    console.log("Save to localstorage disabled, question added only in memory.");
  }

  private _loadQuestions() {
    if (localStorage.getItem(this._dataFile) === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem(this._dataFile));
    }
  }
}
