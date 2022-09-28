const menuAccount = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".product-detail");

const menuHamburgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");


menuAccount.addEventListener('click', showMenuDesktop);
menuCarIcon.addEventListener('click', showProductDetail);
menuHamburgerIcon.addEventListener('click', showMobileMenu);

function showMenuDesktop(){
  asideProductDetail.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
};

function showProductDetail(){
  desktopMenu.classList.add("inactive");
  asideProductDetail.classList.toggle("inactive");
}

function showMobileMenu(){
  asideProductDetail.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
}


