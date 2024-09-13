const clickMe = document.getElementById("clickMe");
clickMe.addEventListener("click", helloLog);

function helloLog(e) {
  console.log("Hello World", e);
}

for (let hashVar = 0; hashVar <= 7; hashVar += 1) {
  console.log(hashVar);
}
