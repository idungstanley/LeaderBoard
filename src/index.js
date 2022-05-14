import './style.css'
import UI from './modules/UI.js'
import Newscore from './modules/newScore.js'
import { createGame, pushScore, fetchScore } from './modules/call-Api.js'

const load = async () => {
  const formInput = document.getElementById('form')
  const refresh = document.querySelector('.btn')

  refresh.addEventListener('click', async () => {
    await fetchScore()
  })

  formInput.addEventListener('submit', async (event) => {
    const pop = document.querySelector(".pop")
    event.preventDefault()

    if (!event.target.elements.name.value || !event.target.elements.score.value) {
      pop.classList.remove('hide-bg')
      pop.classList.add('active-bg')
      pop.textContent = 'Please, Fill All Empty Field.'
      setTimeout(() => {
        pop.classList.add('hide-bg')
        pop.classList.remove('active-bg')
        pop.textContent = ''
      }, 3000)
      return
    }
    const nameInput = document.querySelector('#input').value
    const scoreInput = document.querySelector('#number').value
    const scoreClass = new Newscore(nameInput, scoreInput)
    await pushScore(scoreClass)
    await UI.clearField()
    pop.classList.remove("hide-bg")
    pop.classList.add("active-bg");
    pop.textContent = 'Your score was added, Please hit the refresh button to see the list.'

    setTimeout(() => {
     pop.classList.add('hide-bg')
     pop.classList.remove('active-bg')
      pop.textContent = ''
    }, 3000)
  })
  await createGame()
  await fetchScore()
}

load()
