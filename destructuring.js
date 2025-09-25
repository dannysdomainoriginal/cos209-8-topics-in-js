// 1. Array destructuring
const fruits = ["Mango", "Banana", "Orange"]

// Pulling out values into variables
const [first, second, third] = fruits
console.log("Array destructuring:", first, second, third) // Mango Banana Orange

// Skipping items
const [fruit1, , fruit3] = fruits
console.log("Skipping:", fruit1, fruit3) // Mango Orange

// Using default values
const [a, b, c, d = "Apple"] = fruits
console.log("Default value:", a, b, c, d) // Mango Banana Orange Apple


// 2. Object destructuring
const student = {
  name: "Charles",
  level: "200 Level",
  gpa: 4.59
}

// Pulling out properties into variables
const { name, gpa } = student
console.log("Object destructuring:", name, gpa) // Daniel 3.8

// Renaming variables while destructuring
const { level: classLevel } = student
console.log("Renamed variable:", classLevel) // 300 Level

// Using default value
const { age = 20 } = student
console.log("Default value:", age) // 20


// 3. Nested destructuring
const person = {
  fullName: "John Doe",
  address: {
    city: "Lagos",
    country: "Nigeria"
  }
}

const { fullName, address: { city, country } } = person
console.log("Nested destructuring:", fullName, city, country)


// 4. Function parameter destructuring
function introduce({ name, gpa }) {
  console.log(`Hello, I'm ${name} and my GPA is ${gpa}`)
}

introduce(student)