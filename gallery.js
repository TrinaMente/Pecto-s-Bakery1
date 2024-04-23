$(document).ready(function(){
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    var filterParam = getQueryParam('data-filter');

        if(filterParam) {
        $('.buttons[data-filter="' + filterParam + '"]').addClass('active').siblings().removeClass('active');

        if(filterParam == 'all'){
            $('.image').show(400);
        } else {
            $('.image').hide().filter('.' + filterParam).show(400);
        }
    }

    $('.buttons').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter');

        if(filter == 'all'){
            $('.image').show(400);
        } else {
            $('.image').hide().filter('.' + filter).show(400);
        }
    });
})