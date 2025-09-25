// Ternary Operators
// Syntax: condition ? valueIfTrue : valueIfFalse

// Basic usage
let age = 18
let canVote = age >= 18 ? "Yes, you can vote" : "No, you cannot vote"
console.log("Voting check:", canVote)

// Nested ternary ( confusing, but possible)
// I always prefer else ifs
let score = 55
let grade = score >= 70 ? "A"
            : score >= 60 ? "B"
            : score >= 50 ? "C"
            : "F"

console.log("Grade:", grade)

// else if alternative
let grade2
if ( score >= 70 ) grade2 = 'A'
else if ( score >= 60 ) grade2 = 'B'
else if ( score >= 50 ) grade2 = 'C'
else grade2 = 'F'

console.log('Else if alt: ', grade2)

// You can use ternary statements in return statements
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd"
}
console.log("Check 7:", checkEvenOdd(7))
console.log("Check 10:", checkEvenOdd(10))

// Used a lot for assigning values to variables based on a condition
let isStudent = true
let discount = isStudent ? 0.2 : 0 // 20% discount if user is a student
console.log("Discount:", discount)