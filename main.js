let mainHEader = document.querySelector(".main-header");
let mobileMenuHandle = document.querySelector(".mobile-menu-handeler");
let barIcon = mobileMenuHandle.querySelector("i");
let navLinks = document.querySelector(".cs-nav-links");
mobileMenuHandle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    barIcon.classList.remove("fa-bars-staggered");
    barIcon.classList.add("fa-xmark");
  } else {
    barIcon.classList.add("fa-bars-staggered");
    barIcon.classList.remove("fa-xmark");
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 25) {
    mainHEader.classList.remove("py-4");
    mainHEader.classList.add("py-3");
    mainHEader.classList.add("active");
  } else {
    mainHEader.classList.add("py-4");
    mainHEader.classList.remove("py-3");
    mainHEader.classList.remove("active");
  }
});
