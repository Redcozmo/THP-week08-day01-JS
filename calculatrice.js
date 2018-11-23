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


// Fonction qui gère les entrées utilisateurs
function analyse(entreeUser, consoleText) {
  let erreur = "";
  console.log('entree = "' + entreeUser + '" est un ' + typeof(entreeUser));
  // test si entrée est un opérateur
  if (entreeUser.toString().match(/\d/) == null) {
    console.log('entrée utilisateur est un opérateur');
    // test si pas un opérateur comme première entrée
    if (consoleText.length == 0) {
      console.log('consoleText est vide');
      erreur = "First entry need to be a number. Please enter a number";
    }
    // test si pas deux opérateurs de suite
    else if (consoleText[consoleText.length-1].toString().match(/\d/) == null) {
      console.log('deux opérateurs consécutifs');
      erreur = "Could not have two consecutive operators. Please enter a number";
    }
  }
  return erreur;
}

// Fonction d'affichage dans la console
consoleText = Array();
function displayConsole(entreeUser) {
  let erreur = "";
  erreur = analyse(entreeUser, consoleText);
  if (!erreur) {
    consoleText.push(entreeUser.toString());
    numbers = consoleText.join('').split(/\D/);
    document.getElementById("calcul").innerHTML = consoleText.join('');
    console.log(entreeUser);
  }
  document.getElementById("erreur").innerHTML = erreur;
  return consoleText;
}

// Fonction qui efface la console
function clearConsole(){
  document.getElementById("calcul").innerHTML = '';
  document.getElementById("result").innerHTML = '';
  document.getElementById("erreur").innerHTML = '';
  consoleText = Array();
  return consoleText;
}

// Fonction qui organise consoleText
function organize(consoleText) {
  // tab des nombres
  if (consoleText[consoleText.length -1].toString().match(/\D/) == null) {
    numbers.splice(numbers.length-1,1);
  }
  // tab des opérateurs
    operators = Array.from(consoleText.join('').split(/\d/).join(''));
  consoleText = [];
// concaténation
  for (var i = 0; i < numbers.length; i++) {
    consoleText.push(numbers[i]);
    if (operators[i] != null) {
      consoleText.push(operators[i]);
    }
  }
  return consoleText;
}


// Fonction qui calcul et affiche le resultat
function getResult(){
  numbers = consoleText.join('').split(/\D/); // spération des nombres
  num_1 = numbers[0];
  num_2 = numbers[1];
  operateur = consoleText[consoleText.join('').search(/\D/)];
  if (operateur == '+') {
    document.getElementById("result").innerHTML = add(num_1, num_2);
  }
  if (operateur == '-') {
    document.getElementById("result").innerHTML = substract(num_1, num_2);
  }
  if (operateur == 'x') {
    document.getElementById("result").innerHTML = multiply(num_1, num_2);
  }
  if (operateur == '/') {
    document.getElementById("result").innerHTML = divide(num_1, num_2);
  }
}


// //get a reference to the element
// let myBtn = document.getElementById('button');
//
// //add event listener
// document.addEventListener('click', function(event) {
//   document.getElementById("console").innerHTML = event.value;
// });
