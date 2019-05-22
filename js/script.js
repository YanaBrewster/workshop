console.log("hello");

var gallery = document.getElementById("images")



function allDogs(){

var allHair = [
  {
    breed: "Pug",
    hairType: "short",
    images: "dog0.jpg"
  },
  {
    breed: "French Bulldog",
    hairType: "short",
    images: "dog1.jpg"
  },
  {
    breed: "Dachshund",
    hairType: "short",
    images: "dog2.jpg"
  },
  {
    breed: "Border Terrier",
    hairType: "medium",
    images: "dog4.jpg"
  },
  {
    breed: "Schnauzer",
    hairType: "medium",
    images: "dog5.jpg"
  },
  {
    breed: "Cavalier King Charles Spaniel",
    hairType: "long",
    images: "dog3.jpg"
  },

]

var i;

gallery.innerHTML = " ";

for (var i = 0; i < allHair.length; i++) {
  gallery.innerHTML += '<div class="image-div"> <h2>'  + allHair[i].breed +  '</h2> <h3> Hair type: '  + allHair[i].hairType +  '</h3> <img id="images" src="images/'  + allHair[i].images+'"</div>'


document.getElementById("allHair").addEventListener('click', function(){
    allDogs();
})
}
}

allDogs();



// FUNCTION 1

function shorthairDogs(){

var dogsShorthair = [
  {
    breed: "Pug",
    hairType: "short",
    images: "dog0.jpg"
  },
  {
    breed: "French Bulldog",
    hairType: "short",
    images: "dog1.jpg"
  },
  {
    breed: "Dachshund",
    hairType: "short",
    images: "dog2.jpg"
  }
]

var i;

gallery.innerHTML = " ";

for (var i = 0; i < dogsShorthair.length; i++) {
  gallery.innerHTML += '<div class="image-div"> <h2>'  + dogsShorthair[i].breed +  '</h2> <h3> Hair type: '  + dogsShorthair[i].hairType +  '</h3> <img id="images" src="images/'  + dogsShorthair[i].images+'"</div>'


document.getElementById("shortHair").addEventListener('click', function(){
    shorthairDogs();
})
}
}

shorthairDogs();

// FUNCTION 2

function mediumhairDogs(){

var dogsMediumhair = [
  {
    breed: "Border Terrier",
    hairType: "medium",
    images: "dog4.jpg"
  },
  {
    breed: "Schnauzer",
    hairType: "medium",
    images: "dog5.jpg"
  }
]



var i;

gallery.innerHTML = " ";

for (var i = 0; i < dogsMediumhair.length; i++) {
  gallery.innerHTML += '<div class="image-div"> <h2>'  + dogsMediumhair[i].breed +  '</h2> <h3> Hair type: '  + dogsMediumhair[i].hairType +  '</h3> <img id="images" src="images/'  + dogsMediumhair[i].images+'"</div>'


document.getElementById("mediumHair").addEventListener('click', function(){
    mediumhairDogs();
});
}
}



// // FUNCTION 3

function longhairDogs(){

var dogsLonghair = [

  {
    breed: "Cavalier King Charles Spaniel",
    hairType: "long",
    images: "dog3.jpg"
  },

]



var i;

gallery.innerHTML = " ";

for (var i = 0; i < dogsLonghair.length; i++) {
  gallery.innerHTML += '<div class="image-div"> <h2>'  + dogsLonghair[i].breed +  '</h2> <h3> Hair type: '  + dogsLonghair[i].hairType +  '</h3> <img id="images" src="images/'  + dogsLonghair[i].images+'"</div>'


document.getElementById("longHair").addEventListener('click', function(){
    longhairDogs();
});
}
}
