'use strict';
var imagesPaths = ['./assets/bag.jpg', './assets/banana.jpg', './assets/bathroom.jpg', './assets/boots.jpg', './assets/breakfast.jpg', './assets/bubblegum.jpg', './assets/chair.jpg', './assets/cthulhu.jpg', './assets/dog-duck.jpg', './assets/dragon.jpg', './assets/pen.jpg', './assets/pet-sweep.jpg', './assets/scissors.jpg', './assets/shark.jpg', './assets/sweep.jpg', './assets/tauntaun.jpg', './assets/unicorn.jpg', './assets/usb.gif', './assets/water-can.jpg', './assets/wine-glass.jpg'];

//list of three choices
var allImages = [];
var imagesToRender = [];

//random image selector
var randomIndex = function() {
  return Math.floor(Math.random() * 19);
}

var myFunc = function() {
  var counter = 0;
  while (counter < 3) {
    var index = randomIndex();
    var image = allImages[index];
    //constructor function
    //(path) = argument
    function Image(path){
      this.name = str.slice(9, -4);
      this.path = path;
      this.numClicks = 0;
      this.numShown = 0;
      this.shownNow = false;
      this.shownLastTime = false;
      allImages.push(this);

  // starts survey by generating three random non-repeating images
function start() {
  offSite = onSite; //help from Jamie W
  onSite = [];
  while (onSite.length < 3) {
    var randomIndex = function(){
      Math.floor(Math.random() * 19);
    if (productNumber !== offSite[0] && productNumber !== offSite[1] && productNumber !== offSite[2] && productNumber !== onSite[0] && productNumber !== onSite[1]) {
      onSite.push(productNumber);
    }
  }
  first.src = products[onSite[0]].path;
  products[onSite[0]].demo++
  second.src = products[onSite[1]].path;
  products[onSite[1]].demo++
  third.src = products[onSite[2]].path;
  products[onSite[2]].demo++
}

// updates chart info
function amendChart() {
  for (var i = 0; i < products.length; i++) {
    names[i] = products[i].name;
    votes[i] = products[i].clickLog;
    demo[i] = products[i].demo;
  }
}

// get html element by id
var imageOne = document.getElementById('first');
var imageTwo = document.getElementById('second');
var imageThree = document.getElementById('third');



imageOne.addEventListener('click', threeItemsToRender);
imageTwo.addEventListener('click', threeItemsToRender);
imageThree.addEventListener('click', threeItemsToRender);
