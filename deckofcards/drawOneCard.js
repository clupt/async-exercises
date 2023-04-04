"use strict";

const $results = $("#card-results")

async function getDeck (evt){
  evt.preventDefault()
  const resp = await axios.get(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  )
  const deck = resp.data.deck_id;
  drawCard(deck);
}

async function drawCard(deck){
  const resp = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
  )
  console.log("value=", resp.data.cards[0].value)
  console.log("suit=", resp.data.cards[0].suit)
  return resp.data.cards[0]
}


$("#card-form").on("submit", getDeck);