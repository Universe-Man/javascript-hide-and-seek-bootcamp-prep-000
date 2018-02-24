function getFirstSelector(selector) {
  var firstThing = document.querySelector(selector);
  return firstThing
}

function nestedTarget() {
  var superNest = document.querySelector('div.target');
  return superNest
}

function increaseRankBy(n) {
  var m = parseInt(n);
  const hope = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  const hopeArray = Array.from(hope);
  const hopeArrayNumbers = parseInt(hopeArray);
  for (let i = 0; i < hopeArray.length; i++) {
    hopeArray[i].innerHTML = (i + m).toString();
  }
  return hopeArray;
}

function deepestChild() {
  const boo = document.querySelector('div#grand-node div div div div');
  return boo;
}
