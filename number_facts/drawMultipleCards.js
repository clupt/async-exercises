"use strict";

const $results = $("#card-results")

async function getDeck (evt){
  evt.preventDefault()
  const resp = await axios.get(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  )
  const deck = resp.data.deck_id;
  drawCards(deck);
}

async function drawCards(deck){
  const cardPromiseOne = axios.get(
    `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
  )

  const cardPromiseTwo = axios.get(
    `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
  )
  // console.log("value=", resp.data.cards[0].value)
  // console.log("suit=", resp.data.cards[0].suit)
  const cards = await Promise.allSettled([
    cardPromiseOne,
    cardPromiseTwo
  ])

  console.log("cards=", cards);

  for(let card of cards){
    console.log("value=", card.value.data.cards[0].value)
    console.log("suit=", card.value.data.cards[0].suit)
  }
}


$("#card-form").on("submit", getDeck);