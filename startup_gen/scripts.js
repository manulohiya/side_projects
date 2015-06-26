

// Define both arrays. Array elements are placeholder for now. Will add more elements later.
var unicorn = ["uber", "airbnb", "palantir","Snapchat", "SpaceX", "Flipkart", "Pinterest", "Dropbox", "Spotify", "Square"];
var industry = ["agriculture", "accounting", "advertising", "aerospace", "Aircraft","Airline","Apparel","Automotive", "Banking", "Broadcasting", "Brokerage", "Biotechnology", "Call Centers", "Cargo Handling","Chemicals","Computer","Consulting","Cosmetics"];

// Randomlizer function

var getRand = function(min,max) {


 float_num = Math.random() * (max - min) + min;
 rand = Math.floor(float_num);
 return rand
}
    
var unicorn_rand = getRand(0,unicorn.length);
var industry_rand = getRand(0,industry.length);

//console.log(unicorn_rand);
//console.log(industry_rand);

var text = "Imagine a " + unicorn[unicorn_rand]+ " but for " + industry[industry_rand];
console.log(text);

//Run the idea generator function
var ready = function() {
var idea = document.querySelector("h1");
//console.log(text);

idea.innerText = text;
	
};



// Ideas for improvement
//Add a timer and let the randomizer run every few seconds without refresh
// Better font selection
// Increase number of elements in the array 
// Save array externally in a csv and call it from JS.