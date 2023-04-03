"use strict";
const BASE_URL = 'http://numbersapi.com/';

const $results = $('#lucky-results');


async function processForm(evt) {
  evt.preventDefault();

  const num = $('#luckyNum').val()
  const year = $('#year').val()

  const resp = await axios.get(`${BASE_URL}${num}?json`)
  console.log("resp=", resp);
  showResults(resp.data)
};

function showResults(num){
  $results.html(`
    <p>Your lucky num is <b>${num.number}</b> (${num.text})</p>
  `)
}

$("#lucky-form").on("submit", processForm);