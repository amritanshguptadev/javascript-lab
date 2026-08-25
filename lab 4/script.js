let marks = 68;
let result = marks >= 40 ? "pass" : "fail";
console.log(result);

let marks2 = 68;
if (marks2 >= 40) {
  console.log("pass");
} else {
  console.log("fail");
}

console.log("if-else is easier to read");

let m1 = 45;
if (m1 >= 40) {
  console.log("you passed!");
}

let m2 = 30;
if (m2 >= 40) {
  console.log("you passed!");
}

let childAge = 8;
if (childAge >= 18) {
  console.log("you can watch this movie");
}

let teenAge = 15;
if (teenAge >= 18) {
  console.log("you can watch this movie");
}

let adultAge = 22;
if (adultAge >= 18) {
  console.log("you can watch this movie");
}

let n1 = 7;
if (n1 % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

let n2 = 12;
if (n2 % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

let n3 = 19;
if (n3 % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

let correctPin = 1234;

let guessPin1 = 1234;
if (guessPin1 === correctPin) {
  console.log("access granted");
} else {
  console.log("access denied");
}

let guessPin2 = 5678;
if (guessPin2 === correctPin) {
  console.log("access granted");
} else {
  console.log("access denied");
}

let labMarks = 75;
if (labMarks >= 40) {
  console.log("pass");
} else {
  console.log("fail");
}

console.log("i like if-else better because it is clear");

let studentScore = 68;
if (studentScore >= 90) {
  console.log("grade a");
} else if (studentScore >= 75) {
  console.log("grade b");
} else if (studentScore >= 60) {
  console.log("grade c");
} else if (studentScore >= 40) {
  console.log("grade d");
} else {
  console.log("grade f");
}

let movieAge1 = 3;
if (movieAge1 < 5) {
  console.log("free");
} else if (movieAge1 < 12) {
  console.log("rs. 100");
} else if (movieAge1 < 60) {
  console.log("rs. 250");
} else {
  console.log("rs. 150");
}

let movieAge2 = 8;
if (movieAge2 < 5) {
  console.log("free");
} else if (movieAge2 < 12) {
  console.log("rs. 100");
} else if (movieAge2 < 60) {
  console.log("rs. 250");
} else {
  console.log("rs. 150");
}

let movieAge3 = 25;
if (movieAge3 < 5) {
  console.log("free");
} else if (movieAge3 < 12) {
  console.log("rs. 100");
} else if (movieAge3 < 60) {
  console.log("rs. 250");
} else {
  console.log("rs. 150");
}

let movieAge4 = 65;
if (movieAge4 < 5) {
  console.log("free");
} else if (movieAge4 < 12) {
  console.log("rs. 100");
} else if (movieAge4 < 60) {
  console.log("rs. 250");
} else {
  console.log("rs. 150");
}

let movieAge5 = 70;
if (movieAge5 < 5) {
  console.log("free");
} else if (movieAge5 < 12) {
  console.log("rs. 100");
} else if (movieAge5 < 60) {
  console.log("rs. 250");
} else {
  console.log("rs. 150");
}

let temp1 = 40;
if (temp1 > 35) {
  console.log("it's hot! drink water.");
} else if (temp1 > 20) {
  console.log("nice weather!");
} else if (temp1 > 10) {
  console.log("a bit cold. wear a jacket.");
} else {
  console.log("very cold! stay warm.");
}

let temp2 = 28;
if (temp2 > 35) {
  console.log("it's hot! drink water.");
} else if (temp2 > 20) {
  console.log("nice weather!");
} else if (temp2 > 10) {
  console.log("a bit cold. wear a jacket.");
} else {
  console.log("very cold! stay warm.");
}

let temp3 = 15;
if (temp3 > 35) {
  console.log("it's hot! drink water.");
} else if (temp3 > 20) {
  console.log("nice weather!");
} else if (temp3 > 10) {
  console.log("a bit cold. wear a jacket.");
} else {
  console.log("very cold! stay warm.");
}

let temp4 = 5;
if (temp4 > 35) {
  console.log("it's hot! drink water.");
} else if (temp4 > 20) {
  console.log("nice weather!");
} else if (temp4 > 10) {
  console.log("a bit cold. wear a jacket.");
} else {
  console.log("very cold! stay warm.");
}

let dayNumber = 3;
switch (dayNumber) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("invalid day");
}

let mood = "happy";
switch (mood) {
  case "happy":
    console.log("keep smiling");
    break;
  case "sad":
    console.log("cheer up");
    break;
  case "angry":
    console.log("take a deep breath");
    break;
  case "tired":
    console.log("get some rest");
    break;
  default:
    console.log("feeling okay");
}

let expDay = 2;
switch (expDay) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
  case 3:
    console.log("wednesday");
    break;
  default:
    console.log("invalid day");
}

console.log("break stops the switch statement from running into the next case.");
console.log("without break execution falls through and runs subsequent cases.");

let atmPin = 1234;

let enteredPin1 = 9999;
let balance1 = 5000;
let choice1 = 1;

if (enteredPin1 === atmPin) {
  switch (choice1) {
    case 1:
      console.log(balance1);
      break;
    case 2:
      let withdrawAmount1 = 1000;
      if (withdrawAmount1 > balance1) {
        console.log("insufficient funds");
      } else {
        balance1 -= withdrawAmount1;
        console.log(balance1);
      }
      break;
    case 3:
      let depositAmount1 = 2000;
      balance1 += depositAmount1;
      console.log(balance1);
      break;
    default:
      console.log("invalid choice");
  }
} else {
  console.log("wrong pin. access denied.");
}

let enteredPin2 = 1234;
let balance2 = 5000;
let choice2 = 2;
let withdrawAmount2 = 7000;

if (enteredPin2 === atmPin) {
  switch (choice2) {
    case 1:
      console.log(balance2);
      break;
    case 2:
      if (withdrawAmount2 > balance2) {
        console.log("insufficient funds");
      } else {
        balance2 -= withdrawAmount2;
        console.log(balance2);
      }
      break;
    case 3:
      let depositAmount2 = 2000;
      balance2 += depositAmount2;
      console.log(balance2);
      break;
    default:
      console.log("invalid choice");
  }
} else {
  console.log("wrong pin. access denied.");
}

let enteredPin3 = 1234;
let balance3 = 5000;
let choice3 = 3;
let depositAmount3 = 2000;

if (enteredPin3 === atmPin) {
  switch (choice3) {
    case 1:
      console.log(balance3);
      break;
    case 2:
      let withdrawAmount3 = 1000;
      if (withdrawAmount3 > balance3) {
        console.log("insufficient funds");
      } else {
        balance3 -= withdrawAmount3;
        console.log(balance3);
      }
      break;
    case 3:
      balance3 += depositAmount3;
      console.log(balance3);
      break;
    default:
      console.log("invalid choice");
  }
} else {
  console.log("wrong pin. access denied.");
}

let fixAge = 15;
if (fixAge === 18) {
  console.log("adult");
} else {
  console.log("minor");
}

let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("red fruit");
    break;
  case "banana":
    console.log("yellow fruit");
    break;
  default:
    console.log("unknown fruit");
}

let choiceVal = 2;
switch (choiceVal) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  default:
    console.log("invalid");
}
