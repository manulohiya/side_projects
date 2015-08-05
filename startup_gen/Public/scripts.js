// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function(event) {
  console.log("DOM fully loaded and parsed");

  var timeout = 1000;
  // results template
  var _results = _.template($('#resultsTemplate').html());
  var $results = $('#results');


//Get random idea 
// var ready = function() {
	console.log("Document is ready");
  var imagine = document.querySelector("#imagine");
  var butfor = document.querySelector("#butfor");
  var idea_company = document.querySelector("#company");
  var idea_market = document.querySelector("#market");
  var ideas = {};

  



  $.get('/api/ideas/random', function(data){
    ideas = data
    console.log("IDEAS: "+ideas._id); 
    var company = ideas.company
    console.log(company); 
    var market = ideas.market
    console.log(market); 

    idea_company.innerText = company;
    $("#company").fadeIn(timeout, function(){});
    idea_market.innerText = market;
    $('#love').attr('data-id', ideas._id);
    console.log("Changing data attribute")
    $('#hate').attr('data-id', ideas._id);
    $("#market").fadeIn(timeout, function(){});  

  });

// };

//Love idea 
$("#love").click(function(event) {
  console.log("Clicking LOVE")
  event.preventDefault();
  ideaId = $(this).attr('data-id')
  // ideaId = ideas._id;
  console.log("ideaID to Like:"+ideaId)
  console.log("/api/ideas/"+ideaId);


      // send PUT request to server to update Love counter
      $.ajax({
        type: 'PUT',
        url: '/api/ideas/' + ideaId+'/loves',
        data: ideaId,
        success: function (data) {

        }

      });


      $("#company").fadeOut(timeout, function(){});
      $("#market").fadeOut(timeout, function(){
        location.reload();
      });
    });

//Hate idea 
$("#hate").click(function(event) {
  console.log("Clicking Hate")
  event.preventDefault();
  ideaId = $(this).attr('data-id')
  
    // send PUT request to server to update Love counter
    $.ajax({
      type: 'PUT',
      url: '/api/ideas/' + ideaId+'/hates',
      data: ideaId,
      success: function (data) {


      }
    });


    $("#company").fadeOut(timeout, function(){});
    $("#market").fadeOut(timeout, function(){
      location.reload();
    });
  });


//Submit search
$("#submit-search").submit(function(event){
 console.log("Submitting search");
 event.preventDefault(); 
 $results.empty();
 $("#submit-search").focus();

 var query = $(".form-control").val();
 console.log("query ="+query);

 $.get('/api/ideas/search/'+query, function(data){
  ideas = data



  _.each(ideas, function(idea) {
   // console.log(idea);
   ideaData = {company: idea.company, market: idea.market, score: idea.score};
   console.log(ideaData);
   var $result = $(_results(ideaData))
   $results.append($result);

 });


});


});


//Autocomplete


       $('.form-control').on('keyup', function(){
           event.preventDefault();
          query =  $('.form-control').val();
          console.log(query);
           $.get('/api/ideas/search/'+query+'/autocomplete', function(data) {
              console.log(data);
            $(".form-control").autocomplete({
              source: data

            });
    
    
     
    
           }); 

      });


});

