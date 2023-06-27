"use strict";
 console.log("Duck you");


// global varaibles
// querySelector returns the first element in the document that matches
const productContainer = document.querySelector("div");
const resultsButton = document.querySelector("section + div");
const image1 = document.querySelector("section img:first-child");
const image2 = document.querySelector("section img:nth-child(2)");
const image3 = document.querySelector("section img:nth-child(3)");

let clicks = 0;
const maxClicksAllowed = 25;

 let allProducts = [];

 function getRandomNumber() {
    return Math.floor(Math.random() * allProducts.length);
  }
  
 function Product(name, src, views){
    this.name = name;
    this.src = src;
    this.views = 0;
    this.clicks = 0;
    allProducts.push(this);
 }

 function renderProducts() {
    // we need to generate a number to reference the product we want to render onto the page
    let product1 = getRandomNumber();
    let product2 = getRandomNumber();
    let product3 = getRandomNumber();

   // now we have two random numbers lets set the attributes of our images in the document.
   image1.src = allProducts[product1].src;
   image2.src = allProducts[product2].src;
   image3.src = allProducts[product3].src;
   image1.alt = allProducts[product1].name;
   image2.alt = allProducts[product2].name;
   image3.alt = allProducts[product3].name;
   allProducts[product1].views++;
   allProducts[product2].views++;
   allProducts[product3].views++;
 }