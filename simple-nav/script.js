const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");

function toggleMenu(){
  navLinks.classList.toggle("active");

  // change icon
  if (navLinks.classList.contains("active")) {
    menuBtn.textContent = "✕"; // cross
  } else {
    menuBtn.textContent = "☰"; // menu icon
  }
}