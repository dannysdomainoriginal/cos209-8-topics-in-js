// Array Methods
const numbers = [ 1, 2, 3, 4, 5 ];

// 1. forEach() - loop through each item and perform a function over and over
numbers.forEach(num => {
  console.log("forEach:", num);
});

// 2. map() - transform each item and return a new array
const squares = numbers.map(num => num * num);
console.log("map:", squares); // [1, 4, 9, 16, 25]

// 3. filter() - return items that pass a condition
const even = numbers.filter(num => num % 2 === 0);
console.log("filter:", even); // [2, 4]

// 4. reduce()
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("reduce (sum):", sum); // 15

// 5. find()
const firstOver3 = numbers.find(num => num > 3);
console.log("find:", firstOver3); // 4

// 6. some()
const hasEven = numbers.some(num => num % 2 === 0);
console.log("some:", hasEven); // true

// 7. every()
const allPositive = numbers.every(num => num > 0);
console.log("every:", allPositive); // true

// 8. includes()
console.log("includes(3):", numbers.includes(3)); // true
console.log("includes(10):", numbers.includes(10)); // false

// 9. push() & pop()
numbers.push(6);
console.log("after push:", numbers); 
numbers.pop();
console.log("after pop:", numbers);

// 10. shift() & unshift()
numbers.shift();
console.log("after shift:", numbers); 
numbers.unshift(0);
console.log("after unshift:", numbers);

// 11. concat()
const moreNumbers = [6, 7, 8];
const combined = numbers.concat(moreNumbers);
console.log("concat:", combined);

// 12. slice()
const slicePart = numbers.slice(1, 3); // from index 1 to 2
console.log("slice:", slicePart);

// 13. splice()
console.log('Numbers:', numbers)
numbers.splice(2, 1); // remove 1 item at index 2, insert 99
console.log("splice:", numbers);