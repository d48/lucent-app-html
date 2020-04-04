const el = document.getElementById("hamburger-menu");
const menuElement = document.getElementById("client-menu");

let isActive = false;

const toggleMenu = (event) => {
  el.classList.toggle("is-active");
  menuElement.classList.toggle("change");
};

el.addEventListener("click", toggleMenu);
