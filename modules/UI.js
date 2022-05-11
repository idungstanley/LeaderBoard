import Score from './addScore.js'
import { setStorage, getStorage } from './storage.js'

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
    scoreList.setAttribute('class', 'list-item')
    scoreList.innerHTML = `<div class ="flex">
    <p>${score.name}:</p><p>${score.score}</p></div>`
    document.querySelector('.score-container').appendChild(scoreList)
  }

  static add(score) {
    array.forEach((score, index) => {
      const newIndex = (index + 1).toString()
      score.index = newIndex;
    })
  }
  
  static showScore = (event) => {
    event.preventDefault()
    const input = document.getElementById("input");
    const number = document.getElementById("number");
    const nameInput = input.value;
    const numInput= number.value;
    const newIndex = array.length + 1;
    const newTodo = new Score(nameInput, numInput, newIndex); 
    UI.createTodo(newTodo)
    UI.clearField()
  }
  static clearField = () => {
    const userInput = document.querySelector('#input')
    const numberInput = document.querySelector('#number')
    userInput.value = ''
    numberInput.value = ''
  }
}
