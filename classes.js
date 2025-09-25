// This is a simple class definition in JavaScript
class Student {
  // The constructor is used to initialize new objects
  constructor(name, level, gpa) {
    this.name = name
    this.level = level
    this.gpa = gpa
  }

  // A method (function inside a class)
  introduce() {
    console.log(`Hi, my name is ${this.name}, I am in ${this.level}, and my GPA is ${this.gpa}.`)
  }

  // A method to update GPA
  updateGPA(newGpa) {
    this.gpa = newGpa
    console.log(`${this.name}'s GPA has been updated to ${this.gpa}`)
  }

  // A static method belongs to the class, not individual objects
  static schoolMotto() {
    console.log("Knowledge for Service!")
  }
}

const hidden = 'Not for you, bro'

// Creating objects (instances) of the class
const charles = new Student("Charles Daniel", "200 Level", 4.59)
const doulous = new Student("Chukwudi Doulous", "200 Level", hidden)

// Using the methods
charles.introduce() 
doulous.introduce()

charles.updateGPA(4.35)

// Calling the static method directly from the class
Student.schoolMotto()