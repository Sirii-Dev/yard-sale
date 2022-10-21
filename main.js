const menuAccount = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector("#shoppingCart");

const menuHamburgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const cardsContainer = document.querySelector(".cards-container");

const productDetailContainer = document.querySelector("#product-detail");
const productDetailClose = document.querySelector(".product-detail-close");

const dark = document.querySelector(".dark");



menuAccount.addEventListener('click', showMenuDesktop);
menuCarIcon.addEventListener('click', showProductDetail);
menuHamburgerIcon.addEventListener('click', showMobileMenu);
productDetailClose.addEventListener('click', closeProductDetail);

//Menu de la cuenta
function showMenuDesktop(){
  desktopMenu.classList.toggle("inactive");
  productDetailContainer.classList.add('inactive');
  shoppingCart.classList.add("inactive");
  //dark.classList.toggle("inactive");

  const isMenuOpen = !desktopMenu.classList.contains('inactive');

  if(isMenuOpen)
      dark.classList.remove('inactive');
  else
      dark.classList.add('inactive');
 
};

//muestra productos dentro del carrito
function showProductDetail(){
  shoppingCart.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  //dark.classList.toggle("inactive");

  isShoppingCartOpen = !shoppingCart.classList.contains("inactive");
  if(isShoppingCartOpen){
    dark.classList.remove('inactive');
  }else {
    dark.classList.add('inactive');
  }
}

// Menu hamburgesa
function showMobileMenu(){
  mobileMenu.classList.toggle("inactive");
  shoppingCart.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

//menu de categorias de productos
function openProductDetail(){
  productDetailContainer.classList.toggle('inactive');
  desktopMenu.classList.add("inactive");
  shoppingCart.classList.add("inactive");
}
function closeProductDetail () {
  productDetailContainer.classList.add('inactive');
}

function darkBackgorund(){
  const isDesktopMenuOpen = desktop-menu.classList.contains("inactive");
  const isShoppingCartOpen = shoppingCart.classList.contains("inactive");

  if (isDesktopMenuOpen || isShoppingCartOpen){
    dark.classList.toggle("inactive");
  }
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

//Creando los contenedores con todos los datos de cada producto
function allProducts (listProducts) {
  for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const imageProduct = document.createElement('img');
    imageProduct.setAttribute('src', product.image);
    imageProduct.addEventListener('click', openProductDetail)
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const info = document.createElement('div');

    const name = document.createElement('p');
    name.innerText = product.name;
    const price = document.createElement('p');
    price.innerText = "$" + product.price;
  
    info.append(name, price);
  
    const containerIcon = document.createElement('figure');
    const icon = document.createElement('img');
    icon.setAttribute('src', "./assets/icons/bt_add_to_cart.svg");
    containerIcon.appendChild(icon);
  
    productInfo.append(info, containerIcon);
  
    productCard.appendChild(imageProduct);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

allProducts(productList);