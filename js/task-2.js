const input = document.querySelector(`input[type="number"]`);
const renderBtn = document.querySelector(`[data-action="render"]`);
const destroyBtn = document.querySelector(`[data-action="destroy"]`);
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div  style=" min-width: 100px; height: 100px;background-color: rgb(${Math.round(
        Math.random() * (255 - 0) + 0
      )}, ${Math.round(Math.random() * (255 - 0) + 0)}, ${Math.round(
        Math.random() * (255 - 0) + 0
      )})"></div>`
    );
    console.log(boxes);
  }
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

renderBtn.addEventListener("click", () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
