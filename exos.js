// THP - Week 08 - Day 01
// JavaScript

// Fonction qui extrait le max parmi un tableau de nombre
function getMax(arrayNumber) {
  let max = 0;
  for (let i = 0; i < arrayNumber.length - 1; i++){
    if (arrayNumber[i] > max) {
      max = arrayNumber[i];
    }
  }
  return max;
}

// Fonction qui affiche un résultat en fenêtre popup
function showResultPopup(result = 0, mess = "Le resultat est : "){
  alert(mess + result);
}

// Fonction qui affiche le résultat dans la page HTML
function showResultInHTML(id_1, id_2, value_1, value_2){
  document.getElementById(id_1).innerHTML = value_1;
  document.getElementById(id_2).innerHTML = value_2;
  //window.onload =
}

// Fonction qui compte le nombre de voyelles dans une chaine
function getVowelCount(str){
  return str.match(/[aeiou]/gi).length
}

// Fonction qui renverse l'ordre d'un string
function reverseString(str) {
  let newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
  }

// Exécution
let values = [1, 4, 2, 8, 3];
let maxValue = 0;
maxValue = getMax(values);
//showResultPopup(maxValue, `Le maximum entre ${values} est : `);
showResultInHTML("values", "max_value", values, maxValue);

let stringExample = "Hello, world !";
let vowelCount = getVowelCount(stringExample);
//showResultPopup(vowelCount, `Le nombre de voyelle de ${stringExample} est : `);
showResultInHTML("stringExample1", "stringExample_nb", stringExample, vowelCount);

let reverse = reverseString(stringExample);
//showResultPopup(reverse, `${stringExample} inversé devient `);
showResultInHTML("stringExample2", "string_reversed", stringExample, reverse);
