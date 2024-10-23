// function disemvowel(str) {
//   debugger;
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   const strArray = str.split("");
//   const targetLetter = "";
//   const newString = "";
//   for (i = 0; i < strArray.length; i++) {
//     const targetLetter = strArray[i];
//     if (vowels.includes(targetLetter) === false) {
//       // if (strArray[i] !== vowels.includes(targetLetter)) {
//       newString += targetLetter;
//     } else {
//       consol.log(targetLetter);
//     }
//   }
//   return newString.trim();
// }

// const testVowel = (str) => {
//   debugger;
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   console.log(vowels.includes(str));
// };
// None of the above worked, saved for tinkering later

function disemvowel(str) {
  return str.replace(/[aeiouAIEOU]/g, "");
}
// can also be written as: return str.replace(/[aieou]/gi, "");
// This makes it a global, case insensitve search.
