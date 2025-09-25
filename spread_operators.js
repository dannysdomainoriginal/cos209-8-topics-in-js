// I came up with 7 uses for spread operators

// 1. Copying arrays
const numbers = [1, 2, 3];
const copyNumbers = [...numbers];
console.log("Copied array:", copyNumbers);

// 2. Merging arrays
const moreNumbers = [4, 5, 6];
const merged = [...numbers, ...moreNumbers];
console.log("Merged arrays:", merged); // [1,2,3,4,5,6]

// 3. Adding new elements while copying
const extended = [...numbers, 99, 100];
console.log("Extended array:", extended); // [1,2,3,99,100]

// 4. Copying objects
const student = { name: "Daniel", gpa: 3.8 };
const studentCopy = { ...student };
console.log("Copied object:", studentCopy);

// 5. Merging objects
const extraInfo = { level: "300 Level", school: "Babcock" };
const mergedObject = { ...student, ...extraInfo };
console.log("Merged object:", mergedObject);

// 6. Updating object properties with spread
const updatedStudent = { ...student, gpa: 4.0 }; // overwrite gpa
console.log("Updated object:", updatedStudent);

// 7. Using spread in function calls
function sum(a, b, c) {
  return a + b + c;
}
const nums = [10, 20, 30];
console.log("Spread in function call:", sum(...nums)); // 60