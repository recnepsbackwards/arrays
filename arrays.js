//Highest Number
var a = [0.3, 3.2, 0.4, 13.9, 0.5]
function highestNumber(arr) {
  var max = arr[arr.length-1];
  arr.forEach(function(element){
    if (element > max) {
      max = element;
    }
  });
  return max;
}

highestNumber(a);


//Lowest Number
var a = [0.3, 3.2, 0.4, 13.9, 0.5]
function lowestNumber(arr) {
  var max = arr[arr.length-1];
  arr.forEach(function(element){
    if (element < max) {
      max = element;
    }
  });
  return max;
}

lowestNumber(a);

//Smallest Number
var a = [0.1,-0.001];
function convertNumber(arr) {
  var newThing = [];
  arr.forEach(function(element){
  if (element < 0){
      newThing.push(element*(-1));
    }
  else
    newThing.push(element);
  })
  return newThing;
}

function smallestNumber(arr) {
  var smallest = arr[arr.length-1];
  arr = convertNumber(arr);
  arr.forEach(function(element, index) {
    if (element < smallest) {
      smallest = element;
    }
  })
  return arr[arr.indexOf(smallest)];
}

smallestNumber(a);

//Calculate Sum

var a = [4, 5, 6];
function sum(arr) {
  var add = 0;
  arr.forEach(function(element){
    add = add + element;
  });
  return add;
}

sum(a);

//Calculate Mean
var a = [4, 5, 6];
function mean(arr) {
  var add = 0;
  var ind = 0;
  arr.forEach(function(element, index){
    add = add + element;
    ind = index + 1;
  });
  return add/ind;
}

mean(a);

//Index of Highest Number

var a = [1,4,2]
function highestIndex(arr) {
  var max = arr[arr.length-1];
  var ind = 0;
  arr.forEach(function(element, index){
    if (element > max) {
      max = element;
      ind = index;
    }
  });
  return ind;
}

highestIndex(a);

//Array Siblings Names Parents Names

a.sort();

a.sort(function(element1, element2) {
  return element2-element1;
});

n.sort(function(element1, element2) {
  return (element1>element2)*1 + (element1<element2)*-1;
});

siblings = ["John", "Stacy", "Mark", "Sam"];
parents = ["Ryan", "Mary"];

siblings.sort().reverse();

combined = siblings.concat(parents);

combined.sort().reverse();

function lookFor(x) {
  return x = "Mary";
}

combined.some(lookFor);

//Return even elements
a = [5, 7, 3];
function isEven(arr) {
  if (arr % 2 === 0)
  {
    return arr;
  }
}

a.filter(isEven);

//Return Odd Elements
a = [2,2,6,4];
function isOdd(arr) {
  if (arr % 2 === 1)
  {
    return arr;
  }
}

a.filter(isOdd);

//Advanced function filter Array
a = [2,2,6,4]
function filterArray(arr) {
  var newArr = [];
  arr.forEach(function(element){
  if (element >= 4){
    newArr.push(element);
    }
  })
return newArr;
}

filterArray(a);

//Advanced function inception

//Eight Ball Challenge
answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: What would your mother do?", "Ask: What would an Austrailian do?", "Do the opposite.", "Your answer here."];

do {
  var question = prompt("Ask the eight ball your question:");
  alert(answers[Math.floor(Math.random()*(answers.length))]);
  } while(question != "STOP");

//Extra Challenges
var i=0;
while (i<10) {
  console.log(i);
  i++;
}

//For Loop

for (a=10; a > 0; a = a -1){
console.log(a);
}

//Duplicate Array
a = [1, 2, 3]
b = [2, 30, 1]
function findDuplicate(arr) {
  if (element )
}
function mergeArray(arr, arr2){
  combined = a.concat(b);
  combined.filter()
}
