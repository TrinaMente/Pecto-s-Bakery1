$(document).ready(function(){
    var Gallery = $('#pop-up-container');
    var Iframe = $('#Iframe');

    $('.cart').on('click', function(){
        Gallery.fadeIn();
        Iframe.attr("src", "Cart.html");
     });

     $('.fav').on('click', function(){
        Gallery.fadeIn();
        Iframe.attr("src", "Favorites.html");
     });

    $('#ReadMore').on('click', function(){
        Gallery.fadeIn();
        Iframe.attr("src", "AboutUs.html");
     });

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

    $('#Home, #scroll-top').on('click', function(){
        $('body, html').animate({
            scrollTop: $('body').offset().top
        }, 600);
    })

    $('#About-us').on('click', function(){
        $('body, html').animate({
            scrollTop: $('#container-about').offset().top - 160
        }, 600);
    })

    $('#Product').on('click', function(){
        $('body, html').animate({
            scrollTop: $('#products').offset().top - 120
        }, 600);
    })

    $('#Gallery').on('click', function(){
        $('body, html').animate({
            scrollTop: $('#gallery').offset().top - 120
        }, 600);
    })

    $('#Contact-us').on('click', function(){
        $('body, html').animate({
            scrollTop: $('#footer').offset().top - 160
        }, 600);
    })


})