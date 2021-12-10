//@ts-check

import {newQuestions} from './data/questions.js';
import { Question } from './models/Question.js';
import { Quiz } from './models/Quiz.js';
import {UI} from './models/UI.js'

/**
 * 
 * @param {Quiz} quiz the main quiz object
 * @param {UI} ui UI object
 */
const renderPage = (quiz, ui) => {
  if(quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoise) => {
      quiz.guess(currentChoise),
      renderPage(quiz,ui)
    });
    ui.showProgress(quiz.questionIndex + 1, quiz.question.length);
  }
}

function main() {
  const quiz = new Quiz(newQuestions);
  const ui = new UI();
  renderPage(quiz, ui);
}

main();