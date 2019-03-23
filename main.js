$(document).ready(function () {


    $('.slider-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        dots: true,
    });

    var $page = $('html, body');
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });        

});

function initMap() {
    var first = {lat: 40.6765726, lng: -73.905428};
    var view = {lat: 40.6651654, lng: -73.9116323};

    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 13,
            center: view,
            disableDefaultUI: true
        });
    var marker = new google.maps.Marker({
        position: first,
        map: map,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 30,
            strokeWeight: 45,
            strokeColor: 'white',
            strokeOpacity: 0.9,
            fillColor: '#8b6aff',
            fillOpacity: 1,
            cursor: 'pointer',
        },

    });

$(window).scroll(function() {    
    var allscroll = $(window).scrollTop();
    console.log(allscroll)

    if (allscroll >= 500) {
        $(".static").addClass("col");
    } else {
        $(".static").removeClass("col");
    }

    if (allscroll >= 800) {
        $(".fnav").addClass("active");
    } 
    else {
        $(".fnav").removeClass("active");
    }

    if (allscroll >= 1900) {
        $(".snav").addClass("active");
        $(".fnav").removeClass("active");
    } 
    else {
        $(".snav").removeClass("active");
    }

    if (allscroll >= 3000) {
        $(".thnav").addClass("active");
        $(".fnav").removeClass("active");
        $(".snav").removeClass("active");
    } 
    else {
        $(".thnav").removeClass("active");
    }


});



}



