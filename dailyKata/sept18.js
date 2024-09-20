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
