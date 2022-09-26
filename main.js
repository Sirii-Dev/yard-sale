const menuAccount = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu ");

menuAccount.addEventListener("click", () => {
  desktopMenu.classList.toggle("inactive");
});
