const toggleBtn = document.querySelector(".toggle_btn");
const icon = document.querySelector(".toggle_btn i");
const menu = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("open");

  if (menu.classList.contains("open")) {
    icon.className = "fa-solid fa-xmark";
  } else {
    icon.className = "fa-solid fa-bars";
  }
});
