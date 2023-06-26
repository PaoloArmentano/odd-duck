"use strict";
 console.log("Duck you");

 let allDucks = [];

 function getRandomNumber() {
    return Math.floor(Math.random() * allDucks.length);
  }
  


 function Duck(name, src, views){
    this.name = name;
    this.src = src;
    this.views = 0;
    this.clicks = 0;
    allDucks.push(this);
 }