// Conditionals
let playerOne = "rock";
let computer = "paper";

switch (playerOne) {
  case computer:
    console.log("Tie game!");
    break;
  case "rock":
    if (computer === "paper") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
    break;
  case "paper":
    if (computer === "scissors") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
    break;
  default:
    if (computer === "rock") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
}

// Ternary Operators
let soup = "Chicken Noodle Soup";
let isCustomerBanned = false;

let soupAccess = isCustomerBanned
  ? "Sorry, no soup for you!"
  : soup
    ? `Yes, we have ${soup} today.`
    : "Sorry, no soup today.";

console.log(soupAccess);



