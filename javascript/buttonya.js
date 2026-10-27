const tombol = document.querySelector("#btnToggle");
const body = document.body;

if (tombol) {
  tombol.addEventListener("click", function () {
    body.classList.toggle("dark");
  });
}