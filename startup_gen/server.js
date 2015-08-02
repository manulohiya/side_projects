// require express framework and additional modules
var express = require('express'),
    app = express(),
    _ = require('underscore'),
    cors = require('cors'),
    bodyParser = require('body-parser')


// OPEN THE API TO REQUESTS FROM ANY DOMAIN
app.use(cors());

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));

//pre-seeded company ideas

// pre-seeded phrase data
var ideas = [
  {id: 1, company: "Tinder", market: "organic farming"},
  {id: 2, company: 'Uber', market: "dogs"},
  {id: 3, company: 'Airbnb', market: "hackers"}
  
];

// Randomizer function
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



//Static Routes


// set up root route to respond with 'hello world'
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

// ideas index
app.get('/api/ideas', function (req, res) {
  // send all phrases as JSON response
  randomIdea = shuffle(ideas);
  res.json(randomIdea);
});

// listen on port 3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});