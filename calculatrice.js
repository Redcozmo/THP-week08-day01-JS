// THP - Week 08 - Day 01 - Calculatrice
// JavaScript

// Somme
function add(a, b){ return parseFloat(a) + parseFloat(b); }

// Soustraction
function substract(a, b){ return parseFloat(a) - parseFloat(b); }

// Multiplication
function multiply(a, b){ return parseFloat(a) * parseFloat(b); }

// Division
function divide(a, b){ return parseFloat(a) / parseFloat(b); }


// Fonction qui gère les entrées utilisateurs et renvoi le message d'erreur
function analyse(entreeUser, consoleText) {
  let erreur = "";
  if (consoleText == undefined) {
    console.log('consoleText est vide');
    erreur = "Please enter an operation";
    return;
  }
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
  if (consoleText == undefined) {
    console.log('consoleText est vide');
    erreur = "Please enter an operation";
    return;
  }
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
  if (consoleText == undefined) { return; }
  if (consoleText.length == 0) {
    console.log('consoleText est vide');
    erreur = "Please enter an operation";
    document.getElementById("erreur").innerHTML = erreur;
  }
  else {
    // tab des nombres
    numbers = consoleText.join('').split(/[^0-9.]/g);
    if (consoleText[consoleText.length -1].toString().match(/\D/) != null) {
      numbers.splice(numbers.length-1,1); // supprime le "" à la fin quand présent
    }
    console.log('numbers : ' + numbers);
    // tab des opérateurs
    operators = Array.from(consoleText.join('').split(/[0-9.]/g).join(''));
    console.log('operators : ' + operators);
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
}


// Fonction qui calcul et affiche le resultat
function getResult(){
  consoleText = organize(consoleText);
  console.log('operations : ' + consoleText);
  let result = 0;
  if (consoleText == undefined) { result = ''; return;}
  if (consoleText.length == 1) { result = consoleText[0]; }
  for (var i = 0; i < consoleText.length - 1; i += 2) {
    console.log('i=' + i);
    if (i == 0) {
      console.log('if');
      num_1 = consoleText[i];
      operator = consoleText[i + 1];
      num_2 = consoleText[i + 2];
      i += 1;
    }
    else {
      num_1 = result;
      operator = consoleText[i];
      num_2 = consoleText[i + 1];
    }
    if (operator == '+') { result = add(num_1, num_2); }
    if (operator == '-') { result = substract(num_1, num_2); }
    if (operator == 'x') { result = multiply(num_1, num_2); }
    if (operator == '/') { result = divide(num_1, num_2); }
  }
  document.getElementById("result").innerHTML = result.toString();
}



// //get a reference to the element
// let myBtn = document.getElementById('button');
//
// //add event listener
// document.addEventListener('click', function(event) {
//   document.getElementById("console").innerHTML = event.value;
// });
