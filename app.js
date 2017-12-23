'use strict';
var imagesPaths = ['./assets/bag.jpg', './assets/banana.jpg', './assets/bathroom.jpg', './assets/boots.jpg', './assets/breakfast.jpg', './assets/bubblegum.jpg', './assets/chair.jpg', './assets/cthulhu.jpg', './assets/dog-duck.jpg', './assets/dragon.jpg', './assets/pen.jpg', './assets/pet-sweep.jpg', './assets/scissors.jpg', './assets/shark.jpg', './assets/sweep.jpg', './assets/tauntaun.jpg', './assets/unicorn.jpg', './assets/usb.gif', './assets/water-can.jpg', './assets/wine-glass.jpg'];

//list of three choices
var allImages = [];
var imagesToRender = [];

//random image selector
function randomIndex() {
  return Math.floor(Math.random() * (19);
}

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
}

//created the opjects and push them into the images array
photos.push(new Photo('travel bag', './assets/bag.jpg'));
photos.push(new Photo('banana chopper', './assets/banana.jpg'));
photos.push(new Photo('bathroom party', './assets/bathroom.jpg'));
photos.push(new Photo('rain boots', './assets/boots.jpg'));
photos.push(new Photo('breakfast machine','./assets/breakfast.jpg'));
photos.push(new Photo('meat ball bubblegum','./assets/bubblegum.jpg'));
photos.push(new Photo('plastic chair','./assets/chair.jpg'));
photos.push(new Photo('cthulhu','./assets/cthulhu.jpg'));
photos.push(new Photo('dog nose','./assets/dog-duck.jpg'));
photos.push(new Photo('dragon meat','./assets/dragon.jpg'));
photos.push(new Photo('pen caps','./assets/pen.jpg'));
photos.push(new Photo('pet sweep','./assets/pet-sweep.jpg'));
photos.push(new Photo('scissors holder','./assets/scissors.jpg'));
photos.push(new Photo('shark sleeping bag','./assets/shark.jpg'));
photos.push(new Photo('sweep mat','./assets/sweep.png'));
photos.push(new Photo('tautaun blanket','./assets/tauntaun.jpg'));
photos.push(new Photo('unicorn meat can','./assets/unicorn.jpg'));
photos.push(new Photo('usb container','./assets/usb.gif'));
photos.push(new Photo('water container','./assets/water-can.jpg'));
photos.push(new Photo('wine glass ','./assets/wine-glass.jpg'));

//this is where we made all the objects. Ran all of our paths thru function Image(path)
function populateAllImages() {
  for (var i = 0; i < imagesPaths.length; i++){
    new Image(imagesPath[i]);
  }
}

function toggleTrue(){
  for(var i = 0; i < allImages.length; i++){
    if(allImages[i].shownNow = true){
      allImages[i].shownLastTime = true;
    }
  }
}
function toggleFalse(){
  for(var i = 0; i < allImages.length; i++){
    if(allImages[i].shownLastTime = true){
      allImages[i].shownLastTime = false;
      allImages[i].shownNow = false;
}

// function threeItemsToRender(){
//    this.first.src =
//    this.second.src =
//    this.third.src =

//    function threeItemsTo Render() {
//   const element = ({
//     new Image().randomIndex()}.
//
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('first')
//   );
// }



//help from stackoverflow
// var someimage = document.getElementById('this_one').firstChild.getAttribute("src");
// alert(someimage);

// get html element by id
var imageOne = document.getElementById('first');
var imageTwo = document.getElementById('second');
var imageThree = document.getElementById('third');



imageOne.addEventListener('click', threeItemsToRender);
imageTwo.addEventListener('click', threeItemsToRender);
imageThree.addEventListener('click', threeItemsToRender);
