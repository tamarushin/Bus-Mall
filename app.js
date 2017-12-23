// 'use strict';
// var imagePaths = ['./assets/bag.jpg', './assets/banana.jpg', './assets/bathroom.jpg', './assets/boots.jpg', './assets/breakfast.jpg', './assets/bubblegum.jpg', './assets/chair.jpg', './assets/cthulhu.jpg', './assets/dog-duck.jpg', './assets/dragon.jpg', './assets/pen.jpg', './assets/pet-sweep.jpg', './assets/scissors.jpg', './assets/shark.jpg', './assets/sweep.jpg', './assets/tauntaun.jpg', './assets/unicorn.jpg', './assets/usb.gif', './assets/water-can.jpg', './assets/wine-glass.jpg'];

'use strict';
//created the photos objects constructors
function Photo(name, filename){
  this.name = name;
  this.filename = filename;
  this.clicksCounter = 0;
  this.displayedTimes = 0;
}

var totalClicksOnImages = 0;
//created 4 embty rrays to hold the set of photos
var photosOnSecondToLastScreen = [];
var photosOnPreviousScreen = [];
var photosOnScreen = [];
var photos = [];

//created the opjects and push them into the photos array
photos.push( new Photo('travel bag', '/assets/bag.jpg'));
photos.push( new Photo('banana chopper', '/assets/banana.jpg'));
photos.push( new Photo('bathroom party', '/assets/bathroom.jpg'));
photos.push( new Photo('rain boots', '/assets/boots.jpg'));
photos.push( new Photo('breakfast machine','/assets/breakfast.jpg'));
photos.push( new Photo('meat ball bubblegum','/assets/bubblegum.jpg'));
photos.push( new Photo('plastic chair','/assets/chair.jpg'));
photos.push( new Photo('cthulhu','/assets/cthulhu.jpg'));
photos.push( new Photo('dog nose','/assets/dog-duck.jpg'));
photos.push( new Photo('dragon meat','/assets/dragon.jpg'));
photos.push( new Photo('pen caps','/assets/pen.jpg'));
photos.push( new Photo('pet sweep','/assets/pet-sweep.jpg'));
photos.push( new Photo('scissors holder','/assets/scissors.jpg'));
photos.push( new Photo('shark sleeping bag','/assets/shark.jpg'));
photos.push( new Photo('sweep mat','/assets/sweep.png'));
photos.push( new Photo('tautaun blanket','/assets/tauntaun.jpg'));
photos.push( new Photo('unicorn meat can','/assets/unicorn.jpg'));
photos.push( new Photo('usb container','/assets/usb.gif'));
photos.push( new Photo('water container','/assets/water-can.jpg'));
photos.push( new Photo('wine glass ','/assets/wine-glass.jpg'));

//getting a random number to choose a photo object out of the photos array
function getRandomIndex(list){
  return Math.floor(Math.random() * list.length);
}

//creating three elements and assigning them to variables
var mainDiv = document.getElementById('clickable-images');
var firstImage = document.createElement('first');
var secondImage = document.createElement('second');
var thirdImage = document.createElement('third');

newSetOfPhotos();

//created a function to assign the three random photos out of the photos array to the elements by revoking the getThreeRandomPhotos function
function newSetOfPhotos() {
  getThreeRandomPhotos();
  firstImage.src = photosOnScreen[0].filename;
  photosOnScreen[0].displayedTimes++;
  secondImage.src = photosOnScreen[1].filename;
  photosOnScreen[1].displayedTimes++;
  thirdImage.src = photosOnScreen[2].filename;
  photosOnScreen[2].displayedTimes++;
  mainDiv.appendChild(firstImage);
  mainDiv.appendChild(secondImage);
  mainDiv.appendChild(thirdImage);
}


function getThreeRandomPhotos(){
  photos = photos.concat(photosOnSecondToLastScreen);
  photosOnSecondToLastScreen = photosOnPreviousScreen;
  photosOnPreviousScreen = photosOnScreen;
  photosOnScreen = [];

  // created a var nextPhoto to keep track of the next Photo we take out of photos
  // splice out an photo object (wich removes it from photos)
  var nextPhoto = photos.splice(getRandomIndex(photos),9, 1);
  // concat the array returned by splice onto photos onScreen
  photosOnScreen = photosOnScreen.concat(nextPhoto);
  // repeat two more times to get three images
  nextPhoto = photos.splice(getRandomIndex(photos), 1);
  photosOnScreen = photosOnScreen.concat(nextPhoto);
  nextPhoto = photos.splice(getRandomIndex(photos), 1);
  photosOnScreen = photosOnScreen.concat(nextPhoto);

  return photosOnScreen;
}

//created an event handler function that increment the number of time the picture was clicked
function clicked(event){
  totalClicksOnImages++;
  if ( totalClicksOnImages < 25) {

    // assigning the targeted image to a variable
    var currentImage = event.target;

    //checking to see if the image element on the screen is one of the objects in the photos array
    if (currentImage.src.includes(photosOnScreen[0].filename)){
      photosOnScreen[0].clicksCounter++;
      console.log(photosOnScreen[0].clicksCounter);
    }
    if (currentImage.src.includes(photosOnScreen[1].filename)){
      photosOnScreen[1].clicksCounter++;
      console.log(photosOnScreen[1].clicksCounter);
    }
    if (currentImage.src.includes(photosOnScreen[2].filename)){
      photosOnScreen[2].clicksCounter++;
      console.log(photosOnScreen[2].clicksCounter);
    }

    setTimeout(newSetOfPhotos, 400);
  }
  else{
    firstImage.removeEventListener('click', clicked);
    secondImage.removeEventListener('click', clicked);
    thirdImage.removeEventListener('click', clicked);
  }
}
firstImage.addEventListener('click', clicked);
secondImage.addEventListener('click', clicked);
thirdImage.addEventListener('click', clicked);
