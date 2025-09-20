// var, let, and const

// global scope
var x = 1;   // function scoped
let y = 2;   // block scoped
const z = 3; // block scoped

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
    let y = 5;
    const z = 6;

    {
        var x = 11      // function scoped
        const z = 10    // block scoped
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }

    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}

myFunc();