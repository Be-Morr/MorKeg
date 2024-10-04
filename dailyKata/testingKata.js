// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  const pinLength = `${Number(pin)}`;
  return (
    Math.floor(Number(pin)) === Math.abs(Number(pin)) &&
    (pinLength.length === 4 || pinLength.length === 6)
  );
}
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

const digitize = (n) => {
  debugger;
  const nString = `${n}`;
  let numberArray = [];
  for (i = 0; i < nString.length; i++) {
    numberArray.push(nString.charAt(i));
  }
  return numberArray.reverse();
};
// Producing an array of strings, not digits. instead of convertring them back to numbers, is there a way to cut the string portion out
