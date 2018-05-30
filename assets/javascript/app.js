$(document).ready(function() {


    var characters = ["Bart Simpson", "Mr. Burns", "Moe Zislack", "Barney Gumble", "Otto Mann", "Ned Flanders", "Reverend Lovejoy", "Marge Simpson", "Apu", "Skinner"];
  
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
        dataChar + "&api_key=dc6zaTOxFJmzC&limit=8";
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
                  console.log(results);
                var moveChar = response.data[i].images.fixed_height.url;
                var stillChar = response.data[i].images.fixed_height_still.url;
    
                var gifDiv= $("<div>");
    
                var p = $("<p>").text("Rating: " + results[i].rating);
    
                var charImage = $("<img>");
                charImage.attr("src", stillChar);
                charImage.attr('data-state', 'still');
                charImage.attr('data-still', stillChar);
                charImage.attr('data-animate', moveChar);
                
                gifDiv.append(p);
                gifDiv.append(charImage);
  
                $(".gifsHere").prepend(gifDiv);
                checkState();
              }
            });
          
                
  
  });
  
    renderButtons();

    });

    function checkState(){
        $('img').on('click', function(){
      var state = $(this).attr('data-state'); 
      if (state == 'still'){
      $(this).attr('src', $(this).data('animate'));
      $(this).attr('data-state', 'animate');
      }else{
      $(this).attr('src', $(this).data('still'));
      $(this).attr('data-state', 'still');
    }
    
        });
  
    }