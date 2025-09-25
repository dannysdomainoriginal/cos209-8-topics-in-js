// Variables are be declared with var, let and const

// 1. Using var (old way, function-scoped)
var name = "Charles"
console.log("var:", name)
var name = "Vee" // re-declaration is allowed
// REDECLARATION LED TO VAR USAGE DEPRECIATION
console.log("var re-declared:", name)

// 2. Using let (modern way, block-scoped)
// You can't redeclare using let
let age = 20
console.log("let:", age)
age = 21 // reassignment allowed
console.log("let reassigned:", age)

// 3. Using const (constant, block-scoped)
// You can't redeclare constants
const country = "Nigeria"
console.log("const:", country)

// Variables can hold any type of data
let isStudent = true            // boolean
let score = 4.5                 // number
let courses = ["Math", "CS"]    // array
let student = { name: "Charles", gpa: 4.59 } // object
let nothing = null              // null
let notDefined                  // undefined

console.log("Different variable types:", isStudent, score, courses, student, nothing, notDefined)

// In js, it is not compulsory to define variable types so we can always turn numbers to strings and back. No restrictions
score = ['Score', 'is', 'now', 'an', 'array', 'of', 'strings']