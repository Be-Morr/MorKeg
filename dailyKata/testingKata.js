// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  debugger;
  let pinString = `${pin}`;
  return (
    Number.isInteger(pin) && (pinString.length === 4 || pinString.length === 6)
  );
}
// Can use
// Math.floor(pin) === pin && (pinString.length === 4 || pinString.length === 6)
// =======
// function validatePIN(pin) {
//   debugger;
//   let pinString = `${pin}`;
//   return (
//     Number.isInteger(pin) && (pinString.length === 4 || pinString.length === 6)
//   );
// }
// >>>>>>> main

// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// const range = (start, end, step = 1) => {
//   const arrayRange = [];
//   if (start <= end) {
//     for (i = start; i <= end; i += step) {
//       arrayRange.push(i);
//     }
//   } else {
//     for (i = start; i >= end; i += step) {
//       arrayRange.push(i);
//     }
//   }
//   return arrayRange;
// };

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
