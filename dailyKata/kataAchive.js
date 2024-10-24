// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"

// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
// Fundamentals
// Strings

// Initial Solution

function DNAtoRNA(dna) {
  let dnaTorna = "";
  for (i = 0; i < dna.length; i++) {
    const char = dna.charAt(i);
    if (char !== "T") {
      dnaTorna += char;
    }
    if (char === "T") {
      dnaTorna += "U";
    }
  }
  return dnaTorna;
  // create a function which returns an RNA sequence from the given DNA sequence
}

//   A much cleaner solution is to use .replace or .replaceAll
//
// function DNAtoRNA(dna){
//     return dna.replace(/T/g, 'U');
//   }
//
// function DNAtoRNA(dna) {
//     return dna.replaceAll('T','U');
//   }

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str) {
  return str.slice(1, -1);
}

// Format as =>
// const removeChar = str => str.slice(1,-1)

// If you can't sleep, just count sheep!!
// Task:

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  let snoring = "";

  for (i = 1; i <= num; i++) {
    const sheep = i + " sheep...";
    snoring += sheep;
  }
  return snoring;
};

// Much cleaner solution using "${}"
// const countSheep = num => {
//   let snoring = "";
//   for (let i=1; i <= num; i++){
//     str+= '${i} sheep...';}
//   return snoring;
// }

// Introduction

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task

// Given a year, return the century it is in.
// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

const century = (year) => {
  const centuryDecimal = year / 100;
  const centuryName = Math.ceil(centuryDecimal);
  return centuryName;
};

// Math can be used inside of Math.cei() i.e.

// const century = year => Math.ceil(year/100)

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

const basicOp = (operation, value1, value2) => {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  }
};

// Can also be done as a switch :
// function basicOp(operation, value1, value2) {
//   switch (operation) {
//       case '+': return value1 + value2;
//       case '-': return value1 - value2;
//       case '*': return value1 * value2;
//       case '/': return value1 / value2;
//       default: return 'Operation must be one of + - * /';
//   }
// }

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// const basicOp = (operation, value1, value2) => {
//   if (operation === "+") {
//     return value1 + value2;
//   } else if (operation === "-") {
//     return value1 - value2;
//   } else if (operation === "*") {
//     return value1 * value2;
//   } else if (operation === "/") {
//     return value1 / value2;
//   }
// };
// //  const basicOp = (operation, value1, value2) => {
// //     return eval(value1 + operation + value2);
// //  }
// // failed because initially used , instead of + inside of eval()

// // Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// // Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function lovefunc(flower1, flower2) {
//   return flower1 % 2 !== flower2 % 2;
//   // moment of truth
// }

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
  const stringAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let numericalLetter = "";
  let lowercaseText = text.toLowerCase();
  for (
    let targetLetter = 0;
    targetLetter < lowercaseText.length;
    targetLetter++
  ) {
    const targetChar = lowercaseText.charAt(targetLetter);
    for (
      let referenceLetter = 0;
      referenceLetter < stringAlphabet.length;
      referenceLetter++
    ) {
      const referenceChar = stringAlphabet.charAt(referenceLetter);
      if (referenceChar === targetChar) {
        numericalLetter += referenceLetter + 1;
        numericalLetter += " ";
      }
    }
  }
  return numericalLetter.trim();
}
console.log(alphabetPosition("ebc."));

// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

const range = (start, end, step = 1) => {
  const arrayRange = [];
  if (start <= end) {
    for (i = start; i <= end; i += step) {
      arrayRange.push(i);
    }
  } else {
    for (i = start; i >= end; i += step) {
      arrayRange.push(i);
    }
  }
  return arrayRange;
};

// const findShort = (s) => {
//   debugger;
//   let shortestWord = s.length;
//   let currentWord = 0;
//   for (i = 0; i <= s.length; i++) {
//     if (s.charAt(i) !== "") {
//       currentWord++;
//     }
//     if (s.charAt(i) === " ") {
//       if (currentWord <= shortestWord) {
//         shortestWord = currentWord;
//         currentWord = 0;
//       }
//     }
//   }
//   return shortestWord - 1;
// };

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// function validatePIN(pin) {
//   const pinLength = `${Number(pin)}`;
//   return (
//     Math.floor(Number(pin)) === Math.abs(Number(pin)) &&
//     (pinLength.length === 4 || pinLength.length === 6)
//   );
// }
// There must be an easier way to test if a number is whole and positive

// function validatePIN(pin) {
//   let pinString = `${pin}`;
//   if (Number.isInteger(pin)) {
//     return pinString.length === 4 || pinString.length === 6;
//   } else {
//     return false;
//   }
// }
// Can use
// Math.floor(pin) === pin && (pinString.length === 4 || pinString.length === 6)

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]

// const digitize = (n) => {
//   debugger;
//   const nString = `${n}`;
//   let numberArray = [];
//   for (i = 0; i < nString.length; i++) {
//     numberArray.push(nString.charAt(i));
//   }
//   return numberArray.reverse();
// };
// // Producing an array of strings, not digits. instead of converting them back to numbers, is there a way to cut the string portion out

