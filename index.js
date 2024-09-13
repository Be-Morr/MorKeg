const clickMe = document.getElementById("clickMe");
clickMe.addEventListener("click", helloLog);

function helloLog(e) {
  console.log("Hello World", e);
}

for (let hashVar = "#"; hashVar.length <= 7; hashVar += "#") {
  console.log(hashVar);
}

for (let numb = 1; numb <= 100; numb += 1) {
  if (numb % 3 === 0 || numb % 5 === 0) {
    console.log("FizzBuzz");
  } else if (numb % 3 === 0) {
    console.log("Fizz");
  } else if (numb % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(numb);
  }
}
