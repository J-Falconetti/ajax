$(document).ready(function () {

    var swchar = ["yoda", "Chewbacca", "Luke Skywalker", "Princess Lea"];
    startbuttons();
//   on click for dym button need the Document.body

 $(document.body).on("click",".swchar", function(){
    //  grab val from button
    var chr=($(this).attr("data-name"));
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + chr + "&api_key=T5QXIjtQUGMUSWQFMOm1pco71dqxGs4L&limit=10"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).
    
    then(function (response) {
        console.log(queryURL)
console.log(response)
var results = response.data;
for(i=0; i < results.length; i++){
   if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
    var stardiv = $("<div>");
    var p = $("<p>").text("raiting: " + results[i].rating);
    var starimg = $("<img>");
    starimg.attr("src", results[i].images.fixed_height.url);
    stardiv.append(p);
    stardiv.append(starimg);
    $("#gifpics").prepend(stardiv);


}
}


    })


 })
 $("#clicker").on("click", function(){
    
    var usrchr =$("#userchoice").val()
    swchar.push(usrchr);
    $("#userchoice").val("");
    console.log(userchoice);
    startbuttons()
 })

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


    // function displaySWC() {
    //     var char = $(this).attr("data-name");

   //}
}

)