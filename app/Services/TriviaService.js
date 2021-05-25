import { ProxyState } from "../AppState.js"
import { Question } from "../Models/Question.js"

class TriviaService{
  
  async getQuestions(){
    let res = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy')
    let data = await res.json()
    console.log(data.results)

    ProxyState.questions = data.results.map(q => new Question(q))

  }
}
export const triviaService = new TriviaService()