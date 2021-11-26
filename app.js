//@ts-check

import {newQuestions} from './data/questions.js';
import { Quiz } from './models/Quiz.js';


function main() {
  const quiz = new Quiz(newQuestions);
}

main();