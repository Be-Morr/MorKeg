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
