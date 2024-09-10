const clickMe = document.getElementById("clickMe");
clickMe.addEventListener("click", helloLog);

function helloLog(e) {
  console.log("Helrld", e);
}
