// I always export with es6

// Exporting functions (named exports)
export function add(a, b) {
  return a + b
}

export function subtract(a, b) {
  return a - b
}

// Exporting a variable
export const PI = 3.14159

// Exporting a default ( only one default per file )
const multiply = (a, b) => {
  return a * b
}

export default multiply