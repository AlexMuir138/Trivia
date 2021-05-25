import { ProxyState } from "../AppState.js";
import { triviaService } from "../Services/TriviaService.js"


function drawQuestions(){
  let template = ''

  ProxyState.questions.forEach(question => template += question.listTemplate)
  document.getElementById('app').innerHTML = template
}


export class QuestionsController{
  constructor(){
    ProxyState.on('questions', drawQuestions)
  }

  getQuestions(){
    triviaService.getQuestions()

  }

  isCorrect(selection, correctAnswer){
    console.log(selection, correctAnswer)
    if(selection == correctAnswer){
    }
    window.alert('Correct!')
  }
}