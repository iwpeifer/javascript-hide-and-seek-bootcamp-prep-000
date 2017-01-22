var getFirstSelector = function(selector) {
  return document.querySelector(selector);
}

var nestedTarget = function(target) {
return document.querySelector("#nested .target");
}

var increaseRankBy = function(n) {
  const lis = document.querySelectorAll('ul.ranked-list');
  for (let i = 0, l = lis.length; i < l; i++){
    lis[i].innerHTML = (i + n).toString();
  }
}

var deepestChild = function(){
let current = document.getElementById("grand-node");
let next = current.children[0];

while (next)
 {
   current = next;
   next = current.children[0];
 }

 return current;
}
