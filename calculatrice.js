// THP - Week 08 - Day 01 - Calculatrice
// JavaScript

// Somme
function add(a, b){
  return a + b;
}

// Soustraction
function substract(a, b){
  return a - b;
}

// Multiplication
function multiply(a, b){
  return a * b;
}

// Division
function divide(a, b){
  return a / b;
}

// Fonction d'affichage dans la console
consoleText = Array();
function displayConsole(num) {
  consoleText.push(num.toString());
  document.getElementById("console").innerHTML = consoleText;
  console.log(consoleText);
}

function clear() {
  consoleText = Array();
  document.getElementById("console").innerHTML = consoleText;
  return consoleText
}

function getResult(){
  
}


// //get a reference to the element
// let myBtn = document.getElementById('button');
//
// //add event listener
// document.addEventListener('click', function(event) {
//   document.getElementById("console").innerHTML = event.value;
// });
