console.log("My name is [Your Name]");
console.log(5 + 5);

let studentName = "Aditi";
let studentAge = 20;
const collegeName = "Dev Sanskriti Vishwavidyalaya";
console.log(studentName, studentAge, collegeName);

let city = "Haridwar";
let population = 300000;
let isCapital = false;
let mayor;
let previousMayor = null;
console.log(typeof city, typeof population, typeof isCapital, typeof mayor, typeof previousMayor);

const student = {
  name: "Rohit",
  rollNo: 21,
  course: "BCA"
};
console.log(student.name);

const subjects = ["JavaScript", "DBMS", "Networking"];
console.log(subjects[0], subjects[2]);

let cartTotal = 500;
cartTotal += 150;
cartTotal -= 50;
console.log(cartTotal);

let id = "42";
console.log(id == 42, id === 42);

let age = 20;
let hasID = true;
console.log(age >= 18 && hasID);
console.log(age >= 18 || hasID);
console.log(!hasID);

let marks = 75;
let result = marks >= 40 ? "Pass" : "Fail";
console.log(result);

let subject1 = 80;
let subject2 = 75;
let subject3 = 90;
let total = subject1 + subject2 + subject3;
let average = total / 3;
let grade = average >= 90 ? "A" : average >= 75 ? "B" : average >= 40 ? "C" : "F";
console.log(typeof average);
console.log("Total: " + total + ", Average: " + average.toFixed(2) + ", Grade: " + grade);

let attendance = 80;
let isEligibleForScholarship = average >= 85 && attendance >= 75;
console.log(isEligibleForScholarship);
