//@ts-check

import {Question} from './Question.js';

export class Quiz {

  questionIndex = 0;
  score = 0;

  /**
   * 
   * @param {Question[]} question array question
   */
  constructor(question) {
    this.question = question;
  }

  /**
   * 
   * @returns {Question} the cquestion found
   */
  getQuestionIndex() {
    return this.question[this.questionIndex];
  }

  /**
   * 
   * @returns {boolean} if there are no more questions
   */
  isEnded() {
    return this.question.length === this.questionIndex;
  }

  /**
   * 
   * @param {string} answer this is the answer of the question
   */
  guess(answer) {

    if (this.getQuestionIndex().currecAnswer(answer)) {
      this.score++;
    }

    this.questionIndex++;
  }

}