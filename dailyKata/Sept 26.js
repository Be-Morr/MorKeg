

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
    for (i = 0; i < dna.length; i++){
      const char =dna.charAt(i);
      if (char !== "T"){
        dnaTorna += char
      } if (char === "T"){
        dnaTorna += "U"
      } 
    } return dnaTorna;
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

function removeChar(str){
    return str.slice (1, -1) 
      //You got this!
    };
    
    
    
// Format as =>  const removeChar = str => str.slice(1,-1)    