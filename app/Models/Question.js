export class Question{
  constructor(data){
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswer = data.incorrect_answers
    this.randomAnswer = this.shuffleAnswers([...data.incorrect_answers, data.correct_answer])
  }

 

  shuffleAnswers(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

    get listTemplate(){
    return `
    <div class="row">
    <div class="col-12">
    <h4 class="text-success text-center">${this.category}</h4>
    <h4 class="text-primary text-center">${this.question}</h4>
    <div class="d-flex justify-content-center align-items-center">
    <div>${this.Buttons}</div>
    </div>
    </div>
    </div>
    `
  }
  get Buttons(){
    let template = ''
    this.randomAnswer.forEach(rando => template += `
    <button class="btn btn-success" onclick="app.questionsController.isCorrect('${rando}, ${this.correctAnswer}')">${rando}</button>
    `)
    return template
  }
}
