
// How NodeJS differs from Vanilla JavaScript:
// 1. Node runs on a server, not in a browser.
// 2. The console is the terminal window, not the browser console.
console.log('Hello World')
// 3. Uses global objects, not window objects
// console.log(global);
// 4. Has common core modules, used for system tasks
// 5. CommonJS modules instead of ES6 modules
// 6. Missing some JS APIs, like fetch

// Uses require() to import modules, not import statements
const os = require('os')
const path = require('path')
// Importing a custom module
const math = require('./math')
// Importing a specific function from the custom module
const {add, subtract, multiply, divide} = require('./math')

console.log(math.add(4,5))
console.log(add(4,5))
console.log(subtract(10, 5))
console.log(multiply(4, 5))
console.log(divide(20, 5))
// // Using os module to get system information
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// // Using path module to work with file paths
// console.log(__dirname)
// console.log(__filename)
// console.log('-----------------------------------')
// // Gets similar information as __dirname but with the path module
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// // Now lets get all of the path information in an object
// console.log(path.parse(__filename))