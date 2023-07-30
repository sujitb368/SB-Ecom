# Capstone Project 1

## Table of Contents

1. Introduction
2. Project Structure
3. Code Overview
   3.1. HTML Structure
   3.2. CSS Styling
   3.3. JavaScript
4. Technology/Libraries/language

5. Introduction:

This project utilizes the Bootstrap framework to create a e-commarce user-friendly application for displaying products mainly cloths. The primary features of this application include a searchable navigation bar, product card carousel, and user can add product to cart. The navigation bar allows easy access to different sections of the application, including a dropdown with a list of product category.

With a focus on responsive design and clean aesthetics, this project aims to provide an engaging and seamless user experience. By following this documentation, you will gain insights into the project's structure, and all of its features

2. Project Structure
   finalproject
   │--index.html
   |--commonHeaderFooter
   | |--header.html
   | |--footer.html
   |--css
   | |--style.css
   |--js
   | |commonScript.js
   ├── pages
   │ ├── kids
   │ │ ├── kids.html
   │ ├── men
   │ │ ├── allProducts.html
   │ │ └── hoodies.html
   │ │ └── pants.html
   │ │ └── shirts.html
   │ ├── women
   │ │ ├── allProducts.html
   │ │ └── dresses.html
   │ │ └── pants.html
   │ │ └── skirts.html
   │ └── allproducts.html
   │ └── cart.html
   │ └── contact.html
   │ └── login.html
   │
   │
   └── thoughtNote.md

3. code overview:

**index.html:**  
This is the main entry point of this project - have injected navbar and footer - top banner with slogan black overlay color over the entire banner section - carousel section showing product cards 5 card in large screen size 2 in mid screen size 1 in mobile screen

**commonHeaderFooter/header.html:** - this page hold the navigation bar and this will be injected to other pages as a header of page

- showCartItems() - get cart from localstorage and show the cart length in the cart

**commonHeaderFooter/footer.html:**
this page hold the footer navigation bar and this be will injected to other pages as a footer of page

**js/commonScript.js:**
This page contains logic for common functionality

- getFooter() function that inject the footer
- getHeader() function that inject the navbar
- nextPage() function that take two parameters event and next page path then it will navigate to the next page
- loadLogo() function that takes two parameters id and path of logo image then set the logo in header/navbar
- disableClick() function that remove show class from the drop down in screen size > 1001
- addToCart() function that takes product card as parameter when clicked `addToCart `button it gets the product
  image, title, price and save it to local storage and finnaly add this product to cart

**css/styles.css:**
Global style sheet for the entire project

**pages/men(allProducts.html hoodies.html pants.html shirts.html)**
This is container folder for all product category of men and for this project all the product page have same product for the purpose of showing

**pages/womens(allProducts.html dresses.html pants.html skirts.html)**
This is container folder for all product category of women and for this project all the product page have same product for the purpose of showing

**pages/kids(kids.html)** - This is container folder for all product category of kids - Used unplash images

**pages/allproducts.html**
This page contains all category products
**pages/cart.html**
This will show all products user has added to cart 1 section will have list of all product another section total price summary - user can increase and decrease number of products by clicking plus or minus buttons - price summary will be update every time a product is added or removed using plus or minus buttons

**pages/contact.html**
This page has a contact form in right side of the page and image at left side of the page
**pages/login.html**
This page has a login form and when user enter correct email and password then it will alert login successfull and redirect to home page
if wrong login credentials than will alert email or password is incorrect

4. Technology/Libraries/language
   - HTML
   - Css
   - JavaScript
   - Bootstrap5

**info**
Logic or function required for individual page are writen in that page

example:
To calculate the cart's items price writen in the cart's page
