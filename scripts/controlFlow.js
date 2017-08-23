/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

var randomNumber = Math.round(Math.random()*5);

if (randomNumber%3 == 0){
  alert("fizz");
  console.log(randomNumber);
}else if(randomNumber%5 == 0){
  alert("buzz");
  console.log(randomNumber);
}else (console.log(randomNumber));