// First Coding Challenge

// Write code that will return a random letter from your name
const myName = "Ethan"

console.log(myName.charAt((Math.floor(Math.random() * 10 + 1)) % myName.length))

