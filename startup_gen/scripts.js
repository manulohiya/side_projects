// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function(event) {
console.log("DOM fully loaded and parsed");

// Define both arrays. Array elements are placeholder for now. Will add more elements later.
var company = ["Chat Roulette","Tinder", "Popcorn Time", "napster", "altSchool", "Medium", "Zipcar", "General Assembly", "HotelTonight", "BirchBox", "Waze", "uber", "airbnb", "Snapchat", "SpaceX", "Pinterest", "Dropbox", "Spotify", "Venmo", "Slack", "Tesla", "Lyft", "Vice", "Instacart", "Blue Apron", "Netflix", "Google Docs", "Warby Parker", "Gilt", "Shazam", "Hootsuite", "Lending Club", "Zillow", "HBO"];
var industry = ["home cooked food", "family owned restaurants", "organic farming", "personal investing", "mobile advertising", "casual video games", "console games", "space travel", "online dating", "professional wrestling","air travel","private jets","hand made ethnic clothing","collector cars", "trips to national parks", "self driving cars","peer to peer banking", "online videos", "stock trading", "DNA sequencing", "call centers", "cargo","nuclear weapons","professional services","handyman services","beauty products", "organic produce", "brick and mortar stores", "lifelong education", "elementary education", "coding bootcamps", "on demand grocery services", "high quality health care", "in home health care", "visa services", "legal serives", "independent music", "live concerts", "retirement plans", "generic medicines", "former football players", "real estate", "apartment rentals", "beauty products", "Amateur Sports", "Middle Aged Men", "Middle Aged Women", "Baby Boomers", "Babies", "Dogs", "Cats", "Pets", "High School Kids", "Law Students", "South East Asia", "the midwest", "mainland china", "Steel Manufacturing", "Oil Refining", "Shipbuilding"];
var timeout = 1000;
console.log(company.length);
console.log(industry.length);

// Randomlizer function
var getRand = function(min,max) {
 float_num = Math.random() * (max - min) + min;
 rand = Math.floor(float_num);
 return rand
}

// Fisher Yates randomizer
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array[getRand(0,array.length-1)];
}



//Run the idea generator function
var ready = function() {
	var imagine = document.querySelector("#imagine");
	var butfor = document.querySelector("#butfor");
	var idea_company = document.querySelector("#company");
	var idea_industry = document.querySelector("#industry");
	var text_company = shuffle(company);
	var text_industry = shuffle(industry);;
	
	console.log(text_company);
	console.log(text_industry);
	
	imagine.innerText = "Imagine a";
	butfor.innerText = "but for";
	
	idea_company.innerText = text_company;
	$("#company").fadeIn(timeout, function(){});
	idea_industry.innerText = text_industry;
	$("#industry").fadeIn(timeout, function(){});

};

var newIdea = document.querySelector("#newIdea");
  
    newIdea.addEventListener("click", function(event) {   
    event.preventDefault();
    	
     	$("#company").fadeOut(timeout, function(){});
     	$("#industry").fadeOut(timeout, function(){
 			ready();
 			});
    });
    
    

});


// Ideas for improvement
//Add a timer and let the randomizer run every few seconds without refresh
// Better font selection
 
// Save array externally in a csv and call it from JS.