const clickMe = document.getElementById("clickMe");
clickMe.addEventListener("click", helloLog);

function helloLog(e) {
  console.log("Hello World", e);
  console.log("Hello World", e);
}

// for (let hashVar = "#"; hashVar.length <= 7; hashVar += "#") {
//   console.log(hashVar);
// }

// for (let numb = 1; numb <= 100; numb += 1) {
//   if (numb % 3 === 0 || numb % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (numb % 3 === 0) {
//     console.log("Fizz");
//   } else if (numb % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(numb);
//   }
// }
// You can get the Nth character, or letter, from a string by writing [N] after the string (for example, string[2]). The resulting value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.

// Your code here.

// → 2
// console.log(countChar("kakkerlak", "k"));
// → 4

// const countBs = (word) => {
// let numberOfB = 0;
// for (let i = 0; i < word.length; i++) {
//   const char = word.charAt(i);
//   if (char === "B") {
//     numberOfB++;
//   }
// }
// return numberOfB;
// };
// console.log(countBs("BBbbOB"));
