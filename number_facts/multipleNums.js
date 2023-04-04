"use strict";

const BASE_URL = "http://numbersapi.com/";

const $results = $("#lucky-results");

/** processFormWithMultipleArgs: handle submission of form:
 *
 * - make API call to numbersAPI to get numbers response.
 * - Call showMultipleResults, passing in resp.data as argument.
 **/

async function processFormWithMultipleArgs(evt) {
  evt.preventDefault();

  const num = $("#luckyNum").val();
  const num2 = $("#luckyNum2").val();
  const num3 = $("#luckyNum3").val();

  const resp = await axios.get(`${BASE_URL}${num},${num2},${num3}?json`);
  console.log("resp=", resp);
  showMultipleResults(resp.data);
}

/** showMultipleResults: Append lucky numbers information to the DOM.
 **/

function showMultipleResults(numbers) {
  let values = Object.values(numbers);
  console.log(Object.values(numbers));
  for (let value of values) {
    $results.append(`
    <p><b>${value}</b></p>
  `);
  }
}

$("#lucky-form").on("submit", processFormWithMultipleArgs);
