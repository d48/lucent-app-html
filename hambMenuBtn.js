const el = document.getElementById("hamburger-menu");

let isActive = false;

const toggleMenu = (event) => {
  el.classList.toggle("is-active");
};

el.addEventListener("click", toggleMenu);
