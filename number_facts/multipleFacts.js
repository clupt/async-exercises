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

  //TODO: Edit variable names to 'factPromise_'
  const factPromiseOne = axios.get(`${BASE_URL}${num}?json`);
  const factPromiseTwo = axios.get(`${BASE_URL}${num}?json`);
  const factPromiseThree = axios.get(`${BASE_URL}${num}?json`);
  const factPromiseFour = axios.get(`${BASE_URL}${num}?json`);

  // TODO: Pass in updated variable names
  // TODO: Update to allSettled()
  // TODO: Update let to const (never changing)
  let results = await Promise.allSettled([
    factPromiseOne,
    factPromiseTwo,
    factPromiseThree,
    factPromiseFour,
  ]);
  // Promise.all accepts an array of promises and returns a new promise
  let text = results.map((result) => result.data.text);
  displayMultipleFacts(text);
}

// ADD DOCSTRING

function displayMultipleFacts(text) {
  for (let fact of text) {
    $results.append(`
    <p><b>${fact}</b></p>
  `);
  }
}

$("#lucky-form").on("submit", getFourLuckyFacts);
