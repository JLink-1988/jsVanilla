/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

window.onload = function() {
  const myString = "OMG! you will not believe me but...";

  let who = ["The dog", "My Door", "Her cat", "My lego"];
  let action = ["broke", "peed", "crash", "hit"];
  let what = ["the car", "my laptop", "my bicicle"];
  let when = [
    "yesterday",
    "this morning",
    "this evening",
    "last week",
    "while i was lounch"
  ];
  document.body.innerHTML =
    "<h1>" +
    myString +
    "</h1>" +
    "<h1>" +
    who[getRandomInt(4)] +
    " " +
    action[getRandomInt(4)] +
    " " +
    what[getRandomInt(3)] +
    " " +
    when[getRandomInt(5)] +
    "</h1>";
};
