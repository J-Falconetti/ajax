$(document).ready(function () {

        var swchar = ["yoda", "Chewbacca", "Luke Skywalker"];
        startbuttons();
      
     $(".swchar").on("click", function(){
        //  grab val from button
        var chr=($(this).attr("data-name"));
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + chr + "&api_key=T5QXIjtQUGMUSWQFMOm1pco71dqxGs4L"
        $.ajax({
            url: queryURL,
            method: "GET"
        }).
        
        done(function (response) {
            console.log(response)


        })


     })
     $("#clicker").on("click", function(){
        
        var usrchr =$("#userchoice").val()
        swchar.push(usrchr);
        $("#userchoice").val("");
        startbuttons()
     })

        function startbuttons() {
            for (let i = 0; i < swchar.length; i++) {
                var btn = $("<button>");
                btn.addClass("swchar");
                btn.attr("data-name", swchar[i]);
                btn.text(swchar[i]);
                $("#buttons").append(btn);
            }
        }


        function displaySWC() {
            var char = $(this).attr("data-name");
 
        }
    }

)