const gallery = document.querySelector(".gallery");
const closeBtn = document.querySelector(`[data-action="close"]`);
const openBtn = document.querySelector(`[data-action="open"]`);
const backdrop = document.querySelector(`.full-image-container`);
gallery.style.marginLeft = 0;
window.addEventListener("keydown", (e) => {
  if (
    e.code === "ArrowRight" &&
    Number.parseInt(gallery.style.marginLeft) !==
      -(
        (gallery.children.length - 1) *
        (gallery.firstElementChild.offsetWidth + 20)
      )
  ) {
    gallery.style.marginLeft = `${
      Number.parseInt(gallery.style.marginLeft) -
      (gallery.firstElementChild.offsetWidth + 20)
    }px`;
  }
  if (
    e.code === "ArrowLeft" &&
    Number.parseInt(gallery.style.marginLeft) !== 0
  ) {
    gallery.style.marginLeft = `${
      Number.parseInt(gallery.style.marginLeft) +
      (gallery.firstElementChild.offsetWidth + 20)
    }px`;
  }
});

openBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);

function toggleModal() {
  backdrop.classList.toggle("is-hidden");
}
