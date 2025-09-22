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

// (starting elem + 1, ending elem + 1, replacement val(optional)) delete part of array
myArray.splice()

// reverse the array
myArray.reverse()

// make new array that is slice of first array starting at index 2
let newArray = myArray.slice(2)

// combine elems to string (only works if all elems are string vals)
let newString = myArray.join()

// set newArray to be a combo of newArray and myArray
newArray = newArray.concat(myArray)