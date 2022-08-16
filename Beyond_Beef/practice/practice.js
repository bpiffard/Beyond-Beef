var numbers = [1,2,3,4,5];

// map function
let doubled = numbers.map(num => num*2);
console.log(doubled);

//filter function
var larger = numbers.filter(function(num){
    return num > 1;
});
console.log(larger);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

// filter function again
let sAnimals = words.filter(animal => animal.startsWith('s'));
console.log(sAnimals)

// slice function
let someWords = words.slice(0,3);
console.log(someWords); 

//sort function
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);