// THP - Week 08 - Day 01 - Calculatrice
// JavaScript

// Somme
function add(a, b){
  return parseInt(a) + parseInt(b);
}

// Soustraction
function substract(a, b){
  return parseInt(a) - parseInt(b);
}

// Multiplication
function multiply(a, b){
  return parseInt(a) * parseInt(b);
}

// Division
function divide(a, b){
  return parseInt(a) / parseInt(b);
}

// Fonction d'affichage dans la console
consoleText = Array();
function displayConsole(num) {
  consoleText.push(num.toString());
  document.getElementById("calcul").innerHTML = consoleText.join('');
  console.log(num);
  return consoleText;
}

// Fonction qui efface la console
function clearConsole(){
  document.getElementById("calcul").innerHTML = '';
  document.getElementById("result").innerHTML = '';
  consoleText = Array();
  return consoleText;
}

// Fonction qui calcul et affiche le resultat
function getResult(){
  let calcul = document.getElementById("calcul").innerHTML
  if (consoleText[1] == '+') {
    document.getElementById("result").innerHTML = add(consoleText[0], consoleText[2]);
  }
  if (consoleText[1] == '-') {
    document.getElementById("result").innerHTML = substract(consoleText[0], consoleText[2]);
  }
  if (consoleText[1] == 'x') {
    document.getElementById("result").innerHTML = multiply(consoleText[0], consoleText[2]);
  }
  if (consoleText[1] == '/') {
    document.getElementById("result").innerHTML = divide(consoleText[0], consoleText[2]);
  }
}


// //get a reference to the element
// let myBtn = document.getElementById('button');
//
// //add event listener
// document.addEventListener('click', function(event) {
//   document.getElementById("console").innerHTML = event.value;
// });
