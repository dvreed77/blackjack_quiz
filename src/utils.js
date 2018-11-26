import { keys, sample } from 'lodash'

const valMap = {
  '2': 2, 
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'jack': 10,
  'queen': 10,
  'king': 10,
  'ace': 11
}

const decisionMap = {
  17: {2: 'STAY', 3: 'STAY', 4: 'STAY', 5: 'STAY', 6: 'STAY', 7: 'STAY', 8: 'STAY', 9: 'STAY', 10: 'STAY', 11: 'STAY'},
  16: {2: 'STAY', 3: 'STAY', 4: 'STAY', 5: 'STAY', 6: 'STAY', 7: 'HIT', 8: 'HIT', 9: 'HIT', 10: 'HIT', 11: 'HIT'},
  15: {2: 'STAY', 3: 'STAY', 4: 'STAY', 5: 'STAY', 6: 'STAY', 7: 'HIT', 8: 'HIT', 9: 'HIT', 10: 'HIT', 11: 'HIT'},
  14: {2: 'STAY', 3: 'STAY', 4: 'STAY', 5: 'STAY', 6: 'STAY', 7: 'HIT', 8: 'HIT', 9: 'HIT', 10: 'HIT', 11: 'HIT'},
  13: {2: 'STAY', 3: 'STAY', 4: 'STAY', 5: 'STAY', 6: 'STAY', 7: 'HIT', 8: 'HIT', 9: 'HIT', 10: 'HIT', 11: 'HIT'},
  12: {2: 'HIT', 3: 'HIT', 4: 'STAY', 5: 'STAY', 6: 'STAY', 7: 'HIT', 8: 'HIT', 9: 'HIT', 10: 'HIT', 11: 'HIT'},
  11: {2: 'DBL', 3: 'DBL', 4: 'DBL', 5: 'DBL', 6: 'DBL', 7: 'DBL', 8: 'DBL', 9: 'DBL', 10: 'DBL', 11: 'DBL'},
  10: {2: 'DBL', 3: 'DBL', 4: 'DBL', 5: 'DBL', 6: 'DBL', 7: 'DBL', 8: 'DBL', 9: 'DBL', 10: 'HIT', 11: 'HIT'},
  9: {2: 'HIT', 3: 'DBL', 4: 'DBL', 5: 'DBL', 6: 'DBL', 7: 'HIT', 8: 'HIT', 9: 'HIT', 10: 'HIT', 11: 'HIT'},
  8: {2: 'HIT', 3: 'HIT', 4: 'HIT', 5: 'HIT', 6: 'HIT', 7: 'HIT', 8: 'HIT', 9: 'HIT', 10: 'HIT', 11: 'HIT'}
}

const checkDecision = (decision, player, dealer) => {

  const playerValueTotal = player.cards.reduce((a,b) => (a + b.value), 0)

  console.log(playerValueTotal, player.cards)
  const playerValue = playerValueTotal < 8 ? 8 : (playerValueTotal > 17 ? 17 : playerValueTotal)
  const dealerValue = dealer.value

  const algoDecision = decisionMap[playerValue][dealerValue]

  const algoDecision2 = algoDecision === 'DBL' ? 'HIT' : algoDecision

  return algoDecision2 == decision
}

const getRandomCard = () => {
  const suit = sample(['clubs', 'spades', 'diamonds', 'hearts'])
  const value = sample(keys(valMap))

  return {
    value: valMap[value],
    fname: `${value}_of_${suit}.png`
  }
}

const drawDealer = () => {
  return getRandomCard()
}

const drawPlayer = () => {
  const card1 = getRandomCard()
  const card2 = getRandomCard()

  return {
    card1,
    card2,
    value: card1.value + card2.value
  }
}





console.log(getRandomCard())
console.log(drawDealer())
console.log(drawPlayer())


export {
  getRandomCard,
  drawDealer,
  drawPlayer,
  checkDecision
}