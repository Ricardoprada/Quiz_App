//@ts-check

export class Question {

  /**
   * 
   * @param {String} text this is the text of the question
   * @param {String[]} choices this are the options of the question
   * @param {String} answer this is the answer of the question
   */

  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   * 
   * @param {string} choice some text to guess
   * @returns {boolean} return true, if the answer is correct
   */

  currecAnswer(choice) {
    return choice === this.answer;
  }

}