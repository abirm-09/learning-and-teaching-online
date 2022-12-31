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
