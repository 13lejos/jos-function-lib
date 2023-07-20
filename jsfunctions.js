// find the product of a*b
function basicMultiply(a, b) {
    return a * b;
  }

//find the percentage that a is of b
  function percentage(a, b){
    return ((a/b)*100) + "%";
  }

//find the cube of a number
  function cube(ac){
    return a**3;
  }

//find the cuberoot of a number
  function cuberoot(a){
    return a**(1/3)
  }

//adds 7 to a number
  function add7(a){
    return a + 7
  }

// Take the first character of a string
// take the remaining letters
// capitlize the first character of the string
// add the captilized letter to the remaining letters
  function capitalize(string)
  {
    const firstLetter = string.charAt(0);
    const theRest = string.substring(1);
    const firstCapital = firstLetter.toUpperCase()
    const capitlizedWord = firstCapital + theRest
    return capitlizedWord
  }
// simplified code capitlized
  function capitalize(string)
{
    const word = string

    const capitalized =
    word.charAt(0).toUpperCase()
    + word.slice(1)
    return capitalized
}

//add 20% to the number
function add20Percent(number)
{
    const twentyPercent = number * .2
    const twentyAdded = number +twentyPercent
    return twentyAdded
}

//add a percentage (a) to the number
function addPercentage (number, a)
{
    const percentageAdded = number + ((a/100) * number)
    return percentageAdded
}

//subtract a percentage (a) to the number
function addPercentage (number, a)
{
    const percentageReduced = number - ((a/100) * number)
    return percentageReduced
}

// gets cats
function getCats(){

  const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
console.log(cat);
}
}

//standard for loop

for (let i = 10; i > 0; i--) {
  
  const para = document.createElement('p');
  para.textContent = "hello";
  output.appendChild(para);
}


const redText = document.createElement('p'); // deeclare redText create <p> element
redText.classList.add('redText'); // add a class .redText to <p>
redText.textContent = 'test'; // adds the text
container.appendChild(redText); // add to .container div in HTML (<div id="container"></div>)

const redText = document.createElement('p');
redText.classList.add('redText');
redText.textContent = 'test';
document.body.appendChild(redText); // append to the body

const redText = document.createElement('p');
redText.classList.add('redText');
redText.textContent = 'test';
redText.style.color = 'red' // adds red text
document.body.appendChild(redText);

const imBlue = document.createElement('h3');
imBlue.className = ('imBlue'); //sets class name to h3
imBlue.textContent = "I'm a blue h3";
imBlue.style.color = 'blue';
document.body.appendChild(imBlue);

// create a pink container, with blue border with divs inside//
const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('contentBox');
container.style.backgroundColor = 'pink';
container.style.border = "thick solid #0000FF";
content.textContent = 'test';

container.appendChild(content);

const imDiv = document.createElement('h1');
imDiv.className = 'imDiv';
imDiv.textContent = "I'm a div too";

container.appendChild(imDiv);

const meToo = document.createElement('p');
meToo.className = 'meToo';
meToo.textContent = "me too!"

container.appendChild(meToo);

// end script

//Function Sums the min max and all numbers in between
//create function sumALL with parameters min, max)
const sumAll = function(min, max) {

  let sum = min+max;
//disallows negative numbers
  if( min <0 || max <0) {return 'ERROR' }
//if we use anything other than an integer, we get an error
  if(!Number.isInteger(min)|| !Number.isInteger(max)){return "ERROR"}
//if first parameter is greater than the second, will flip the order for the function to read
  if( min > max){
      const temp = min
      min = max;
      max = temp;
  }
  // for (define middle number; if mid is less than max; add 1 to mid)
  for (let mid = min+1; mid < max; mid++ ){
  // add mid to the running sum
      sum += mid;
      
  }
  return sum;
  }
  
  // Do not edit below this line
  module.exports = sumAll;
  
  
  
  