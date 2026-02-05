const toggleBtn = document.querySelector(".toggle-btn");
const menu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeMenu");
const overlay = document.getElementById("menuOverlay");

toggleBtn.onclick = () => {
  menu.classList.add("open");
  overlay.classList.add("show");
};

closeBtn.onclick = closeMenu;
overlay.onclick = closeMenu;

function closeMenu() {
  menu.classList.remove("open");
  overlay.classList.remove("show");
}

document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.onclick = () => closeMenu();
});

const current = location.pathname.split("/").pop();

document.querySelectorAll("a").forEach(link => {
  if (link.getAttribute("href") === current) {
    link.classList.add("active-link");
  }
});