// const digitize = (n) => {
//   const nString = `${n}`;
//   const nStringArray = nString.split("");
//   const nNumberArray = nStringArray.map(Number);
//   return nNumberArray.reverse();
// };

// Convert number to a string
//Convert the String into an array of strings for each digit in the number
//Convert the Array of strings back to numbers
//Return the Array of numbers back in reverse order.
// This can be simplified into
// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }

// const restaurants = [
//   {
//     resName: "XYZ Diner",
//     resCity: "Springfield",
//     resAddress: "123 Main Street, Springfield",
//     resNotes: "Liked it",
//     resHours: [
//       {
//         day: "Monday",
//         isOpen: false,
//         resOpen: null,
//         resClose: null,
//       },
//       {
//         day: "Tuesday",
//         isOpen: true,
//         resOpen: 1100,
//         resClose: 2000,
//       },
//       {
//         day: "Wednesday",
//         isOpen: true,
//         resOpen: 1100,
//         resClose: 2000,
//       },
//       {
//         day: "Thursday",
//         isOpen: true,
//         resOpen: 1100,
//         resClose: 2200,
//       },
//     ],
//     resReviewNumber: 2567,
//     resReviewRating: 4.3,
//   },
//   {
//     resName: "ABC Diner",
//     resCity: "New Dell",
//     resAddress: "45 Main Street, New Dell",
//     resNotes: "It was Okay",
//     resHours: [
//       {
//         day: "Monday",
//         isOpen: true,
//         resOpen: 1700,
//         resClose: 2000,
//       },
//       {
//         day: "Tuesday",
//         isOpen: true,
//         resOpen: 1100,
//         resClose: 2000,
//       },
//       {
//         day: "Wednesday",
//         isOpen: true,
//         resOpen: 1100,
//         resClose: 2000,
//       },
//       {
//         day: "Thursday",
//         isOpen: true,
//         resOpen: 1100,
//         resClose: 2200,
//       },
//     ],
//     resReviewNumber: 11740,
//     resReviewRating: 3.7,
//   },
// ];

// const restaurantInfo = (name) => {
//   debugger;
//   // currentRes = restaurants[0];
//   let currentRes = restaurants[{}];
//   for (let i = 0; i < restaurants.length; i++) {
//     if (restaurants[i].resName === name) {
//       currentRes = restaurants[i];
//     }
//   }
//   const currentResName = currentRes.resName;
//   const currentResAddress = currentRes.resAddress;
//   const currentResRating = currentRes.resReviewRating;
//   if (currentResName === name) {
//     console.log(
//       `${currentResName} has a ${currentResRating} star rating and is located at ${currentResAddress}.`
//     );
//   } else {
//     console.log("Im Sorry try again");
//   }
//   // This does nothing because currentRes is undefined
// };

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
  const stringAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let numericalLetter = "";
  let lowercaseText = text.toLowerCase();
  for (
    let targetLetter = 0;
    targetLetter < lowercaseText.length;
    targetLetter++
  ) {
    const targetChar = lowercaseText.charAt(targetLetter);
    for (
      let referenceLetter = 0;
      referenceLetter < stringAlphabet.length;
      referenceLetter++
    ) {
      const referenceChar = stringAlphabet.charAt(referenceLetter);
      if (referenceChar === targetChar) {
        numericalLetter += referenceLetter + 1;
        numericalLetter += " ";
      }
    }
  }
  return numericalLetter.trim();
}

console.log(alphabetPosition("ebc."));
const findShort = (s) => {
  const words = s.split(" ");
  //Splits a string into an array
  let shortestWord = words[0].length;
  //Sets the shortest word to the first word in the array
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortestWord) {
      shortestWord = words[i].length;
    }
    //Checks over each word to see if it is shorter that the first word,
    // if it is, sets that word as shortest.
  }
  return shortestWord;
};

// function disemvowel(str) {
// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   const newString = "";
//   for (i = 0; i < str.length; i++) {
//     if (vowels.includes(str.charAt(i)) !== true) {
//       newString + str.charAt(i);
//       newString.trim();
//     }
//   }
//   return newString;

function disemvowel(str) {
  debugger;
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  strArray = str.split("");
  const targetLetter = "";
  const newString = "";
  for (i = 0; i < strArray.length; i++) {
    const targetLetter = strArray[i];
    if (strArray[i] !== vowels.includes(targetLetter)) {
      newString + strArray[i];
    }
  }
  return newString;
}

// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  return number * -1;
}
//  You can do the same thing with (-number)
// function opposite(number) {
//   return(-number);
// }


// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  let newString = "";
  for (i = 0; i < x.length; i++) {
    const targetNumber = Number(x.charAt(i));
    if (targetNumber < 5) {
      newString += "0";
    } else {
      newString += "1";
    }
  }
  return newString;
}

// The split and map solution I was thinking about is this:
// function fakeBin(x) {
//   return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }
