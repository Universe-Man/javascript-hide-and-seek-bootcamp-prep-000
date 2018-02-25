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
  for (let i = 0; i < hopeArray.length; i++) {
    var temp = hopeArray[i].innerHTML;
    var tempNum = parseInt(temp);
    var finalTempNum = (tempNum + m);

  }
}

function deepestChild() {
  const boo = document.querySelector('div#grand-node div div div div');
  return boo;
}
