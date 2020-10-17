const games = require('../models/games.json');
 
//PUT


const updateAllGame = (req, res) =>{
  const updatedGame = req.body
  const id = parseInt(req.params.id)

  const gamesId = games.map(allGames => allGames.id)

  const updateId = gamesId.indexOf(id)

  const updatedGameId = {id, ...updatedGame}
  games.splice(updateId, 1, updatedGameId)

  res.status(200).send(games.find(allGames=>allGames.id === id))
  console.log(updatedGameId)
}

//PATCH

const updatePartGame = (req, res) => {
  const udpdatedPart = req.body
  const id = parseInt(req.params.id)

  const gamesToUpdate = games.find(allGames => allGames.id == id)

  /* for (key in udpdatedPart) { 
    gamesToUpdate[key] = udpdatedPart[key]
  } */

  Object.keys(udpdatedPart).forEach((key)=>{
    gamesToUpdate[key] = udpdatedPart[key]
  })

  res.status(200).send(gamesToUpdate)
}



module.exports = {
  updateAllGame,
  updatePartGame
}