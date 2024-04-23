$ (document).ready(function(){
    var Gallery = $('#pop-up-container');
    var Iframe = $('#Iframe')

    $('#crackers').on('click', function(){
       Gallery.fadeIn();
       Iframe.attr("src", "gallery.html?data-filter=BiscuitsAndCrackers");
    });

    $('#bread').on('click', function(){
        Gallery.fadeIn();
        Iframe.attr("src", "gallery.html?data-filter=Bread");
    });

    $('#desserts').on('click', function(){
        Gallery.fadeIn();
        Iframe.attr("src", "gallery.html?data-filter=Desserts");
    });

    $('.close-button').on('click', function(){
        Gallery.fadeOut();
    });


})