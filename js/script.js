// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function() {
    
    function createModal(event) {
        var target = $(event.target);
        console.log('yoyoyo',target.attr('src'));
        $('.modal').modal();
        $(".modal").toggleClass("on");
        $(".modal > .img-responsive").attr("src", target.attr("src"));
    }

    function giphyURLWithSearchTerm(searchTerm) {
        // write a function that will return a url for the giphy API with
        // the searchTerm provided in the parameters
        $.ajax({
            url: "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC",
            method: "GET",
            success: function(response) {
                response.data.forEach(function(item) {
                    var picture = item.images.original.url;
                        var $img = $("<img>", {src: picture, "class": "a"});
                        $img.click(createModal);

                        $(".result").prepend( $img );
                    })  
                }
            });
        }
    $(".custom").click(function() {
        var searchterm = $("#main").val();
        console.log(searchterm);
        giphyURLWithSearchTerm(searchterm);
    });

    function giphyRandom() {
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/random?&api_key=dc6zaTOxFJmzC",
            method: "GET",
            success: function(response) {
                $('.result').html("<img src=" + response.data.images.original.url + ">");
                console.log(response)
            },
        });
    }

    $(".rng").click(function() {
        giphyRandom();

    });

});
