// Array of quote texts and authors
let quoteData = [
  {
    text: "We write to taste life twice, in the moment and in retrospect.",
    author: "- Anaïs Nin",
  },
  {
    text:
      "Even if we don't have the power to choose where we come from, we can still choose where we go from there.",
    author: "- Stephen Chbosky",
  },
  {
    text: "And now that you don't have to be perfect, you can be good.",
    author: "- John Steinbeck",
  },
  {
    text:
      "We are cups, constantly and quietly being filled. The trick is knowing how to tip ourselves over and let the beautiful stuff out.",
    author: "- Ray Bradbury",
  },
  {
    text:
      "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    author: "- Oscar Wilde",
  },
  {
    text:
      "Monsters are real, ghosts are real, too. They live inside us, and sometimes they win.",
    author: "- Stephen King",
  },
  {
    text:
      "We are all ordinary. We are all boring. We are all spectacular. We are all shy. We are all bold. We are all heroes. We are all helpless. It just depends on the day.",
    author: "- Brad Meltzer",
  },
  {
    text:
      "Some of us think holding on makes us strong; but sometimes it is letting go.",
    author: "- Herman Hesse",
  },
];

//Array of colors
let colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
];

let quoteText = document.getElementById("text");
let quoteAuthor = document.getElementById("author");
let btn = document.getElementById("new-quote");


function quoteGenerator () {
  //Get random quote and author
  let quote = quoteData[Math.floor(Math.random() * quoteData.length)];

  quoteText.innerText = quote.text;
  quoteAuthor.innerText = quote.author;

  //Get random color
  let color = colors[Math.floor(Math.random() * colors.length)];

  document.getElementById("quote-box").style.color = color;
  document.getElementById("new-quote").style.borderColor = color;
  document.getElementById("new-quote").style.backgroundColor = color;
  document.getElementById("body").style.backgroundColor = color;
  document.getElementById("icon1").style.color = color;
  document.getElementById("icon2").style.color = color;
}

//Generate random quote when page loads
window.onload = quoteGenerator();

//Generate random quote when new quote button is clicked
btn.addEventListener("click", quoteGenerator);

