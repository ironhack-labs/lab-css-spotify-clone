const burger = document.querySelector(".burger");
const sideLinks = document.querySelector(".sideLinks");

burger.addEventListener("click", (e) => {
  sideLinks.classList.toggle("open");
  burger.classList.toggle("open");
});
