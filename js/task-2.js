const input = document.querySelector(`input[type="number"]`);
const renderBtn = document.querySelector(`[data-action="render"]`);
const destroyBtn = document.querySelector(`[data-action="destroy"]`);
const boxes = document.querySelector("#boxes");

let size = 30;
let color = "";
const createBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    color = `rgb(${Math.round(Math.random() * (255 - 0) + 0)}, ${Math.round(
      Math.random() * (255 - 0) + 0
    )}, ${Math.round(Math.random() * (255 - 0) + 0)})`;
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div style=" width: ${size}px; height: ${size}px; background-color: ${color}"></div>`
    );
    size += 10;
  }
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
  size = 30;
};

renderBtn.addEventListener("click", () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
