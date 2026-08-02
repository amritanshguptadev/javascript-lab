// ============================================================
//  CS302JSC – JavaScript  |  Lab Assignment 01
//  Student  : Amritansh Gupta
//  Scholar  : 2424219
//  Course   : BCA  |  Semester : V
//  College  : DSVV
// ============================================================


// ────────────────────────────────────────────────────────────
//  TASK 3 – JavaScript Output Methods
// ────────────────────────────────────────────────────────────

// Method 1: console.log()
console.log("===== Task 3: JavaScript Output Methods =====");
console.log("Hello from console.log() – Welcome to JavaScript Lab!");

// Method 2: alert()
// Uncomment the line below to see the alert popup
// alert("Welcome to JavaScript Lab!\nStudent: Amritansh Gupta\nScholar No: 2424219");

// Method 3: document.write()
// Note: document.write() used here writes into a hidden div to avoid
//       overwriting the styled HTML page.
const outputDiv = document.createElement("div");
outputDiv.style.cssText =
  "display:none; font-family:monospace; background:#1a1a2e; color:#06b6d4; padding:1rem; border-radius:8px; margin:1rem;";
outputDiv.innerHTML =
  "<strong>document.write() output:</strong><br>" +
  "Welcome to JavaScript Lab! | Amritansh Gupta | 2424219 | BCA | Semester V";
document.body.appendChild(outputDiv);

console.log("document.write() equivalent → see hidden div appended to body");


// ────────────────────────────────────────────────────────────
//  TASK 5 – Variables
// ────────────────────────────────────────────────────────────

console.log("\n===== Task 5: Variables =====");

var name        = "Amritansh Gupta";
var scholarNo   = 2424219;
var semester    = "V";
var course      = "BCA";
var collegeName = "Dev Sanskriti Vishwavidyalaya (DSVV)";

console.log("Name         :", name);
console.log("Scholar No.  :", scholarNo);
console.log("Semester     :", semester);
console.log("Course       :", course);
console.log("College Name :", collegeName);


// ────────────────────────────────────────────────────────────
//  TASK 6 – Data Types
// ────────────────────────────────────────────────────────────

console.log("\n===== Task 6: Data Types =====");

var strValue       = "Amritansh Gupta";   // String
var numValue       = 2424219;              // Number
var boolValue      = true;                 // Boolean
var undefinedValue;                        // Undefined (no value assigned)
var nullValue      = null;                 // Null

console.log("strValue       =", strValue,       "| typeof:", typeof strValue);
console.log("numValue       =", numValue,       "| typeof:", typeof numValue);
console.log("boolValue      =", boolValue,      "| typeof:", typeof boolValue);
console.log("undefinedValue =", undefinedValue, "| typeof:", typeof undefinedValue);
console.log("nullValue      =", nullValue,      "| typeof:", typeof nullValue);

// Note: typeof null returns "object" — this is a known JavaScript quirk
console.log("(Note: typeof null === 'object' is a known JS quirk)");


// ────────────────────────────────────────────────────────────
//  TASK 7 – Student Introduction
// ────────────────────────────────────────────────────────────

console.log("\n===== Task 7: Student Introduction =====");

var studentName  = "Amritansh Gupta";
var studentId    = 2424219;
var studentCourse= "BCA";
var studentSem   = "V";
var studentCollg = "DSVV";
var studentGoal  = "Become a Software Engineer";

console.log("Name        :", studentName);
console.log("Scholar No. :", studentId);
console.log("Course      :", studentCourse);
console.log("Semester    :", studentSem);
console.log("College     :", studentCollg);
console.log("Goal        :", studentGoal);

console.log("\n✅ All tasks executed successfully!");
