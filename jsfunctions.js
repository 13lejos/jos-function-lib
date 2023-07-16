// find the product of a*b
function basicMultiply(a, b) {
    return a * b;
  }

//find the percentage that a is of b
  function percentage(a, b){
    return ((a/b)*100) + "%";
  }

//find the cube of a number
  function cube(a){
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