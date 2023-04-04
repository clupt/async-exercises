"use strict";

const BASE_URL = "http://numbersapi.com/";

const $results = $("#lucky-results");

/** getForLuckyFacts: handle submission of form:
 *
 * - make multiple API calls to get 4 responses. Map
 * responses to results variable.
 * - Call displayMultipleFacts, passing in results variable as argument.
 **/

async function getFourLuckyFacts(evt) {
  evt.preventDefault();
  $results.empty();

  const num = $("#luckyNum").val();

  const resp = await axios.get(`${BASE_URL}${num}?json`);
  const resp2 = await axios.get(`${BASE_URL}${num}?json`);
  const resp3 = await axios.get(`${BASE_URL}${num}?json`);
  const resp4 = await axios.get(`${BASE_URL}${num}?json`);

  let results = await Promise.all([resp, resp2, resp3, resp4]);
  // Promise.all accepts an array of promises and returns a new promise
  let text = results.map((result) => result.data.text);
  displayMultipleFacts(text);
}

function displayMultipleFacts(text) {
  for (let fact of text) {
    $results.append(`
    <p><b>${fact}</b></p>
  `);
  }
}

$("#lucky-form").on("submit", getFourLuckyFacts);
