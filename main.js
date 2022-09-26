const menuAccount = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");


menuAccount.addEventListener("click", () => {
  desktopMenu.classList.toggle("inactive");
});

menuHamburgerIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("inactive");
});

// function toggleMobileMenu() {
//   mobileMenu.classList.toggle("inactive");
// }
