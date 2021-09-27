import { quoteData } from "./quoteData.js";
import { colors } from "./quoteData.js";

let quoteText = document.querySelector("#text");
let quoteBox = document.querySelector("#quote-box");
let quoteAuthor = document.querySelector("#author");
let btn = document.querySelector("#new-quote");
let body = document.querySelector("body");
let icon1 = document.querySelector("#icon1");
let icon2 = document.querySelector("#icon2");

//Generate random quote when new quote button is clicked
btn.addEventListener("click", quoteGenerator);

//Generate random quote when page loads
window.onload = quoteGenerator();

function quoteGenerator() {
  //Get random quote and author
  let quote = quoteData[Math.floor(Math.random() * quoteData.length)];

  quoteText.innerText = quote.text;
  quoteAuthor.innerText = quote.author;

  //Get random color
  let color = colors[Math.floor(Math.random() * colors.length)];

  quoteBox.style.color = color;
  btn.style.borderColor = color;
  btn.style.backgroundColor = color;
  body.style.backgroundColor = color;
  icon1.style.color = color;
  icon2.style.color = color;
}

//Tweet quote
icon1.addEventListener("click", () => {
  const tweetUrl = "https://twitter.com/intent/tweet?text=";
  window.open(`${tweetUrl}${quoteText.innerText}`);
})
