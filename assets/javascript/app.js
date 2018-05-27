$(document).ready(function() {

    var characters = ["Bart Simpson", "Mr. Burns", "Moe Zislack", "Barney Gumble", "Otto Mann", "Ned Flanders", "Reverend Lovejoy", "Marge Simpson", "Apu", "Skinner", "Santas Little Helper"];

    function renderButtons() {
        $(".botones").empty();
        for (i in characters) {

            var a = $("<button>");
            a.addClass("boton");
            a.attr("data-name", characters[i]);
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
    renderButtons();

    


});