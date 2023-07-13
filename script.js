const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

menu.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("hide");
  closeBtn.classList.toggle("show");
  nav.classList.toggle("show");
  overlay.classList.toggle("show");
});
