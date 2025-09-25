// Normal function
function addNumbers(a, b) {
  return a + b;
}
console.log("Normal function:", addNumbers(5, 3));

// Arrow function version
const add = (a, b) => {
  return a + b;
};
console.log("Arrow function:", add(5, 3));

// Arrow function were created to simplify function declaration like in this situation
const multiply = (a, b) => a * b;
console.log("Arrow (short form):", multiply(4, 2));

// Arrow functions work well with callbacks
const numbers = [1, 2, 3, 4, 5];

// Normal function in map
const doubled1 = numbers.map(function (num) {
  return num * 2;
});
console.log("Using normal function:", doubled1);

// Arrow function in map
const doubled2 = numbers.map(num => num * 2);
console.log("Using arrow function:", doubled2);

// Major Difference: 'this' keyword
const person = {
  name: "Charles",
  normalFunc: function () {
    console.log("Normal function this.name:", this.name);
  },
  arrowFunc: () => {
    // 'this' in arrow function does not point to the object
    console.log("Arrow function this.name:", this.name);
  }
};

person.normalFunc();  // Works
person.arrowFunc();   // Undefined, because arrow functions don't bind their own 'this' to the object