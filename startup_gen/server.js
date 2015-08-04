// require express framework and additional modules
var express = require('express'),
    app = express(),
    _ = require('underscore'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    db = require('./models')
    bodyParser = require('body-parser');


// Connect to database
mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/startupninja');

// OPEN THE API TO REQUESTS FROM ANY DOMAIN
app.use(cors());

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));



//pre-seeded company ideas
// var ideas = [
//   {id: 1, company: "Tinder", market: "organic farming"},
//   {id: 2, company: 'Uber', market: "dogs"},
//   {id: 3, company: 'Airbnb', market: "hackers"}
  
// ];



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

// generate all ideas and send to client
app.get('/api/ideas', function (req, res) {
 db.Idea.find(function(err, ideas){
    console.log("Ideas: "+ideas);
    res.json(ideas);
  });
});

// generate random idea and send to client
app.get('/api/ideas/random', function (req, res) {
  // send all phrases as JSON response
 // randomIdea = shuffle(ideas);
  db.Idea.find(function(err,ideas){
  	randomIdea = shuffle(ideas);
  	console.log(randomIdea)
  	res.json(randomIdea);
  });
});

// get one specfic idea
app.get('/api/ideas/:id', function (req, res) {
  // set the value of the id
  var targetId = req.params.id;
  console.log(targetId);
  // find phrase in db by id
  db.Idea.findOne({_id: targetId}, function (err, foundIdea) {
    res.json(foundIdea);
  
});

});


// update the love counter
app.put('/api/ideas/:id/loves', function (req, res) {
  // set the value of the id
  var targetId = req.params.id;

  // find idea in db by id
  db.Idea.findOne({_id: targetId}, function (err, foundIdea) {
    // update the idea's love counter
    foundIdea.loves += 1;
    
    // save updated idea in db
    foundIdea.save(); 
  });
});

// update the hates counter
app.put('/api/ideas/:id/hates', function (req, res) {
  // set the value of the id
  var targetId = req.params.id;

  // find idea in db by id
  db.Idea.findOne({_id: targetId}, function (err, foundIdea) {
    // update the idea's love counter
    foundIdea.hates += 1;
    
    // save updated idea in db
    foundIdea.save(); 
  });
});





// listen on port 3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});