const input = document.querySelector("#newTask");
const buttonInput = document.querySelector("#addItem");
const contentElement = document.querySelector("#content");
const taskArray = [];
// console.log(contentElement);

buttonInput.addEventListener("click", () => {
  taskArray.push(input.value);
  const listOfToDos = taskArray.map((currentTask) => {
    document.getElementById("newTask").value = "";
    return `<li>${currentTask}</li>`;
  });
  buttonInput.addEventListener("click", () => {
    const input = "";
  });
  const listOfToDosAsHtml = listOfToDos.join("");
  contentElement.innerHTML = `<ul>${listOfToDosAsHtml}</ul>`;
  console.log(listOfToDos);
});
contentElement.addEventListener("click", (e) => {
  if (e.target.innerHTML.contains("listOfToDos")) {
    e.target.classList.toggle("strike");
  }
});
