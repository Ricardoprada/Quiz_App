class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  currecAnswer(choice) {
    return choice === this.answer;
  }

}

const question = new Question();