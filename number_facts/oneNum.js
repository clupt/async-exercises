"use strict";
const BASE_URL = "http://numbersapi.com/";

const $results = $("#lucky-results");

/** processForm: handle submission of form:
 *
 * - make API call to numbersAPI to get number response.
 * - Call showResults, passing in resp.data as argument.
 **/

async function processForm(evt) {
  evt.preventDefault();

  const num = $("#luckyNum").val();

  const resp = await axios.get(`${BASE_URL}${num}?json`);
  console.log("resp=", resp);
  showResults(resp.data);
}

/** showResults: Append lucky number information to the DOM.
 **/

function showResults(num) {
  $results.html(`
    <p>Your lucky num is <b>${num.number}</b> (${num.text})</p>
  `);
}

$("#lucky-form").on("submit", processForm);
