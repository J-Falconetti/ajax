$(document).ready(function () {

  // start buttons
  function startbuttons() {
    $("#buttons").empty();
    for (let i = 0; i < swchar.length; i++) {
        var btn = $("<button>");
        btn.addClass("swchar");
        btn.attr("data-name", swchar[i]);
        btn.text(swchar[i]);
        $("#buttons").append(btn);
    }
}

  var swchar = ["yoda", "Chewbacca", "Luke Skywalker", "Princess Lea"];
  startbuttons();
//   on click for dym button need the Document.body

$(document.body).on("click",".swchar", function(){
  //  grab val from button
  var chr=($(this).attr("data-name"));
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + chr + "&api_key=T5QXIjtQUGMUSWQFMOm1pco71dqxGs4L&limit=10&rating=G&lang=en"
  $.ajax({
      url: queryURL,
      method: "GET"
  }).
  
  then(function (response) {
      console.log(queryURL)
console.log(response)
var results = response.data;
for(i=0; i < results.length; i++){
// if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
 var stardiv = $("<div>");

  // results--
var starimg = results[i];


  var starimgURL = starimg.images.fixed_width.url;
  var starimgStill = starimg.images.fixed_width_still.url;
// used for showing and frezzing gif images
  var image = $('<img>').attr('src', starimgURL);
  image.attr('data-still', starimgStill);
  image.attr('data-animate', starimgURL);
  image.attr('data-state', 'animate');
  image.on("click", function() {
                      var state = $(this).attr("data-state");
                      if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                      } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                      }
                  });
  
 
// raiting
  var p = $("<p>").text("raiting: " + results[i].rating);
  $(stardiv).append(image)
  $("#gifpics").prepend(stardiv);

}



  }


)
$("#clicker").on("click", function(){
  // adds user choice buttons
  var usrchr =$("#userchoice").val()
  swchar.push(usrchr);
  $("#userchoice").val("");
  console.log(userchoice);
  startbuttons()
})


 
  }
,)}
);
