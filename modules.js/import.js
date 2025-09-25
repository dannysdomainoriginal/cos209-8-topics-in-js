// Importing named exports and default in one line
import multiply, { add, subtract, PI } from "./export.js"

console.log("Add:", add(5, 3))          // 8
console.log("Subtract:", subtract(10, 4)) // 6
console.log("Multiply:", multiply(6, 7))  // 42
console.log("PI:", PI)                     // 3.14159
