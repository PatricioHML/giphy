$(document).ready(function() {


    var characters = ["Bart Simpson", "Mr. Burns", "Moe Zislack", "Barney Gumble", "Otto Mann", "Ned Flanders", "Reverend Lovejoy", "Marge Simpson", "Apu", "Skinner", "Santas Little Helper"];

    function renderButtons() {
        $(".botones").empty();
        for (i in characters) {

            var a = $("<button>");
            a.addClass("boton", characters[i]);
            a.attr("data-char", characters[i]);
            a.text(characters[i]);
            $(".botones").append(a);

            
    }
    }

    $(".btn").on("click", function(event) {
        newChar = $("#addChar").val().trim();
        console.log(newChar);
        event.preventDefault();
        characters.push(newChar);
        renderButtons();
    });

    $(".botones").on("click", ".boton", function(event) {
        

        var dataChar = $(this).attr("data-char");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        dataChar + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(queryURL);

        $('.gifsHere').empty();

        $.ajax({
            url: queryURL,
            method: "GET"
          })
            .then(function(response) {
              console.log(queryURL);
    
              console.log(response);
              var results = response.data;
              console.log(results);
              for (i in results) {
    
                var gifDiv= $("<div>");
    
                var p = $("<p>").text("Rating: " + results[i].rating);
    
                var charImage = $("<img>");
                charImage.attr("src", results[i].images.fixed_height.url);
    
                gifDiv.append(p);
                gifDiv.append(charImage);
                
                $(".gifsHere").prepend(gifDiv);
              }
            });


});

    renderButtons();

});