const menuAccount = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".product-detail");

const menuHamburgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const cardsContainer = document.querySelector(".cards-container");


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

//Creando los contenedores con todos los datos de cada producto
function allProducts (listProducts) {
  for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const imageProduct = document.createElement('img');
    imageProduct.setAttribute('src', product.image);
  
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