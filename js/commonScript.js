// this file have common function which is required in multiple files

// baseURL
// if base url is not same as current then change base url with current
// here i use live server extension in vs code
const baseURL = "http://127.0.0.1:5500";

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
    }, 500);
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
    const basePath = window.location.origin + "/" + nextPage;
    window.location.href = basePath;
  } catch (error) {
    console.log(error);
  }
};
// function to set the logo image in navbar
const loadLogo = (id, path) => {
  const logo = document.getElementById(id);
  logo.src = window.location.origin + "/" + path;
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
