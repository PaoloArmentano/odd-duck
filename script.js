"use strict";
 console.log("Duck you");


// global varaibles
// querySelector returns the first element in the document that matches
const productContainer = document.getElementById("productContainer");
const resultsButton = document.getElementById("resultsButton");
const image1 = document.querySelector("img:first-child");
const image2 = document.querySelector("img:nth-child(2)");
const image3 = document.querySelector("img:nth-child(3)");

let clicks = 0;
const maxClicksAllowed = 25;

 let allProducts = [];

 function getRandomNumber() {
    return Math.floor(Math.random() * allProducts.length);
  }
  
 function Product(name, src){
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

 function handleProductClick(event) {
   if (event.target === productContainer) {
     alert("Please click on an image");
   } else {
     clicks++;
     // console.log(clicks);
     let clickedProduct = event.target.alt;
     for (let i = 0; i < allProducts.length; i++) {
       if (clickedProduct === allProducts[i].name) {
         allProducts[i].clicks++;
         break;
       }
     }
     if (clicks === maxClicksAllowed) {
       productContainer.removeEventListener("click", handleProductClick);
       productContainer.className = "no-voting";
       resultsButton.addEventListener("click", renderResults);
       resultsButton.className = "clicks-allowed";
       alert("You've used all your votes!")
     } else {
       renderProducts();
     }
   }
 }

 function renderResults() {
   // console.log("Your results are in!");
   let ul = document.querySelector("ul");
   for (let i = 0; i < allProducts.length; i++) {
     let li = document.createElement("li");
     li.textContent = `${allProducts[i].name} had ${allProducts[i].views} views and was clicked ${allProducts[i].clicks} times.`;
     ul.appendChild(li);
   }
 }

const bag = new Product("Bag Product", "./images/bag.jpg");
const banana = new Product("Banana Product", "./images/banana.jpg");
const bathroom = new Product("Bathroom Product", "./images/bathroom.jpg");
const boots = new Product("Boots Product", "./images/boots.jpg");
const breakfast = new Product("Breakfast Product", "./images/breakfast.jpg");
const bubblegum = new Product("Bubblegum Product", "./images/bubblegum.jpg");
const chair = new Product("Chair Product", "./images/chair.jpg");
const cthulhu = new Product("Cthulhu Away", "./images/cthulhu.jpg");
const dogDuck = new Product("Dog-Duck Product", "./images/dog-duck.jpg");
const dragon = new Product("Dragon Product", "./images/dragon.jpg");
const pen = new Product("Pen Product", "./images/pen.jpg");
const petSweep = new Product("Pet sweep Product", "./images/pet-sweep.jpg");
const scissors = new Product("Scissors Product", "./images/scissors.jpg");
const shark = new Product("Shark Product", "./images/shark.jpg");
const sweep = new Product("Sweep Product", "./images/sweep.png");
const tauntaun = new Product("Tauntaun Product", "./images/tauntaun.jpg");
const unicorn = new Product("Unicors Product", "./images/unicorn.jpg");
const waterCan = new Product("Water can Product", "./images/water-can.jpg");
const wineGlass = new Product("Wine glass Product", "./images/wine-glass.jpg");


renderProducts();

productContainer.addEventListener("click", handleProductClick);