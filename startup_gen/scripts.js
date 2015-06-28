// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function(event) {
console.log("DOM fully loaded and parsed");

// Define both arrays. Array elements are placeholder for now. Will add more elements later.
var company = ["altSchool", "Medium", "General Assembly", "HotelTonight", "BirchBox", "Waze", "uber", "airbnb", "Snapchat", "SpaceX", "Pinterest", "Dropbox", "Spotify", "Venmo", "Slack", "Lyft", "Vice", "Instacart", "Blue Apron", "MongoDB", "Warby Parker", "Gilt", "Shazam", "Hootsuite", "Lending Club", "Zillow"];
var industry = ["agriculture", "accounting", "advertising", "aerospace", "Aircrafts","Airlines","Apparel","Automotives", "Banking", "Broadcasting", "Brokerages", "Biotechnology", "Call Centers", "Cargo Handling","Chemicals","Consulting","Cosmetics", "Defense", "Department Stores", "Education", "Financial Services", "Grocery", "Health Care", "Legal Services", "Music", "Pension Funds", "Pharmaceuticals", "Private Equity", "Real Estate", "Retail", "Soap & Detergents", "Amateur Sports", "Venture Capital", "Middle Aged Men", "Middle Aged Women", "Baby Boomers", "Babies", "Dogs", "Cats", "Pets", "High School Kids", "Law Students", "South East Asia", "Adult Entertainment", "Steel Manufacturing", "Oil Refining", "Shipbuilding"];
var timeout = 1000;
console.log(company.length);
console.log(industry.length);
// Randomlizer function
var getRand = function(min,max) {
 float_num = Math.random() * (max - min) + min;
 rand = Math.floor(float_num);
 return rand
}
    
//Run the idea generator function
var ready = function() {
	var idea_company = document.querySelector("#company");
	var idea_industry = document.querySelector("#industry");
	var company_rand = getRand(0,company.length);
	var industry_rand = getRand(0,industry.length);
	var text_company = company[company_rand];
	var text_industry = industry[industry_rand];
	
	console.log(text_company);
	console.log(text_industry);
	
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
// Increase number of elements in the array 
// Save array externally in a csv and call it from JS.