import Score from "./addScore.js"
import { setStorage, getStorage } from "./storage.js"

const array = [
  { name: 'stanley', score: 34 },
  { name: 'stanley', score: 34 },
  { name: 'stanley', score: 34 },
  { name: 'stanley', score: 34 },
  { name: 'stanley', score: 34 },
]

export default class UI {
  static createTodo = (score) => {
    const scoreList = document.createElement('li')
    scoreList.setAttribute('id')
    scoreList.setAttribute('class', 'list-item')
    scoreList.innerHTML = `<div class ="flex">
    <p>${score.name}:</p><p>${score.score}</p></div>`
    document.querySelector('.score-container').appendChild(scoreList)
  }

  static add(score) {
    array.forEach((score, index)=>{
     const newIndex = (index + 1).toString()
     score.index = newIndex;
    })
    const newTodo = new Score(score.name, score.score, newIndex)
    array.push(newTodo)
    return newTodo
  }

  static showScore = (event) => {
    event.preventDefault()
    const userInput = document.querySelector('#input')
    const description = userInput.value
    const newTodo = UI.add({ description })
    UI.createTodo(newTodo)
    UI.clearField()
  }

  // static renderTodo = () => {
  //   const todos = getStorage()
  //   todos.forEach((todo) => {
  //     UI.createTodo(todo)
  //   })
  // }

  static clearField = () => {
    const userInput = document.querySelector('#input')
    const numberInput = document.querySelector('#number')
    userInput.value = ''
    numberInput.value = ''
  }
}
