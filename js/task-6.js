const controls = document.getElementById("controls");
const inputNum = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const squadContainer = document.getElementById("boxes");

createButton.addEventListener("click", () => {
  const number = parseInt(inputNum.value, 10);
  if (number >= 1 && number <= 100) {
    destroyBoxes();
    createBoxes(number);
  } else {
    alert("Enter number between 1 & 100")
  }

})

destroyButton.addEventListener("click", () => {
  destroyBoxes();
  inputNum.value = "";
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let divSize = 30;
  const boxArray = [];

  for (let i = 0; i < amount; i++) {
    const divBox = document.createElement("div");
    divBox.style.backgroundColor = getRandomHexColor();
    divBox.style.width = `${divSize}px`;
    divBox.style.height = `${divSize}px`;
    boxArray.push(divBox);
    divSize += 10;
  }
  squadContainer.append(...boxArray);
}
function destroyBoxes() {
  squadContainer.innerHTML = "";
}