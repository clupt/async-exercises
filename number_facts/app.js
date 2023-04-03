"use strict";
const BASE_URL = "http://numbersapi.com/";

const $results = $("#lucky-results");

async function processForm(evt) {
  evt.preventDefault();

  const num = $("#luckyNum").val();

  const resp = await axios.get(`${BASE_URL}${num}?json`);
  console.log("resp=", resp);
  showResults(resp.data);
}

function showResults(num) {
  $results.html(`
    <p>Your lucky num is <b>${num.number}</b> (${num.text})</p>
  `);
}

async function processFormWithMultipleArgs(evt) {
  evt.preventDefault();

  const num = $("#luckyNum").val();
  const num2 = $("#luckyNum2").val();
  const num3 = $("#luckyNum3").val();

  const resp = await axios.get(`${BASE_URL}${num},${num2},${num3}?json`);
  console.log("resp=", resp);
  showMultipleResults(resp.data);
}

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
