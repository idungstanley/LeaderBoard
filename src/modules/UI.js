export default class UI {
  static createGameScore = (scores) => {
    const scoreList = document.createElement('li')
    scoreList.setAttribute('class', 'list-item')
    scoreList.innerHTML = `<div class ="flex">
    <p>${scores.user}:</p><p>${scores.score}</p></div>`
    return scoreList
  }

  static showScore = (scores) => {
    const listContainer = document.querySelector('.score-container')
    listContainer.innerHTML =
      scores.length> 0 ? '' : '<li>No score has been added yet </li>'
    scores.forEach((score) => {
      listContainer.appendChild(UI.createGameScore(score))
    })
  }

  static clearField = () => {
    const userInput = document.querySelector('#input')
    const numberInput = document.querySelector('#number')
    userInput.value = ''
    numberInput.value = ''
  }
}
