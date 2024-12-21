const gallery = document.querySelector(".gallery");
window.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") {
    gallery.scrollLeft -= 320;
  }
  if (e.code === "ArrowRight") {
    gallery.scrollLeft += 320;
  }
});
