// Functions

// Function Declaration Syntax:

// traditional function
// function getUserNameFromEmail(email) {
//     return email.slice(0, email.indexOf("@"));
// }

// function expression
// const getUserNameFromEmail = function (email) {
//     return email.slice(0, email.indexOf("@"));
// }

// arrow function
const getUserNameFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("user@GitHub.com"));

