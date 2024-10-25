const input = document.querySelector("#newTask");
const buttonInput = document.querySelector("#addItem");
const contentElement = document.querySelector("#content");
const taskArray = [];
console.log(contentElement);

buttonInput.addEventListener("click", () => {
  taskArray.includes(input.value) || input.value === ""
    ? (document.getElementById("newTask").value = "")
    : taskArray.push(input.value);
  const listOfToDos = taskArray.map((currentTask) => {
    document.getElementById("newTask").value = "";
    //Clears Input
    return `<li id="${currentTask}">${currentTask}</li>`;
    //returns a list of Current task
  });
  // buttonInput.addEventListener("click", () => {
  //   const input = "";
  // });
  const listOfToDosAsHtml = listOfToDos.join("");
  contentElement.innerHTML = `<ul>${listOfToDosAsHtml}</ul>`;
  console.log(listOfToDos);

  taskArray.forEach((currentTask) => {
    const listElement = document.querySelector(`#${currentTask}`);
    // console.log(listElement);
    listElement.addEventListener("click", () => {
      listElement.classList.toggle("strike");
      console.log(currentTask);
    });
  });
});
