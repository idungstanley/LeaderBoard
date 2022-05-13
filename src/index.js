import './style.css'
import UI from './modules/UI.js'
import Newscore from './modules/newScore'
import { createGame, pushScore, fetchScore } from './modules/call-Api'

const load = async () => {
  const formInput = document.getElementById('form')
  const refresh = document.querySelector('.btn')

  refresh.addEventListener('click', async () => {
    await fetchScore()
  })

  formInput.addEventListener('submit', async (event) => {
    event.preventDefault()
    const nameInput = document.querySelector('#input').value
    const scoreInput = document.querySelector('#number').value
    const scoreClass = new Newscore(nameInput, scoreInput)
    console.log(scoreClass)
    console.log({
      user: event.target.elements.name.value,
      score: event.target.elements.score.value,
    })
    await pushScore(scoreClass)
    await UI.clearField()
  })
  await createGame()
  await fetchScore()
}

load()
