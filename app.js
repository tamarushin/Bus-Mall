'use strict';
var imagesPaths = ['./assets/bag.jpg', './assets/banana.jpg', './assets/bathroom.jpg', './assets/boots.jpg', './assets/breakfast.jpg', './assets/bubblegum.jpg', './assets/chair.jpg', './assets/cthulhu.jpg', './assets/dog-duck.jpg', './assets/dragon.jpg', './assets/pen.jpg', './assets/pet-sweep.jpg', './assets/scissors.jpg', './assets/shark.jpg', './assets/sweep.jpg', './assets/tauntaun.jpg', './assets/unicorn.jpg', './assets/usb.gif', './assets/water-can.jpg', './assets/wine-glass.jpg'];

//list of three choices
var allImages = [];
var imagesToRender = [];

//random image selector
function randomIndex() {
  return Math.floor(Math.random() * (img.imagePaths.length - 1));
}

function populateAllImages() {
  for (var i = 0; i < imagePaths.length; i++){
    new Image(imagePath[i]);
  }
}
function threeImagesToRender(){
  for(var i = 0; i < imagePaths.length; i++){
    if(shownNow = true){
      
    }


//constructor function

function Image(path){
  this.name = str.slice(9, -4);
  this.path = path;
  this.numClicks = 0;
  this.numShown = 0;
  this.shownNow = false;
  this.shownLastTime = false;
  allImages.push(this);
}

// get html element by id
