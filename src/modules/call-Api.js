import { setGameId, getGameId } from './gameId.js'
import { setScore, getScore } from './addScore.js'
import UI from './UI.js'

const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'
const createGame = async () => {
  const fetchGame = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ name: 'My first Game' }),
  })

  return fetchGame.json().then((res) => {
    const data = res.result
    let gameid = data.substr(14, 20)
    console.log(gameid)
    setGameId(gameid)
  })
}

const fetchScore = async () => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${getGameId()}/scores`
  )
  return response.json().then(({ result }) => {
    setScore(result)
    UI.showScore(getScore())
  })
}

const pushScore = async (scoreAndName) => {
  await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${getGameId()}/scores`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(scoreAndName),
    }
  )
}

export { createGame, pushScore, fetchScore }
