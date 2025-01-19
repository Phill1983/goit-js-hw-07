const button = document.querySelector(".change-color");
const elementText = document.querySelector(".color");

button.addEventListener("click", () => {
  const color = getRandomHexColor();
  colorChanger(color);
} )

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function colorChanger(color) {
  if (!color) return;

  elementText.textContent = color;
  document.body.style.backgroundColor = color;
}