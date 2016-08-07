//***************************//
//Variables Used On Webpage  //
//***************************//

var usedQuotes = [];
var unusedQuotes = [];
var quoteDisplay = getRandomQuote();
var html = '';
var rgbColor;
var quoteTimer = setInterval(printQuote, 5000);

//*****************************************//
//Random Number Generator: Selects Quotes  //
//*****************************************//
//Selects Quote//
//Pulls Quote from Array//
//Re-Fills when Array is Empty//
function getRandomQuote(){
  quoteDisplay = Math.floor(Math.random() * quotes.length);
  unusedQuotes = quotes.splice(quoteDisplay, 1)[0];
  usedQuotes.push(unusedQuotes);
  if (quotes.length === 0){
    quotes = usedQuotes;
    usedQuotes = [];
  }
  return quoteDisplay;
}

//***************************//
//Displays Quotes on Screen  //
//***************************//
//Change Quote in HTML//
function printQuote() {
  do {
    getRandomQuote();
  } while (quoteDisplay === quotes.length);
  html = '<p class="quote">' + quotes[quoteDisplay].quote + '</p>'
  html += '<p class="source">' + quotes[quoteDisplay].source;
  html += '<span class="citation">' + quotes[quoteDisplay].citation + '</span>';
  html += '<span class="year">' + quotes[quoteDisplay].year + '</span></p>';
  document.getElementById('quote-box').innerHTML = html;
  backgroundColor();
}
//Click Action for Button//
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
quoteTimer;
