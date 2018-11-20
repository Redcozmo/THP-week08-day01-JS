// Fonction test du cours jQuery de OCR
// En jS
function addClass(){
  var listItems = document.querySelectorAll('li');
  var i;
  for (i = 0; i < listItems.length; i++) {
      listItems[i].className = 'starred';
  }
}
// En jQ
// $("li").addClass("starred");
