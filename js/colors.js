//***************************//
//Change Background Color    //
//***************************//
//Variable Initialization//
var rgbColor;
//Random Number Generator//
function randomRGB() {
  return Math.floor(Math.random() * 256 );
}
//Sets Color Values//
function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}
//Change Color in Stylesheet//
function backgroundColor() {
  return document.body.style.backgroundColor = randomColor();
}
