// Numbers
const myNumber = 42;
const myFloat = 42.0234;
const myString = "42.123abc";

// Number Methods
console.log(myNumber === myFloat);
console.log(myNumber === myString);
console.log(Number(myString) === myNumber);
console.log(Number.parseFloat(myString));       // returns 42.123
console.log(Number.parseInt(myFloat));
console.log(Number.isNaN("Dave"));
console.log(isNaN("Dave"));