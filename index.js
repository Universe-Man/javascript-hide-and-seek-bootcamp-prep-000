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
  const hope = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < hope.length; i++) {
    var temp = hope[i].innerHTML;
    var tempNum = parseInt(temp);
    var finalTempNum = (tempNum + m);
    hope[i].innerHTML = finalTempNum;
  }
}

function deepestChild() {
  const boo = document.querySelector('div#grand-node div div div div');
  return boo;
}
