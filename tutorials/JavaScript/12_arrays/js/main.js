// Arrays
const myArray = [];

// add elements to an array
myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false;

// refer to an array
console.log(myArray);

// length property
console.log(myArray.length);

// last element in an array
console.log(myArray[myArray.length - 1]);

// add element to end
myArray.push("school");

// remove element from end
const lastItem = myArray.pop();

// add element to beginning
myArray.unshift("school");

// remove element from beginning
myArray.shift();

myArray.splice()