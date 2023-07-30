// this file have common function which is required in multiple files

// baseURL
// if base url is not same as current then change base url with current
// here i use live server extension in vs code
// const baseURL = "http://127.0.0.1:5500";
// production server
const baseURL = "https://sujitb368.github.io/SB-Ecom";

const showCartItems = () => {
  try {
    //get product count
    // get from localStorage
    const cart = JSON.parse(localStorage.getItem("cart"));
    //show cart count in navbar if cart and cart length is greater than zero
    if (cart && cart.length > 0) {
      document.getElementById("cart").innerText = cart.length;
    }
  } catch (error) {
    console.log(error);
  }
};

// this function is used to get the header
const getHeader = async (divId) => {
  //get div to inject header into
  const div = document.getElementById(divId);
  try {
    //get header content
    const response = await fetch(`${baseURL}/commonHeaderFooter/header.html`);
    //set header content
    div.innerHTML = await response.text();
    //after heder injection set logo
    document.getElementById("logo");
    setTimeout(() => {
      showCartItems();
    }, 2000);
    return true;
  } catch (error) {
    console.log(error);
  }
};

// funtion to get footer content
const getFooter = async (divId) => {
  console.log("footer", divId);
  //get div to inject footer into
  const div = document.getElementById(divId);
  try {
    //get footer content
    const response = await fetch(`${baseURL}/commonHeaderFooter/footer.html`);
    //set footer content
    div.innerHTML = await response.text();
    //after heder injection set logo content
    loadLogo("logo", "logo1.png");
  } catch (error) {
    console.log(error);
  }
};

//function to navigate to the next page
const nextPage = (event, nextPage) => {
  //prevent default navigation
  event.preventDefault();
  try {
    //navigate to the next page
    const basePath = window.location.origin + "/SB-Ecom/" + nextPage;
    window.location.href = basePath;
  } catch (error) {
    console.log(error);
  }
};
// function to set the logo image in navbar
const loadLogo = (id, path) => {
  const logo = document.getElementById(id);
  logo.src = window.location.origin + "/SB-Ecom/" + path;
};

//to disable dropdown on click in large screens
const disableClick = () => {
  setTimeout(() => {
    if (window.innerWidth > 1001) {
      const dropdownMenu = document.querySelector(".dropdown-menu");
      dropdownMenu.classList.remove("show");
    }
  }, 250);
};

// add to cart logic
// empty cart
let cart = [];
// function to add, to cart
const addToCart = (card) => {
  console.log(card);
  try {
    //get img of current clicked card
    const img = card.querySelector("img");
    // get the src of the product image
    const imgSrc = img.src;
    //get the title of the product
    const title = card.querySelector(".product-title").textContent;
    //get the price of the product
    const price = card.querySelector(".product-price").textContent;
    // product info to store in and will be used to show in cart page
    const product = {
      img: imgSrc,
      title: title,
      price: price,
      cartId: card.id,
    };
    //get localStorages cart
    const localStorages = JSON.parse(localStorage.getItem("cart"));
    if (localStorages && localStorages.length > 0) {
      //copy all elements of localStorages to cart array
      cart = [...localStorages];
      // push product to cart array
      cart.push(product);
    } else {
      // if cart is empty | no product added before
      cart.push(product);
    }

    //show cart's items count in navbar
    document.getElementById("cart").innerText = cart.length;
    //set to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.log("Error:", error);
  }
};
